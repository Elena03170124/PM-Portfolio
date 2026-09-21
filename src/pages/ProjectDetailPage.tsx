import { useEffect, useRef, useState } from 'react'
import { allProjects } from '../content'
import { useLocale } from '../i18n/LocaleContext'
import { SiteShell } from '../components/layout/SiteShell'
import { StatRow } from '../components/common/StatBlock'

const BASE = import.meta.env.BASE_URL

interface DetailSection {
  id: string
  num: string
  title: string
  kind: 'card' | 'fold' | 'plain'
  html: string
}

interface ProjectDetail {
  slug: string
  projectId?: string
  title: string
  company: string
  period: string
  competencies: string[]
  highlights: string[]
  platforms: string[]
  cover: { src: string; caption: string } | null
  sections: DetailSection[]
}

// One JSON file per project, produced by scripts/notion_import.py; loaded only for the page that needs it.
const loaders = import.meta.glob<{ default: ProjectDetail }>('../content/projectDetails/*.json')

/** Image links in the imported HTML start with %BASE% so they work under any deploy path. */
const withBase = (html: string) => html.replaceAll('%BASE%', BASE)

function Chips({ items, tone }: { items: string[]; tone: 'accent' | 'plain' }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li
          key={item}
          className={`rounded-full border px-3 py-1 text-[12.5px] leading-snug ${
            tone === 'accent' ? 'border-accent-dim/60 text-accent' : 'border-rule text-muted'
          }`}
        >
          {item}
        </li>
      ))}
    </ul>
  )
}

function Lightbox({ src, onClose }: { src: string; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="image"
      onClick={onClose}
      className="fixed inset-0 z-50 flex cursor-zoom-out items-center justify-center bg-ink/85 p-4 sm:p-8"
    >
      <img src={src} alt="" className="max-h-full max-w-full rounded bg-paper object-contain" />
    </div>
  )
}

function SectionBody({ section }: { section: DetailSection }) {
  const { t } = useLocale()
  const ref = useRef<HTMLDivElement>(null)

  const setAll = (open: boolean) => {
    ref.current?.querySelectorAll<HTMLDetailsElement>('details.nb-fold').forEach((d) => (d.open = open))
  }

  return (
    <section id={section.id} className="scroll-mt-32 md:scroll-mt-24 border-t border-rule pt-10">
      <div className="mb-6 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
        <h2 className="flex items-baseline gap-3 font-serif text-[22px] font-semibold leading-snug text-ink sm:text-[26px]">
          {section.num && <span className="font-mono text-[12px] font-normal text-accent">{section.num.padStart(2, '0')}</span>}
          {section.title}
        </h2>
        {section.kind === 'fold' && (
          <div className="flex gap-4 font-mono text-[12px] text-muted">
            <button type="button" onClick={() => setAll(true)} className="hover:text-accent">
              {t({ zh: '全部展開', en: 'Expand all' })}
            </button>
            <button type="button" onClick={() => setAll(false)} className="hover:text-accent">
              {t({ zh: '全部收合', en: 'Collapse all' })}
            </button>
          </div>
        )}
      </div>
      <div ref={ref} className="nb" dangerouslySetInnerHTML={{ __html: withBase(section.html) }} />
    </section>
  )
}

export function ProjectDetailPage({ slug }: { slug: string }) {
  const { t, locale } = useLocale()
  const [detail, setDetail] = useState<ProjectDetail | null>(null)
  const [missing, setMissing] = useState(false)
  const [zoom, setZoom] = useState<string | null>(null)
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    const key = Object.keys(loaders).find((k) => k.endsWith(`/${slug}.json`))
    if (!key) {
      setMissing(true)
      return
    }
    loaders[key]().then((m) => setDetail(m.default))
  }, [slug])

  useEffect(() => {
    if (detail) document.title = `${detail.title.split('｜')[0]} · Elena Zhuang ｜ 莊詒安`
  }, [detail])

  // Highlight the table-of-contents entry for the section being read.
  useEffect(() => {
    if (!detail) return
    const targets = detail.sections.map((s) => document.getElementById(s.id)).filter((el): el is HTMLElement => !!el)
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible[0]) setActiveId(visible[0].target.id)
      },
      { rootMargin: '-96px 0px -60% 0px' },
    )
    targets.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [detail])

  const openImage = (e: React.MouseEvent) => {
    const target = e.target
    if (target instanceof HTMLImageElement && target.src) setZoom(target.src)
  }

  const back = (
    <a href={`${BASE}projects/`} className="font-mono text-[12.5px] text-muted transition-colors hover:text-accent">
      ← {t({ zh: '專案經驗', en: 'Project Experience' })}
    </a>
  )

  if (missing) {
    return (
      <SiteShell current="projects">
        <div className="py-24">
          {back}
          <p className="mt-6 text-[16px] text-muted">{t({ zh: '找不到這個專案。', en: "Couldn't find this project." })}</p>
        </div>
      </SiteShell>
    )
  }

  if (!detail) {
    return (
      <SiteShell current="projects">
        <div className="py-24">{back}</div>
      </SiteShell>
    )
  }

  const [mainTitle, ...restTitle] = detail.title.split('｜')
  const metrics = allProjects.find((p) => p.id === detail.projectId)?.metrics ?? []

  return (
    <SiteShell current="projects">
      <article className="pb-16 pt-10 sm:pt-14" lang="zh-Hant">
        {back}

        <header className="mt-8 max-w-3xl">
          <div className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-[12px] tracking-wide text-accent">
            <span>{detail.company}</span>
            <span className="text-muted">{detail.period}</span>
          </div>
          <h1 className="font-serif text-[28px] font-semibold leading-[1.3] text-ink text-balance sm:text-[38px]">{mainTitle}</h1>
          {restTitle.length > 0 && (
            <p className="mt-3 font-serif text-[18px] leading-[1.6] text-muted sm:text-[20px]">{restTitle.join('｜')}</p>
          )}
        </header>

        {locale === 'en' && (
          <p className="mt-6 max-w-3xl rounded border border-rule bg-surface px-4 py-3 text-[13.5px] leading-relaxed text-muted" lang="en">
            The full case study is currently available in Chinese only.
          </p>
        )}

        {metrics.length > 0 && (
          <div className="mt-8">
            <StatRow items={metrics.map((m) => ({ value: t(m.value), label: t(m.label) }))} />
          </div>
        )}

        <div className="mt-8 space-y-5">
          {(
            [
              ['PM 能力', detail.competencies, 'accent'],
              ['專案亮點', detail.highlights, 'plain'],
              ['關聯平台', detail.platforms, 'plain'],
            ] as const
          ).map(([label, items, tone]) => (
            <div key={label} className="grid gap-2 md:grid-cols-[110px_minmax(0,1fr)] md:gap-x-10">
              <span className="pt-1 font-mono text-[11px] uppercase tracking-[0.1em] text-muted-dim">{label}</span>
              <Chips items={items} tone={tone} />
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,1fr)_190px]">
          <div className="min-w-0 max-w-3xl space-y-12" onClick={openImage}>
            {detail.cover && (
              <figure className="nb-cover">
                <img src={withBase(detail.cover.src)} alt="" />
                {detail.cover.caption && <figcaption>{detail.cover.caption}</figcaption>}
              </figure>
            )}
            {detail.sections.map((section) => (
              <SectionBody key={section.id} section={section} />
            ))}
          </div>

          <aside className="hidden lg:block">
            <nav aria-label="目錄" className="sticky top-24 border-l border-rule pl-4">
              <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.1em] text-muted-dim">{t({ zh: '目錄', en: 'Contents' })}</p>
              <ul className="space-y-2.5">
                {detail.sections.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className={`block text-[13px] leading-snug transition-colors hover:text-accent ${
                        activeId === s.id ? 'text-accent' : 'text-muted'
                      }`}
                    >
                      {s.num && <span className="mr-1.5 font-mono text-[11px]">{s.num.padStart(2, '0')}</span>}
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
        </div>

        <div className="mt-16 border-t border-rule pt-8">{back}</div>
      </article>

      {zoom && <Lightbox src={zoom} onClose={() => setZoom(null)} />}
    </SiteShell>
  )
}
