import { useEffect } from 'react'
import { competencies } from '../content/competencies'
import { competencyPages, type CompetencyEntry } from '../content/competencyPages'
import { detailSlugs } from '../content/detailSlugs'
import { useLocale } from '../i18n/LocaleContext'
import { SiteShell } from '../components/layout/SiteShell'
import { Reveal } from '../components/common/Reveal'
import { PageToc } from '../components/common/PageToc'

const BASE = import.meta.env.BASE_URL

function EntryCard({ entry }: { entry: CompetencyEntry }) {
  const { t } = useLocale()
  const title = t(entry.title)
  const hasDetail = entry.projectId !== undefined && detailSlugs.has(entry.projectId)

  return (
    <article className="grid gap-4 border-t border-rule py-7 sm:grid-cols-[minmax(0,265px)_1fr] sm:gap-9">
      <h3 className="font-serif text-[18px] font-semibold leading-[1.5] text-ink sm:text-[19px]">
        {hasDetail ? (
          <a
            href={`${BASE}projects/${entry.projectId}/`}
            className="underline decoration-accent-dim/60 underline-offset-4 transition-colors hover:text-accent"
          >
            {title}
          </a>
        ) : (
          title
        )}
      </h3>
      <div>
        <ul>
          {t(entry.points).map((point) => (
            <li
              key={point}
              className="relative mb-2 pl-[18px] text-[15px] leading-[1.8] text-ink/90 before:absolute before:left-0 before:top-[0.95em] before:h-px before:w-1.5 before:bg-accent"
            >
              {point}
            </li>
          ))}
        </ul>
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <span className="mr-1 font-mono text-[11px] tracking-[0.04em] text-muted-dim">{t({ zh: '子標籤', en: 'Tags' })}</span>
          {t(entry.tags).map((tag) => (
            <span key={tag} className="rounded-full border border-accent-dim/60 px-3 py-1 text-[12.5px] leading-snug text-accent">
              {tag}
            </span>
          ))}
        </div>
      </div>
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
      href={`${BASE}#competencies`}
      className="inline-flex items-center gap-2 rounded-full border border-accent-dim/70 px-4 py-2 font-sans text-[14px] font-semibold tracking-wide text-accent transition-colors hover:bg-accent hover:text-on-accent"
    >
      <span aria-hidden="true">←</span>
      {t({ zh: '回到能力框架', en: 'Back to Competency Framework' })}
    </a>
  )

  if (!data) {
    return (
      <SiteShell>
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
    <SiteShell>
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
