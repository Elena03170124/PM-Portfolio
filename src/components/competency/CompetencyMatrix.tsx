import { useLocale } from '../../i18n/LocaleContext'
import { CompetencyGrid } from './CompetencyGrid'
import { SectionHeading } from '../common/SectionHeading'
import { Reveal } from '../common/Reveal'

export function CompetencyMatrix() {
  const { t, strings } = useLocale()

  return (
    <section id="competencies" className="pb-20 pt-4 sm:pb-28 scroll-mt-16">
      <Reveal>
        <SectionHeading eyebrow={t({ zh: '02 / PM能力框架 · competency framework', en: '02 / competency framework' })} title={strings.competencyMatrix.title} subtitle={strings.competencyMatrix.subtitle} />
      </Reveal>

      <Reveal delayMs={80}>
        <div className="mt-10">
          <CompetencyGrid />
        </div>
      </Reveal>
    </section>
  )
}
