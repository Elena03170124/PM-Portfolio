import type { ReactNode } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div id="top" className="min-h-screen">
      <Header />
      <main className="mx-auto max-w-6xl px-5 sm:px-8">{children}</main>
      <Footer />
    </div>
  )
}
