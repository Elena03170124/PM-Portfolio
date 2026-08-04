import { useState } from 'react'
import { SiteShell } from './components/layout/SiteShell'
import { Hero } from './components/hero/Hero'
import { CompetencyMatrix } from './components/competency/CompetencyMatrix'
import { ProjectTimeline } from './components/projects/ProjectTimeline'
import { GrowthNarrative } from './components/growth/GrowthNarrative'
import { FuturePillars } from './components/future/FuturePillars'
import { AboutContact } from './components/about/AboutContact'
import type { CompetencyId } from './content/types'

function App() {
  // Single source of truth for the competency <-> project filter, shared
  // between CompetencyMatrix (sets it) and ProjectTimeline (reads it).
  const [activeCompetencyId, setActiveCompetencyId] = useState<CompetencyId | null>(null)

  return (
    <SiteShell>
      <Hero />
      <CompetencyMatrix activeId={activeCompetencyId} onSelect={setActiveCompetencyId} />
      <ProjectTimeline activeCompetencyId={activeCompetencyId} />
      <GrowthNarrative />
      <FuturePillars />
      <AboutContact />
    </SiteShell>
  )
}

export default App
