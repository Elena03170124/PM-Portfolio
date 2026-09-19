import { useEffect, useState } from 'react'
import { SiteShell } from './components/layout/SiteShell'
import { Hero } from './components/hero/Hero'
import { CompetencyMatrix } from './components/competency/CompetencyMatrix'
import { ProjectTimeline } from './components/projects/ProjectTimeline'
import { AboutContact } from './components/about/AboutContact'
import type { CompetencyId } from './content/types'

function App() {
  // Single source of truth for the competency <-> project filter, shared
  // between CompetencyMatrix (sets it) and ProjectTimeline (reads it).
  const [activeCompetencyId, setActiveCompetencyId] = useState<CompetencyId | null>(null)

  // Arriving from another page via "/#projects": the sections are rendered by
  // React after load, so the browser's own anchor scroll finds nothing. Do it here.
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1))
    if (id) document.getElementById(id)?.scrollIntoView()
  }, [])

  return (
    <SiteShell>
      <Hero />
      <CompetencyMatrix activeId={activeCompetencyId} onSelect={setActiveCompetencyId} />
      <ProjectTimeline activeCompetencyId={activeCompetencyId} />
      <AboutContact />
    </SiteShell>
  )
}

export default App
