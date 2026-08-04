import { competencies } from './competencies'
import { southoneProjects } from './projects.southone'
import { hotaiProjects } from './projects.hotai'
import { futurePillars } from './futurePillars'
import { heroQuotes, positioningStatement, selfDescription } from './heroQuotes'
import type { Competency, CompetencyId, Project } from './types'

export * from './types'
export { competencies, southoneProjects, hotaiProjects, futurePillars, heroQuotes, positioningStatement, selfDescription }

/** All projects, chronological (南一集團 first since it's the current,
 *  deeper body of work; 和泰聯網 appended as the earlier chapter). Consumers
 *  that want a strict timeline should sort by `period` themselves — this
 *  order is the "which era" grouping used by the growth narrative. */
export const allProjects: Project[] = [...southoneProjects, ...hotaiProjects]

const competencyById = new Map<CompetencyId, Competency>(competencies.map((c) => [c.id, c]))

export function getCompetency(id: CompetencyId): Competency | undefined {
  return competencyById.get(id)
}

/** Derived, not hand-maintained: which projects applied a given competency.
 *  Single source of truth stays on `Project.competencyIds`. */
export function getProjectsForCompetency(id: CompetencyId): Project[] {
  return allProjects.filter((p) => p.competencyIds.includes(id))
}

/** Count of projects per competency — used to size/weight the matrix and to
 *  render an honest empty state (e.g. AI adoption has no shipped project
 *  yet — it's a current self-study direction, not a gap to hide). */
export function getCompetencyProjectCount(id: CompetencyId): number {
  return getProjectsForCompetency(id).length
}
