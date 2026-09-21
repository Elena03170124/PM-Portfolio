import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/globals.css'
import { ProjectsPage } from './pages/ProjectsPage'
import { LocaleProvider } from './i18n/LocaleContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LocaleProvider>
      <ProjectsPage />
    </LocaleProvider>
  </StrictMode>,
)
