import { hotaiProjects, southoneProjects } from '../content'
import type { Project } from '../content/types'
import { useLocale } from '../i18n/LocaleContext'
import { SiteShell } from '../components/layout/SiteShell'
import { Reveal } from '../components/common/Reveal'

const BASE = import.meta.env.BASE_URL

// A project has a full write-up when src/content/projectDetails/<project id>.json exists.
const detailSlugs = new Set(
  Object.keys(import.meta.glob('../content/projectDetails/*.json')).map((path) => path.split('/').pop()!.replace('.json', '')),
)

interface GrowthRow {
  dimension: { zh: string; en: string }
  before: { zh: string; en: string }
  after: { zh: string; en: string }
}

// DRAFT: written from the project case studies; to be reviewed and reworded by the author.
const growthRows: GrowthRow[] = [
  {
    dimension: { zh: '問題拆解', en: 'Breaking problems down' },
    before: {
      zh: '依 SPEC 與流程圖，把功能需求拆成可驗收的測試項目。',
      en: 'Turned feature requirements into testable acceptance items, working from the spec and flow diagrams.',
    },
    after: {
      zh: '把「一人一班」約 5,000 個班的分散結構，重構為以年級為核心的 60 個班級模型。',
      en: 'Restructured roughly 5,000 one-teacher-one-class groups into a grade-centred model of 60 classes.',
    },
  },
  {
    dimension: { zh: '系統理解', en: 'Understanding the system' },
    before: {
      zh: '用 Figma 繪製 Logic Flow，協助 RD 評估串接第三方租車 App 的技術限制。',
      en: 'Drew logic flows in Figma so engineers could judge the technical limits of integrating a third-party car-rental app.',
    },
    after: {
      zh: '盤點跨系統的推版順序、前置條件與相依關係，整理成完整的上線檢核指引。',
      en: 'Mapped release order, prerequisites and cross-system dependencies into a full go-live checklist.',
    },
  },
  {
    dimension: { zh: '決策思考', en: 'Decision-making' },
    before: {
      zh: '訪談使用者、提出 App 優化建議，並維護團隊溝通文件。',
      en: 'Interviewed users, proposed app improvements and kept the team’s communication documents up to date.',
    },
    after: {
      zh: '在弱掃合規、既有架構與維運成本之間，與團隊商議 UA 分流方案，避開 6–8 個月的架構重構。',
      en: 'Weighed scan compliance, legacy architecture and upkeep cost with the team, and chose UA-based routing to avoid a 6–8 month rebuild.',
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
        <p className="mt-4 max-w-3xl text-[15px] leading-[1.85] text-muted">
          {t({
            zh: '結合整體作品脈絡，可以明顯感受我由「任務執行者」蛻變為「系統層級決策者」，在問題拆解深度、系統理解程度與決策思考上都有顯著的成長幅度。',
            en: 'Read across the whole portfolio, the shift from task executor to system-level decision-maker shows in three places: how deeply I break a problem down, how well I understand the system, and how I decide.',
          })}
        </p>
      </Reveal>

      <Reveal delayMs={80}>
        <div className="mt-10 hidden grid-cols-[120px_minmax(0,1fr)_minmax(0,1fr)] gap-x-8 border-b border-rule pb-3 font-mono text-[12px] text-muted sm:grid">
          <span />
          <span>
            {t({ zh: '和泰聯網・任務執行者', en: 'Hotai Motor · task executor' })}
          </span>
          <span className="text-accent">{t({ zh: '南一集團・系統層級決策者', en: 'Nani · system-level decision-maker' })}</span>
        </div>
        <ul>
          {growthRows.map((row) => (
            <li
              key={row.dimension.zh}
              className="grid gap-x-8 gap-y-3 border-b border-rule py-6 sm:grid-cols-[120px_minmax(0,1fr)_minmax(0,1fr)]"
            >
              <span className="font-serif text-[16px] font-semibold text-ink">{t(row.dimension)}</span>
              <p className="text-[14.5px] leading-[1.8] text-muted">
                <span className="mb-1 block font-mono text-[11px] text-muted-dim sm:hidden">{t({ zh: '和泰聯網', en: 'Hotai Motor' })}</span>
                {t(row.before)}
              </p>
              <p className="text-[14.5px] leading-[1.8] text-ink">
                <span className="mb-1 block font-mono text-[11px] text-accent sm:hidden">{t({ zh: '南一集團', en: 'Nani' })}</span>
                {t(row.after)}
              </p>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  )
}

function ProjectCard({ project }: { project: Project }) {
  const { t } = useLocale()
  const hasDetail = detailSlugs.has(project.id)
  const metrics = project.metrics.slice(0, 2)

  return (
    <article
      className={`relative flex flex-col border border-rule bg-surface p-5 sm:p-6 ${
        hasDetail ? 'transition-colors hover:border-accent-dim' : ''
      }`}
    >
      <p className="font-mono text-[11.5px] text-muted">{t(project.period)}</p>
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

function ProjectGroup({ title, note, projects }: { title: string; note?: string; projects: Project[] }) {
  return (
    <Reveal>
      <section className="mt-14">
        <h2 className="font-serif text-[22px] font-semibold text-ink sm:text-[26px]">{title}</h2>
        {note && <p className="mt-2 max-w-2xl text-[14px] leading-relaxed text-muted">{note}</p>}
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </section>
    </Reveal>
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
          <h1 className="max-w-3xl font-serif text-[28px] font-semibold leading-[1.35] text-ink text-balance sm:text-[36px] md:text-[44px]">
            {t({ zh: '以 PM 核心能力為視角，呈現專案價值與專業累積', en: 'Project value and professional growth, seen through core PM competencies' })}
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
          note={t({
            zh: '早期作品，保留幾年前的原始呈現方式，不安排重新優化，用來真實呈現兩份 PM 工作之間的能力演進。',
            en: 'Early work, kept in its original form from a few years ago and not reworked, so the growth between the two PM roles stays honest.',
          })}
          projects={hotaiProjects}
        />
      </div>
    </SiteShell>
  )
}
