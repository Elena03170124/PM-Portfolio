import { useEffect, useRef, useState } from 'react'
import { useLocale } from '../../i18n/LocaleContext'

export interface TocItem {
  id: string
  num?: string
  label: string
}

function ListIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
      <circle cx="2.25" cy="4" r="0.75" fill="currentColor" stroke="none" />
      <circle cx="2.25" cy="8" r="0.75" fill="currentColor" stroke="none" />
      <circle cx="2.25" cy="12" r="0.75" fill="currentColor" stroke="none" />
      <path d="M5.5 4h8M5.5 8h8M5.5 12h8" />
    </svg>
  )
}

/** Below `lg` there's no room for a side rail, so the same items surface as a
 *  floating button that opens a small menu — same active-section highlight,
 *  closes on a tap outside/Escape/picking an item (mirrors the header's phone menu). */
function MobileToc({ items, activeId }: { items: TocItem[]; activeId: string }) {
  const { t } = useLocale()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    const onPointer = (e: PointerEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    window.addEventListener('pointerdown', onPointer)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('pointerdown', onPointer)
    }
  }, [open])

  return (
    <div ref={ref} className="fixed bottom-5 right-5 z-40 lg:hidden">
      {open && (
        <nav
          aria-label="目錄"
          className="mb-3 ml-auto w-56 max-w-[calc(100vw-2.5rem)] rounded-lg border border-rule bg-paper p-4 shadow-lg"
        >
          <p className="mb-2.5 font-mono text-[11px] uppercase tracking-[0.1em] text-muted-dim">{t({ zh: '目錄', en: 'Contents' })}</p>
          <ul className="space-y-0.5">
            {items.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className={`block rounded px-2 py-2 text-[14px] leading-snug transition-colors ${
                    activeId === item.id ? 'bg-disabled text-accent' : 'text-ink'
                  }`}
                >
                  {item.num && <span className="mr-1.5 font-mono text-[11px] text-muted-dim">{item.num}</span>}
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={t({ zh: '開啟目錄', en: 'Open contents' })}
        className="ml-auto flex h-11 w-11 items-center justify-center rounded-full border border-rule bg-paper text-ink shadow-md transition-colors hover:border-accent hover:text-accent"
      >
        <ListIcon />
      </button>
    </div>
  )
}

/** In-page table of contents; highlights whichever section is currently on
 *  screen. A sticky side rail from `lg` up, a floating button + menu below
 *  it (see MobileToc) — same items and active-section tracking either way. */
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
    <>
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
      <MobileToc items={items} activeId={activeId} />
    </>
  )
}
