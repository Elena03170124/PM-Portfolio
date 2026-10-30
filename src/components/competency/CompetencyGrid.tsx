import { competencies } from '../../content'
import { competencyPages } from '../../content/competencyPages'
import { CompetencyNode } from './CompetencyNode'

const BASE = import.meta.env.BASE_URL

/** The nine-cell grid; a cell links to its page once that page exists. */
export function CompetencyGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
      {competencies.map((c) => (
        <CompetencyNode
          key={c.id}
          competency={c}
          href={c.id in competencyPages ? `${BASE}competencies/${c.id}/` : undefined}
          updating={competencyPages[c.id]?.updating}
        />
      ))}
    </div>
  )
}
