import { useEffect, type ReactNode } from 'react'
import { competencies } from '../content/competencies'
import { competencyPages, type CompetencyEntry } from '../content/competencyPages'
import { detailSlugs } from '../content/detailSlugs'
import { useLocale } from '../i18n/LocaleContext'
import { SiteShell } from '../components/layout/SiteShell'
import { Reveal } from '../components/common/Reveal'
import { PageToc } from '../components/common/PageToc'

const BASE = import.meta.env.BASE_URL

function TagPill({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block rounded-full border border-accent-dim/50 px-2.5 py-0.5 font-sans text-[12.5px] font-medium leading-snug text-accent">
      {children}
    </span>
  )
}

function PointList({ points }: { points: string[] }) {
  return (
    <ul className="mt-2">
      {points.map((point) => (
        <li
          key={point}
          className="relative mb-1.5 pl-[18px] text-[15.5px] leading-[1.75] text-ink/90 before:absolute before:left-0 before:top-[0.95em] before:h-px before:w-1.5 before:bg-accent"
        >
          {point}
        </li>
      ))}
    </ul>
  )
}

function EntryCard({ entry }: { entry: CompetencyEntry }) {
  const { t, locale } = useLocale()
  const title = t(entry.title)
  const hasDetail = entry.projectId !== undefined && detailSlugs.has(entry.projectId)

  return (
    <article className="grid gap-4 border-t border-rule py-4 sm:grid-cols-[minmax(0,265px)_1fr] sm:gap-9">
      <div>
        <h3 className="font-serif text-[16.5px] font-semibold leading-[1.5] text-ink sm:text-[17px]">
          {hasDetail ? (
            <a href={`${BASE}projects/${entry.projectId}/`} className="transition-colors hover:text-accent">
              {title}
            </a>
          ) : (
            title
          )}
        </h3>
        {hasDetail && (
          <a
            href={`${BASE}projects/${entry.projectId}/`}
            className="mt-1.5 inline-block font-mono text-[12.5px] text-accent underline-offset-4 hover:underline"
          >
            {t({ zh: '查看完整專案經驗 →', en: 'See the full project experience →' })}
          </a>
        )}
      </div>
      {entry.sections.every((s) => s.points[locale].length === 1) ? (
        // One sentence per tag: gather the tags up top, then list the sentences.
        <div>
          <div className="flex flex-wrap gap-1.5">
            {entry.sections.map((section) => (
              <TagPill key={section.heading.zh}>{t(section.heading)}</TagPill>
            ))}
          </div>
          <PointList points={entry.sections.flatMap((section) => t(section.points))} />
        </div>
      ) : (
        <div className="space-y-4">
          {entry.sections.map((section) => (
            <div key={section.heading.zh}>
              <TagPill>{t(section.heading)}</TagPill>
              <PointList points={t(section.points)} />
            </div>
          ))}
        </div>
      )}
    </article>
  )
}

export function CompetencyPage({ slug }: { slug: string }) {
  const { t } = useLocale()
  const data = competencyPages[slug]
  const competency = competencies.find((c) => c.id === slug)

  useEffect(() => {
    if (competency) document.title = `${t(competency.name)} · Elena Zhuang ｜ 莊詒安`
  }, [competency, t])

  const back = (
    <a
      href={`${BASE}competencies/`}
      className="inline-flex items-center gap-2 rounded-full border border-accent-dim/70 px-4 py-2 font-sans text-[14px] font-semibold tracking-wide text-accent transition-colors hover:bg-accent hover:text-on-accent"
    >
      <span aria-hidden="true">←</span>
      {t({ zh: '回到PM能力框架', en: 'Back to PM Competency Framework' })}
    </a>
  )

  if (!data) {
    return (
      <SiteShell current="competencies">
        <div className="py-24">
          {back}
          <p className="mt-6 text-[16px] text-muted">{t({ zh: '找不到這個頁面。', en: "Couldn't find this page." })}</p>
        </div>
      </SiteShell>
    )
  }

  // A block with nothing in it is simply left out.
  const blocks = [
    { id: 'work', title: t({ zh: '職場實戰', en: 'On the job' }), entries: data.work },
    { id: 'self', title: t({ zh: '自我精進', en: 'Self-driven growth' }), entries: data.selfStudy },
  ].filter((b) => b.entries.length > 0)

  const content = (
    <div className="min-w-0 max-w-4xl space-y-14">
      {blocks.map((block) => (
        <Reveal key={block.id}>
          <section id={block.id} className="scroll-mt-24">
            <h2 className="mb-5 font-serif text-[22px] font-semibold leading-snug text-ink sm:text-[26px]">{block.title}</h2>
            <div>
              {block.entries.map((entry) => (
                <EntryCard key={entry.title.zh} entry={entry} />
              ))}
            </div>
          </section>
        </Reveal>
      ))}
    </div>
  )

  return (
    <SiteShell current="competencies">
      <article className="pb-16 pt-10 sm:pt-14">
        {back}

        <header className="mt-8 max-w-4xl">
          <div className="mb-4 flex items-center gap-2 font-mono text-[14px] uppercase tracking-[0.12em] text-accent">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            <span>{t({ zh: '能力框架', en: 'competency framework' })}</span>
            <span aria-hidden="true">·</span>
            <span className="font-sans">{t(data.label)}</span>
          </div>
          <h1 className="font-serif text-[26px] font-semibold leading-[1.35] text-ink text-balance sm:text-[36px]">{t(data.heading)}</h1>
        </header>

        <div className="mt-12">
          {blocks.length > 1 ? (
            <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_190px] lg:gap-12">
              {content}
              <PageToc items={blocks.map((b) => ({ id: b.id, label: b.title }))} />
            </div>
          ) : (
            content
          )}
        </div>

        <div className="mt-16 border-t border-rule pt-8">{back}</div>
      </article>
    </SiteShell>
  )
}
