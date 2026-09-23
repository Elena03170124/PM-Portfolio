import type { ReactNode } from 'react'
import { hotaiProjects, southoneProjects } from '../content'
import type { Project } from '../content/types'
import { useLocale } from '../i18n/LocaleContext'
import { SiteShell } from '../components/layout/SiteShell'
import { Reveal } from '../components/common/Reveal'

const BASE = import.meta.env.BASE_URL

/** On a phone, break a "before → after" subtitle only at the arrow, so the two
 *  phrases each keep their own line instead of wrapping wherever they run out of
 *  room. From the sm breakpoint up there's space for the whole thing on one line. */
function ArrowSubtitle({ text }: { text: string }) {
  const [before, after] = text.split(' → ')
  if (!after) return <>{text}</>
  return (
    <>
      <span className="block sm:inline">{before}</span>{' '}
      <span className="block sm:inline">→ {after}</span>
    </>
  )
}

// A project has a full write-up when src/content/projectDetails/<project id>.json exists.
const detailSlugs = new Set(
  Object.keys(import.meta.glob('../content/projectDetails/*.json')).map((path) => path.split('/').pop()!.replace('.json', '')),
)

interface GrowthRow {
  dimension: { zh: string; en: string }
  subtitle: { zh: string; en: string }
  before: { zh: string; en: string }
  after: { zh: string; en: string }
  /** The 南一集團 example names a specific project; cited here as evidence. */
  citation: { projectId: string; label: { zh: string; en: string } }
}

const growthRows: GrowthRow[] = [
  {
    dimension: { zh: '需求拆解層級', en: 'Requirement breakdown' },
    subtitle: {
      zh: '從單純梳理產品規格 → 到規劃商業價值最大化的階段目標',
      en: 'Sorting out product specs → scoping a phase that maximizes business value',
    },
    before: {
      zh: '根據設計稿拆出需求規格與驗收標準。',
      en: 'Broke design mockups down into requirement specs and acceptance criteria.',
    },
    after: {
      zh: '將模糊需求拆解成具體 MVP 範疇，階段性交付工項。',
      en: 'Broke down vague requirements into a concrete MVP scope, delivered as phased work items.',
    },
    citation: {
      projectId: 'dual-system-merge',
      label: { zh: '補教 × 家教雙系統合併｜以使用者功能平穩移轉為優先', en: 'Tutoring–classroom system merge · users moved over with no disruption' },
    },
  },
  {
    dimension: { zh: '系統理解深度', en: 'System understanding' },
    subtitle: {
      zh: '從單一功能異常的成因理解 → 到分析跨服務間的資料相依協作流程',
      en: 'Tracing why a single feature broke → reading how data dependencies work together across services',
    },
    before: {
      zh: '聚焦在 App 前端功能異常問題的理解與修復追蹤。',
      en: 'Focused on understanding and tracking front-end bugs in the app.',
    },
    after: {
      zh: '理解前後端 API 溝通協作機制、跨資料庫比對方式、跨服務資料欄位差異與整併方案。',
      en: 'Understood how front and back end talk over the API, how to reconcile data across databases, and how to resolve and merge field differences between services.',
    },
    citation: {
      projectId: 'teacher-auth',
      label: { zh: '教師身份驗證機制建構｜橫跨業務、研發雙部門資料庫比對驗證資料', en: 'Teacher identity verification · reconciling data across business and engineering databases' },
    },
  },
  {
    dimension: { zh: '決策衡量維度', en: 'Decision criteria' },
    subtitle: {
      zh: '從參照同業做法或使用者回饋 → 到能結合商業、營運、技術可行、系統穩定等因素評估解決方案',
      en: 'Referencing industry practice or user feedback → weighing business, operations, feasibility and stability together',
    },
    before: {
      zh: '由需求訪談、使用者評價回饋、競品分析，提出功能流程優化建議。',
      en: 'Proposed flow improvements based on requirement interviews, user feedback and competitor analysis.',
    },
    after: {
      zh: '站在開發成本、技術可行、長期維運、時程壓力、外部合規等多重限制下權衡解法。',
      en: 'Weighed a solution under development cost, technical feasibility, long-term upkeep, schedule pressure and external compliance all at once.',
    },
    citation: {
      projectId: 'edu-cloud-integration',
      label: { zh: '教育部雲端資料介接專案｜在多重條件下推動折衷方案落地', en: 'EduCloud data integration · landing a compromise under multiple constraints' },
    },
  },
  {
    dimension: { zh: '風險管理範圍', en: 'Risk management' },
    subtitle: {
      zh: '從單純避免規格疏漏而影響功能正常運作 → 到跨域資訊同步與跨系統相依風險預防',
      en: 'Simply catching spec gaps that would break a feature → syncing information across domains and preventing cross-system dependency risk',
    },
    before: {
      zh: '盤點未定義明確的功能規格，或補齊尚未納入的應測試驗收項目。',
      en: 'Flagged loosely defined specs and filled in acceptance-test items that had been missed.',
    },
    after: {
      zh: '考量跨部門資訊同步落實方法、上線作業流程可能風險與備援處理方案。',
      en: 'Weighed how information stays in sync across departments, and the process risks — with a fallback — of going live.',
    },
    citation: {
      projectId: 'dual-system-merge',
      label: { zh: '補教 × 家教雙系統合併｜上線前跨部門教育訓練與推版風險檢核盤點', en: 'Tutoring–classroom system merge · cross-department training and a go-live risk checklist' },
    },
  },
  {
    dimension: { zh: '溝通轉譯難度', en: 'Communication & translation' },
    subtitle: {
      zh: '從只需教一般使用者如何操作 → 到用轉化後的共通語言，讓不同角色理解為何以及如何開發運作',
      en: 'Teaching end users how to click through → a shared language that lets every role understand why and how',
    },
    before: {
      zh: '以使用者操作方法為出發點，單純傳達「做什麼」能解決眼前的產品功能問題。',
      en: 'Started from how users operate the product, communicating only "what to do" to fix the issue in front of them.',
    },
    after: {
      zh: '快速吸收陌生專業（如：OIDC 身份識別、UA 分流部署流程），並轉化為跨域共通語言，促進團隊達成共識。',
      en: 'Absorbed unfamiliar expertise fast (OIDC identity verification, UA-based routing deployment) and translated it into a shared language across domains to build consensus.',
    },
    citation: {
      projectId: 'member-auth-unification',
      label: {
        zh: '會員身份驗證模式統一化｜將 OIDC 流程繪製為流程圖，協助非技術角色理解重要處理節點、對齊認知',
        en: 'Unifying member authentication · drew the OIDC flow as a diagram so non-technical roles could follow the key steps and align understanding',
      },
    },
  },
]

function GrowthCompare() {
  const { t } = useLocale()

  return (
    <section aria-labelledby="growth-title" className="border-y border-rule py-12 sm:py-14">
      <Reveal>
        <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.14em] text-accent">
          {t({ zh: '能力演進', en: 'growth' })}
        </p>
        <h2 id="growth-title" className="max-w-3xl font-serif text-[24px] font-semibold leading-[1.35] text-ink text-balance sm:text-[30px]">
          {t({ zh: '從「任務執行者」到「系統層級決策者」', en: 'From task executor to system-level decision-maker' })}
        </h2>
        <p className="mt-4 max-w-3xl whitespace-pre-line text-[15px] leading-[1.85] text-muted">
          {t({
            zh: '結合整體作品脈絡，可明顯感受我由「任務執行者」蛻變為「系統層級決策者」。\n論需求拆解、系統理解、決策衡量、風險管理與溝通轉譯等專業能力，都有顯著成長。',
            en: 'Read across the whole portfolio, the shift from task executor to system-level decision-maker is clear.\nAcross requirement breakdown, system understanding, decision criteria, risk management and communication, the growth shows.',
          })}
        </p>
      </Reveal>

      <Reveal delayMs={80}>
        <ul className="mt-10">
          {growthRows.map((row, i) => (
            <li key={row.dimension.zh} className="border-b border-rule py-8 first:pt-2 last:border-b-0">
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-[11px] text-muted-dim">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="font-serif text-[18px] font-semibold leading-snug text-ink sm:text-[19px]">{t(row.dimension)}</h3>
              </div>
              <p className="mt-1.5 text-[13px] leading-[1.6] text-ink/75">
                <ArrowSubtitle text={t(row.subtitle)} />
              </p>

              <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-stretch sm:gap-0">
                <div className="sm:flex-1">
                  <SideLabel tone="plain">{t({ zh: '和泰產品助理', en: 'Hotai · Product Assistant' })}</SideLabel>
                  <p className="mt-1.5 text-[14.5px] leading-[1.8] text-muted">{t(row.before)}</p>
                </div>

                {/* Stacked on a phone, the accent border on the "after" block is enough to mark
                    the change — no arrow needed there. From sm up, it sits between the two side
                    by side, matching the subtitle's own horizontal "→" above. */}
                <div aria-hidden="true" className="hidden items-center justify-center text-accent sm:flex sm:px-4">
                  <svg
                    viewBox="0 0 16 16"
                    className="size-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </div>

                <div className="border-l-2 border-accent-dim/70 pl-4 sm:flex-1 sm:pl-5">
                  <SideLabel tone="accent">{t({ zh: '南一產品經理', en: 'Nani · Product Manager' })}</SideLabel>
                  <p className="mt-1.5 text-[14.5px] font-medium leading-[1.8] text-ink">{t(row.after)}</p>
                  <GrowthCitation citation={row.citation} />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  )
}

function SideLabel({ children, tone }: { children: ReactNode; tone: 'plain' | 'accent' }) {
  return (
    <span
      className={`font-mono text-[10.5px] uppercase tracking-[0.08em] ${tone === 'accent' ? 'text-accent' : 'text-muted-dim'}`}
    >
      {children}
    </span>
  )
}

/** Names the project the 南一集團 example is drawn from — links to its detail page
 *  when one exists, otherwise to its card further down this same page. */
function GrowthCitation({ citation }: { citation: GrowthRow['citation'] }) {
  const { t } = useLocale()
  const hasDetail = detailSlugs.has(citation.projectId)
  const href = hasDetail ? `${BASE}projects/${citation.projectId}/` : `#project-${citation.projectId}`

  return (
    <a href={href} className="mt-2 block font-mono text-[11.5px] leading-[1.6] text-muted transition-colors hover:text-accent">
      {t({ zh: '代表案例：', en: 'Example: ' })}
      {t(citation.label)}
    </a>
  )
}

function ProjectCard({ project, archival }: { project: Project; archival?: boolean }) {
  const { t } = useLocale()
  const hasDetail = detailSlugs.has(project.id)
  const metrics = project.metrics.slice(0, 2)

  return (
    <article
      id={`project-${project.id}`}
      className={`relative scroll-mt-24 flex flex-col border p-5 sm:p-6 ${
        archival ? 'border-dashed border-rule' : 'border-rule'
      } ${hasDetail ? 'bg-surface transition-colors hover:border-accent-dim' : 'bg-disabled'}`}
    >
      <div className="flex items-center justify-between gap-3">
        <p className="font-mono text-[11.5px] text-muted">{t(project.period)}</p>
        {archival && (
          <span className="rounded-full border border-rule px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.06em] text-muted-dim">
            {t({ zh: '原始樣貌', en: 'Unedited' })}
          </span>
        )}
      </div>
      <h3 className="mt-2 font-serif text-[18px] font-semibold leading-[1.45] text-ink sm:text-[19px]">
        {hasDetail ? (
          <a href={`${BASE}projects/${project.id}/`} className="after:absolute after:inset-0">
            {t(project.title)}
          </a>
        ) : (
          t(project.title)
        )}
      </h3>
      <p className="mt-3 text-[14.5px] leading-[1.8] text-muted">{t(project.summary)}</p>

      {metrics.length > 0 && (
        <dl className="mt-5 flex flex-wrap gap-x-7 gap-y-3">
          {metrics.map((m, i) => (
            <div key={i}>
              <dd className="font-serif text-[20px] font-semibold leading-none text-accent">{t(m.value)}</dd>
              <dt className="mt-1.5 font-mono text-[11px] text-muted-dim">{t(m.label)}</dt>
            </div>
          ))}
        </dl>
      )}

      <p className="mt-auto pt-6 font-mono text-[12.5px]">
        {hasDetail ? (
          <span className="text-accent">{t({ zh: '查看完整說明 →', en: 'Read the full write-up →' })}</span>
        ) : (
          <span className="text-muted-dim">{t({ zh: '完整說明整理中', en: 'Full write-up in progress' })}</span>
        )}
      </p>
    </article>
  )
}

function ProjectGroup({
  title,
  note,
  projects,
  archival,
}: {
  title: string
  note?: ReactNode
  projects: Project[]
  archival?: boolean
}) {
  return (
    <Reveal>
      <section className="mt-14">
        <h2 className="font-serif text-[22px] font-semibold text-ink sm:text-[26px]">{title}</h2>
        {note && <div className="mt-4">{note}</div>}
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} archival={archival} />
          ))}
        </div>
      </section>
    </Reveal>
  )
}

/** A structured callout, not a caption — so "kept as-is on purpose" survives a skim
 *  instead of reading like an apology for unpolished work. */
function ArchivalNote() {
  const { t } = useLocale()
  return (
    <div className="border border-rule bg-surface px-5 py-4">
      <p className="font-mono text-[10.5px] uppercase tracking-[0.08em] text-accent">
        {t({ zh: '刻意保留當年作品原貌・未重新優化', en: 'Kept exactly as it was, on purpose — not reworked' })}
      </p>
      <p className="mt-2 text-[14px] leading-relaxed text-muted">
        {t({
          zh: '以下是早期作品集，保留原始呈現方式，不做調整優化。',
          en: 'These are early projects, kept in their original form with no touch-ups.',
        })}
      </p>
      <p className="mt-1.5 text-[14.5px] font-semibold leading-relaxed text-ink">
        {t({
          zh: '藉此真實呈現我在兩份 PM 工作間的能力演進。',
          en: 'The point is to show the growth between my two PM roles honestly.',
        })}
      </p>
    </div>
  )
}

export function ProjectsPage() {
  const { t } = useLocale()

  return (
    <SiteShell current="projects">
      <section className="pb-12 pt-16 sm:pb-14 sm:pt-24">
        <Reveal>
          <div className="mb-6 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            {t({ zh: '專案經驗 · project experience', en: 'project experience' })}
          </div>
          <h1 className="max-w-3xl font-serif text-[28px] font-semibold leading-[1.35] text-ink sm:text-[36px] md:text-[44px]">
            {t({
              zh: ['以 PM 核心能力為切入點', '呈現專業累積與專案價值'],
              en: ['Seen through core PM competencies', 'professional growth and project value'],
            }).map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </h1>
        </Reveal>
      </section>

      <GrowthCompare />

      <ProjectGroup
        title={t({ zh: '南一集團・跨系統平台整合串接', en: 'Nani · cross-system platform integration' })}
        projects={southoneProjects}
      />
      <div className="pb-12 sm:pb-20">
        <ProjectGroup
          title={t({ zh: '和泰聯網・初級 PM 能力養成', en: 'Hotai Motor · early-career PM work' })}
          note={<ArchivalNote />}
          archival
          projects={hotaiProjects}
        />
      </div>
    </SiteShell>
  )
}
