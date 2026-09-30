import { competencies } from '../../content'
import { useLocale } from '../../i18n/LocaleContext'
import { CompetencyNode } from './CompetencyNode'
import { SectionHeading } from '../common/SectionHeading'
import { Reveal } from '../common/Reveal'

export function CompetencyMatrix() {
  const { strings } = useLocale()

  return (
    <section id="competencies" className="py-20 sm:py-28 scroll-mt-16">
      <Reveal>
        <SectionHeading eyebrow="02 / capability map" title={strings.competencyMatrix.title} subtitle={strings.competencyMatrix.subtitle} />
      </Reveal>

      <Reveal delayMs={80}>
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
          {competencies.map((c) => (
            <CompetencyNode key={c.id} competency={c} />
          ))}
        </div>
      </Reveal>
    </section>
  )
}
