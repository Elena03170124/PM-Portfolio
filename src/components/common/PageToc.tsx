import { useEffect, useState } from 'react'
import { useLocale } from '../../i18n/LocaleContext'

export interface TocItem {
  id: string
  num?: string
  label: string
}

/** Sticky in-page table of contents; highlights whichever section is currently
 *  on screen. Same pattern as the one on project detail pages. */
export function PageToc({ items }: { items: TocItem[] }) {
  const { t } = useLocale()
  const [activeId, setActiveId] = useState('')
  const idsKey = items.map((i) => i.id).join(',')

  useEffect(() => {
    const targets = idsKey
      .split(',')
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el)
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible[0]) setActiveId(visible[0].target.id)
      },
      { rootMargin: '-96px 0px -60% 0px' },
    )
    targets.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [idsKey])

  return (
    <aside className="hidden lg:block">
      <nav aria-label="目錄" className="sticky top-24 border-l border-rule pl-4">
        <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.1em] text-muted-dim">{t({ zh: '目錄', en: 'Contents' })}</p>
        <ul className="space-y-2.5">
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`block text-[13px] leading-snug transition-colors hover:text-accent ${
                  activeId === item.id ? 'text-accent' : 'text-muted'
                }`}
              >
                {item.num && <span className="mr-1.5 font-mono text-[11px]">{item.num}</span>}
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}
