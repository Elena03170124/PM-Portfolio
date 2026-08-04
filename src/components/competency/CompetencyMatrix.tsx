import { competencies } from '../../content'
import { useLocale } from '../../i18n/LocaleContext'
import { CompetencyNode } from './CompetencyNode'
import { SectionHeading } from '../common/SectionHeading'
import { Reveal } from '../common/Reveal'
import type { CompetencyId } from '../../content/types'

export function CompetencyMatrix({
  activeId,
  onSelect,
}: {
  activeId: CompetencyId | null
  onSelect: (id: CompetencyId | null) => void
}) {
  const { strings } = useLocale()

  return (
    <section id="competencies" className="py-20 sm:py-28 scroll-mt-16">
      <Reveal>
        <SectionHeading eyebrow="01 / capability map" title={strings.competencyMatrix.title} subtitle={strings.competencyMatrix.subtitle} />
      </Reveal>

      <Reveal delayMs={80}>
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
          {competencies.map((c) => (
            <CompetencyNode
              key={c.id}
              competency={c}
              active={activeId === c.id}
              onClick={() => onSelect(activeId === c.id ? null : c.id)}
            />
          ))}
        </div>
      </Reveal>

      {activeId && (
        <div className="mt-6 flex items-center gap-3">
          <button
            onClick={() => onSelect(null)}
            className="font-mono text-[12px] text-teal hover:underline underline-offset-4"
          >
            {strings.competencyMatrix.resetFilter}
          </button>
        </div>
      )}
    </section>
  )
}
