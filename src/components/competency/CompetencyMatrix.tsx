import { competencies } from '../../content'
import { competencyPages } from '../../content/competencyPages'
import { useLocale } from '../../i18n/LocaleContext'
import { CompetencyNode } from './CompetencyNode'
import { SectionHeading } from '../common/SectionHeading'
import { Reveal } from '../common/Reveal'

const BASE = import.meta.env.BASE_URL

export function CompetencyMatrix() {
  const { t, strings } = useLocale()

  return (
    <section id="competencies" className="py-20 sm:py-28 scroll-mt-16">
      <Reveal>
        <SectionHeading eyebrow={t({ zh: '02 / 能力框架 · competency framework', en: '02 / competency framework' })} title={strings.competencyMatrix.title} subtitle={strings.competencyMatrix.subtitle} />
      </Reveal>

      <Reveal delayMs={80}>
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
          {competencies.map((c) => (
            <CompetencyNode key={c.id} competency={c} href={c.id in competencyPages ? `${BASE}competencies/${c.id}/` : undefined} />
          ))}
        </div>
      </Reveal>
    </section>
  )
}
