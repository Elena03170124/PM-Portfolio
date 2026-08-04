import type { ReactNode } from 'react'

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
}: {
  eyebrow?: string
  title: ReactNode
  subtitle?: ReactNode
  align?: 'left' | 'center'
}) {
  return (
    <div className={align === 'center' ? 'text-center mx-auto max-w-2xl' : 'max-w-2xl'}>
      {eyebrow && (
        <div
          className={`font-mono text-[11px] tracking-[0.14em] uppercase text-teal mb-3 flex items-center gap-2 ${
            align === 'center' ? 'justify-center' : 'justify-start'
          }`}
        >
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-teal" aria-hidden="true" />
          {eyebrow}
        </div>
      )}
      <h2 className="font-serif text-[28px] sm:text-[34px] font-semibold leading-[1.3] text-balance text-fg">
        {title}
      </h2>
      {subtitle && <p className="mt-3 text-[15px] leading-relaxed text-muted">{subtitle}</p>}
    </div>
  )
}
