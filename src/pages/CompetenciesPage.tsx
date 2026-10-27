import { useLocale } from '../i18n/LocaleContext'
import { SiteShell } from '../components/layout/SiteShell'
import { Reveal } from '../components/common/Reveal'
import { CompetencyGrid } from '../components/competency/CompetencyGrid'

/** Landing page of the competency framework: the nine-cell grid. */
export function CompetenciesPage() {
  const { t, strings } = useLocale()

  return (
    <SiteShell current="competencies">
      <section className="pb-20 pt-16 sm:pb-28 sm:pt-24">
        <Reveal>
          <div className="mb-6 flex items-center gap-2 font-mono text-[14px] uppercase tracking-[0.12em] text-accent">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            {t({ zh: 'PM能力框架 · competency framework', en: 'competency framework' })}
          </div>
          <h1 className="max-w-4xl font-serif text-[28px] font-semibold leading-[1.35] text-ink sm:text-[36px] md:text-[44px]">
            {strings.competencyMatrix.title}
          </h1>
        </Reveal>

        <Reveal delayMs={80}>
          <div className="mt-10">
            <CompetencyGrid />
          </div>
        </Reveal>
      </section>
    </SiteShell>
  )
}
