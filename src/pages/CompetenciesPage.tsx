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
          <p className="mt-5 max-w-3xl whitespace-pre-line text-[15.5px] leading-[1.85] text-muted sm:text-[16.5px]">
            {t({
              zh: '根據個人研究後認定的PM應具備能力，整理出共9大項目。\n每項目會收錄對應工作專案經驗，或是透過選課、社團、線上課程自學、考取證照、進修實作，這些個人主動精進、累積能力的成果。',
              en: 'Nine competencies a PM should have, based on my own research.\nEach one gathers the related work-project experience, or what I built through self-driven growth: courses, clubs, online self-study, certifications and hands-on practice.',
            })}
          </p>
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
