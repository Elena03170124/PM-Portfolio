import { useEffect, type ReactNode } from 'react'
import { hotaiProjects, southoneProjects } from '../content'
import { detailSlugs } from '../content/detailSlugs'
import type { Project } from '../content/types'
import { useLocale } from '../i18n/LocaleContext'
import { SiteShell } from '../components/layout/SiteShell'
import { Reveal } from '../components/common/Reveal'
import { PageToc } from '../components/common/PageToc'

const BASE = import.meta.env.BASE_URL

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
      {(project.period || archival) && (
        <div className={`flex items-center gap-3 ${project.period ? 'justify-between' : 'justify-end'}`}>
          {project.period && <p className="font-mono text-[11.5px] text-muted">{t(project.period)}</p>}
          {archival && (
            <span className="rounded-full border border-rule px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.06em] text-muted-dim">
              {t({ zh: '原始樣貌', en: 'Unedited' })}
            </span>
          )}
        </div>
      )}
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
  id,
  title,
  note,
  projects,
  archival,
}: {
  id?: string
  title: string
  note?: ReactNode
  projects: Project[]
  archival?: boolean
}) {
  return (
    <Reveal>
      <section id={id} className="mt-14 scroll-mt-24">
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

  // Arriving via "projects/#nani" (e.g. from the homepage teaser): the sections
  // are rendered by React after load, so the browser's own anchor scroll finds
  // nothing yet. Do it here once mounted — same fix as App.tsx's "#projects".
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1))
    if (id) document.getElementById(id)?.scrollIntoView()
  }, [])

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

      <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_190px] lg:gap-12">
        <div className="min-w-0">
          <ProjectGroup
            id="nani"
            title={t({ zh: '南一集團・跨系統平台整合串接', en: 'Nani · cross-system platform integration' })}
            projects={southoneProjects}
          />
          <div className="pb-12 sm:pb-20">
            <ProjectGroup
              id="hotai"
              title={t({ zh: '和泰聯網・初級 PM 能力養成', en: 'Hotai Motor · early-career PM work' })}
              note={<ArchivalNote />}
              archival
              projects={hotaiProjects}
            />
          </div>
        </div>
        <PageToc
          items={[
            { id: 'nani', label: t({ zh: '南一集團', en: 'Nani' }) },
            { id: 'hotai', label: t({ zh: '和泰聯網', en: 'Hotai' }) },
          ]}
        />
      </div>
    </SiteShell>
  )
}
