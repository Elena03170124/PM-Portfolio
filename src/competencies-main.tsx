import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/globals.css'
import { CompetenciesPage } from './pages/CompetenciesPage'
import { LocaleProvider } from './i18n/LocaleContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LocaleProvider>
      <CompetenciesPage />
    </LocaleProvider>
  </StrictMode>,
)
