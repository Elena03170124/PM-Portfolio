#!/usr/bin/env python3
"""Turn one Notion project page into a project-detail file for the portfolio site.

Input is the JSON that the Notion MCP `fetch` tool returns for a page (saved to a file).
Output:
  src/content/projectDetails/<slug>.json   metadata + the page split into sections (HTML)
  public/projects/<slug>/NN.<ext>          every image, downloaded

Notion image links are signed URLs that expire after about five minutes, so run this
straight after fetching the page.

    python3 scripts/notion_import.py --src <fetch-result.json> --slug edu-cloud-integration

Section layout follows the portfolio template: each top-level callout is one section
("1. PM能力應用分析" ... "5. 附錄"). How a section is grouped is set in SECTION_MODES.
"""
import argparse
import html
import json
import re
import sys
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent

# section number -> (mode, heading level): "card" wraps each heading's content in a card,
# "fold" wraps it in a <details> that starts closed.
SECTION_MODES = {1: ("card", 3), 2: ("card", 3), 3: ("card", 3), 4: ("fold", 2), 5: ("fold", 3)}

# Convention (not automated here, apply by hand after import):
# - Optional "scope" object — {time, duration, headcount, stakeholders: [{dept, roles}]}
#   — renders as two rows under the PM-能力 chips (專案範疇 chips, then a 利害關係人
#   tag row) when present; add it by hand if the source project has this info,
#   otherwise leave it out.
# - No "highlights" chip row on the detail page — it's dropped from the output above.
# - Each section's intro line gets a one-line "what this part covers" caption:
#   <p class="nb-purpose">...</p> right after the section opens.
# - Each STAR sub-heading (一/二/三/四/五) inside the full write-up gets the same
#   caption, but it must stay visible while the <details> is collapsed, so it goes
#   inside the <summary>, not the fold body:
#   <summary><span class="nb-fold-heading"><span>一、背景...</span>
#     <span class="nb-purpose">...</span></span></summary>

ALLOWED_COLORS = {"gray", "blue", "red", "orange", "yellow", "green", "purple", "pink", "brown"}


class Node:
    def __init__(self, text, indent):
        self.text = text
        self.indent = indent
        self.children = []


def parse(lines):
    root = Node("", -1)
    stack = [root]
    for raw in lines:
        if not raw.strip():
            continue
        indent = len(raw) - len(raw.lstrip("\t"))
        node = Node(raw.lstrip("\t").rstrip(), indent)
        while stack[-1].indent >= indent:
            stack.pop()
        stack[-1].children.append(node)
        stack.append(node)
    return root


# ---------- inline text ----------

def inline(s):
    stash = []

    def keep(markup):
        stash.append(markup)
        return f"\x00{len(stash) - 1}\x00"

    # A raw HTML tag written as text, e.g. \<link href="[url](url)" ...\>, becomes a code span.
    def escaped_tag(m):
        inner = re.sub(r"\[([^\]]*)\]\([^)]*\)", r"\1", m.group(1))
        return keep(f"<code>&lt;{html.escape(inner)}&gt;</code>")

    s = re.sub(r"\\<(.+?)\\>", escaped_tag, s)
    # Stray inline-color markup the exporter leaves unconverted, e.g. "...text**。 {color="blue"}".
    s = re.sub(r"\s*\{color=\"[a-z_]+\"\}", "", s)
    s = re.sub(r"`([^`]+)`", lambda m: keep(f"<code>{html.escape(m.group(1))}</code>"), s)
    s = re.sub(r"\\([\\`*_{}\[\]()#+\-.!<>|~])", lambda m: keep(html.escape(m.group(1))), s)

    spans = []  # closing tags for open <span> elements, in order

    def open_span(m):
        attrs = m.group(1)
        color = re.search(r'color="([a-z_]+)"', attrs)
        underline = 'underline="true"' in attrs
        cls = None
        if color:
            base = color.group(1).replace("_bg", "")
            if base in ALLOWED_COLORS:
                cls = f"nc-{base}"
        tag = "u" if underline else "span"
        spans.append(tag)
        return keep(f'<{tag} class="{cls}">' if cls else f"<{tag}>")

    s = re.sub(r"<span([^>]*)>", open_span, s)
    s = re.sub(r"</span>", lambda m: keep(f"</{spans.pop() if spans else 'span'}>"), s)
    s = re.sub(r"<br\s*/?>", lambda m: keep("<br>"), s)

    s = html.escape(s, quote=False)
    s = re.sub(r"\*\*(.+?)\*\*", r"<strong>\1</strong>", s)
    s = re.sub(r"(?<![*\w])\*(?!\s)(.+?)(?<!\s)\*(?![*\w])", r"<em>\1</em>", s)
    s = re.sub(r"\[([^\]]+)\]\((https?://[^)\s]+)\)", r'<a href="\2" target="_blank" rel="noopener noreferrer">\1</a>', s)
    return re.sub(r"\x00(\d+)\x00", lambda m: stash[int(m.group(1))], s)


# ---------- blocks ----------

IMG_RE = re.compile(r"^!\[[^\]]*\]\((.*)\)$")
HEAD_RE = re.compile(r"^(#{1,6})\s+(.*)$")
BUL_RE = re.compile(r"^[-*]\s+(.*)$")
NUM_RE = re.compile(r"^(\d+)\.\s+(.*)$")
TABLE_RE = re.compile(r"<table([^>]*)>(.*?)</table>", re.S)


def render_table(attrs, inner):
    """Notion exports a table as raw pseudo-HTML that ignores the doc's indentation
    scheme, so it's flattened into one line here (before the indentation parser
    ever sees it) rather than walked node by node."""
    header = 'header-row="true"' in attrs
    inner = re.sub(r"<colgroup>.*?</colgroup>", "", inner, flags=re.S)
    rows = re.findall(r"<tr>(.*?)</tr>", inner, re.S)
    html_rows = []
    for i, row in enumerate(rows):
        cells = re.findall(r"<td>(.*?)</td>", row, re.S)
        tag = "th" if header and i == 0 else "td"
        cells_html = "".join(f"<{tag}>{inline(c.strip())}</{tag}>" for c in cells)
        html_rows.append(f"<tr>{cells_html}</tr>")
    return f'<div class="nb-table-wrap"><table>{"".join(html_rows)}</table></div>'


def preprocess_tables(body):
    return TABLE_RE.sub(lambda m: render_table(m.group(1), m.group(2)), body)


class Renderer:
    def __init__(self, images):
        self.images = images  # notion url -> local path
        self.warnings = []

    def kind(self, n):
        t = n.text
        if t in ("<empty-block/>", "</callout>", "</details>", "</summary>"):
            return "skip"
        if t.startswith("<callout"):
            return "callout"
        if t.startswith("<details"):
            return "details"
        if t.startswith("<summary"):
            return "summary"
        if t.startswith('<div class="nb-table-wrap">'):
            return "rendered"
        if t == "---":
            return "hr"
        if IMG_RE.match(t):
            return "img"
        if HEAD_RE.match(t):
            return "heading"
        if t.startswith("> "):
            return "quote"
        if BUL_RE.match(t):
            return "bullet"
        if NUM_RE.match(t):
            return "number"
        if re.match(r"^</?(table|tr|td|th|column|columns|toggle|aside|video|file|pdf|audio|embed)", t):
            self.warnings.append(f"unsupported block: {t[:60]}")
        return "para"

    def children(self, nodes, group=None):
        """group = (mode, level): wrap content under each heading of that level."""
        if group:
            return self.grouped(nodes, group)
        out = []
        i = 0
        nodes = [n for n in nodes if self.kind(n) != "skip"]
        while i < len(nodes):
            n = nodes[i]
            k = self.kind(n)
            if k in ("bullet", "number"):
                j = i
                while j < len(nodes) and self.kind(nodes[j]) == k:
                    j += 1
                out.append(self.list(nodes[i:j], k))
                i = j
            elif k == "img":
                j = i
                while j < len(nodes) and self.kind(nodes[j]) == "img":
                    j += 1
                out.append(self.shots(nodes[i:j]))
                i = j
            elif k == "details":
                # <details> is followed by a <summary> sibling that holds the body.
                summary = nodes[i + 1] if i + 1 < len(nodes) and self.kind(nodes[i + 1]) == "summary" else None
                title = re.sub(r"</?summary>", "", summary.text) if summary else ""
                body = self.children(summary.children) if summary else self.children(n.children)
                out.append(f'<details class="nb-toggle"><summary>{inline(title)}</summary><div>{body}</div></details>')
                i += 2 if summary else 1
            else:
                out.append(self.block(n, k))
                i += 1
        return "".join(out)

    def block(self, n, k):
        t = n.text
        if k == "hr":
            return "<hr>"
        if k == "heading":
            m = HEAD_RE.match(t)
            level = min(len(m.group(1)) + 1, 6) if len(m.group(1)) == 1 else len(m.group(1))
            return f"<h{level}>{inline(m.group(2))}</h{level}>{self.children(n.children)}"
        if k == "quote":
            return f"<blockquote>{inline(t[2:])}{self.children(n.children)}</blockquote>"
        if k == "callout":
            return f'<div class="nb-callout">{self.children(n.children)}</div>'
        if k == "rendered":
            return t
        if k == "para":
            text = re.sub(r"^(<br>\s*)+", "", t)
            sub = self.children(n.children)
            return f"<p>{inline(text)}</p>" + (f'<div class="nb-sub">{sub}</div>' if sub else "")
        return ""

    def list(self, items, k):
        tag = "ul" if k == "bullet" else "ol"
        start = ""
        if k == "number":
            first = int(NUM_RE.match(items[0].text).group(1))
            start = f' start="{first}"' if first != 1 else ""
        lis = []
        for it in items:
            m = (BUL_RE if k == "bullet" else NUM_RE).match(it.text)
            text = m.group(1) if k == "bullet" else m.group(2)
            lis.append(f"<li>{inline(text)}{self.children(it.children)}</li>")
        return f"<{tag}{start}>{''.join(lis)}</{tag}>"

    def shots(self, nodes):
        figs = []
        for n in nodes:
            url = IMG_RE.match(n.text).group(1)
            if not url:
                continue  # empty image placeholder
            src = self.images.get(url)
            if not src:
                self.warnings.append("image without a downloaded file")
                continue
            figs.append(f'<img src="{src}" alt="" loading="lazy">')
        return f'<div class="nb-shots">{"".join(figs)}</div>' if figs else ""

    def grouped(self, nodes, group):
        mode, level = group
        nodes = [n for n in nodes if self.kind(n) != "skip"]

        def is_head(n):
            m = HEAD_RE.match(n.text)
            return bool(m) and len(m.group(1)) == level

        first = next((i for i, n in enumerate(nodes) if is_head(n)), len(nodes))
        out = [self.children(nodes[:first])]
        i = first
        idx = 0
        while i < len(nodes):
            j = i + 1
            while j < len(nodes) and not is_head(nodes[j]):
                j += 1
            head = HEAD_RE.match(nodes[i].text).group(2)
            body = self.children([n for n in nodes[i + 1 : j] if self.kind(n) != "hr"] + [], None)
            body = self.children(nodes[i].children) + body
            if mode == "card":
                out.append(f'<section class="nb-card"><h3>{inline(head)}</h3>{body}</section>')
            else:
                out.append(
                    f'<details class="nb-fold"><summary><span>{inline(head)}</span></summary><div class="nb-fold-body">{body}</div></details>'
                )
            i = j
            idx += 1
        return "".join(out)


def find_first_heading(node):
    """Depth-first: remove and return the first heading line under `node`."""
    for i, c in enumerate(node.children):
        if HEAD_RE.match(c.text):
            node.children.pop(i)
            return HEAD_RE.match(c.text).group(2)
        found = find_first_heading(c)
        if found:
            return found
    return None


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--src", required=True, help="saved Notion fetch result (JSON)")
    ap.add_argument("--slug", required=True)
    ap.add_argument("--project-id", help="id of the matching entry in src/content/projects.*.ts")
    args = ap.parse_args()

    data = json.loads(Path(args.src).read_text(encoding="utf-8"))
    text = data["text"]
    props = json.loads(re.search(r"<properties>\s*(\{.*?\})\s*</properties>", text, re.S).group(1))
    body = re.search(r"<content>\n(.*)\n</content>", text, re.S).group(1)
    body = preprocess_tables(body)

    # download images
    out_dir = ROOT / "public" / "projects" / args.slug
    out_dir.mkdir(parents=True, exist_ok=True)
    for old in out_dir.glob("*"):
        old.unlink()
    images = {}
    for n, url in enumerate(dict.fromkeys(re.findall(r"!\[[^\]]*\]\((https?://[^)]+)\)", body)), start=1):
        ext = Path(url.split("?")[0]).suffix.lower() or ".png"
        name = f"{n:02d}{ext}"
        req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
        with urllib.request.urlopen(req, timeout=60) as r:
            (out_dir / name).write_bytes(r.read())
        images[url] = f"%BASE%projects/{args.slug}/{name}"
    print(f"downloaded {len(images)} images", file=sys.stderr)

    root = parse(body.split("\n"))
    top = root.children

    # cover: leading image(s) + optional caption, before the first divider
    cover = None
    rest = []
    seen_hr = False
    for n in top:
        if not seen_hr and IMG_RE.match(n.text) and IMG_RE.match(n.text).group(1):
            cover = {"src": images[IMG_RE.match(n.text).group(1)], "caption": ""}
        elif not seen_hr and cover and not cover["caption"] and n.text != "---":
            cover["caption"] = re.sub(r"<[^>]+>", "", n.text).strip("（）() ")
        else:
            if n.text == "---":
                seen_hr = True
            rest.append(n)

    r = Renderer(images)
    sections = []
    for n in rest:
        if not n.text.startswith("<callout"):
            continue
        title = find_first_heading(n)
        if not title:
            continue
        title = title.replace("**", "").strip()
        m = re.match(r"^(\d+)\.\s*(.*)$", title)
        num = int(m.group(1)) if m else None
        label = m.group(2) if m else title
        mode = SECTION_MODES.get(num)
        sections.append(
            {
                "id": f"sec-{num}" if num else f"sec-{len(sections) + 1}",
                "num": str(num) if num else "",
                "title": label,
                "kind": mode[0] if mode else "plain",
                "html": r.children(n.children, mode),
            }
        )

    period = ""
    start, end = props.get("date:專案期間:start"), props.get("date:專案期間:end")
    if start:
        fmt = lambda d: d[:7].replace("-", ".")
        period = fmt(start) + (f" – {fmt(end)}" if end else "")

    result = {
        "slug": args.slug,
        "projectId": args.project_id,
        "title": props.get("Name") or props.get("Title") or data.get("title", ""),
        "company": props.get("企業", ""),
        "period": period,
        "competencies": props.get("PM能力面向", []),
        "platforms": props.get("專案關聯平台", []),
        "cover": cover,
        "sections": sections,
        "sourceEditedAt": data.get("page_last_edited_at"),
    }
    out = ROOT / "src" / "content" / "projectDetails" / f"{args.slug}.json"
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(json.dumps(result, ensure_ascii=False, indent=1), encoding="utf-8")
    print(f"wrote {out.relative_to(ROOT)}: {len(sections)} sections", file=sys.stderr)
    for w in sorted(set(r.warnings)):
        print("warning:", w, file=sys.stderr)


if __name__ == "__main__":
    main()
