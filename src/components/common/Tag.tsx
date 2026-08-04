import type { ReactNode } from 'react'

export function Tag({
  children,
  active = false,
  onClick,
  size = 'sm',
}: {
  children: ReactNode
  active?: boolean
  onClick?: () => void
  size?: 'sm' | 'md'
}) {
  const base =
    size === 'sm'
      ? 'text-[11px] px-2 py-0.5'
      : 'text-[12.5px] px-3 py-1'

  const className = `font-mono rounded-full border transition-colors ${base} ${
    active ? 'bg-teal/15 border-teal text-teal' : 'bg-surface border-rule text-muted'
  } ${onClick ? 'cursor-pointer hover:border-teal hover:text-teal' : ''}`

  if (onClick) {
    return (
      <button onClick={onClick} className={className}>
        {children}
      </button>
    )
  }

  return <span className={className}>{children}</span>
}
