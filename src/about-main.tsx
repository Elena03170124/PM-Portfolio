import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/globals.css'
import { AboutPage } from './pages/AboutPage'
import { LocaleProvider } from './i18n/LocaleContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LocaleProvider>
      <AboutPage />
    </LocaleProvider>
  </StrictMode>,
)
