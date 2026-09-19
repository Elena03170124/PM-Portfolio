import type { ReactNode } from 'react'
import { Header, type PageId } from './Header'
import { Footer } from './Footer'

export function SiteShell({ children, current }: { children: ReactNode; current?: PageId }) {
  return (
    <div id="top" className="min-h-screen">
      <Header current={current} />
      <main className="mx-auto max-w-6xl px-5 sm:px-8">{children}</main>
      <Footer />
    </div>
  )
}
