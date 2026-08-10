import type { ReactNode } from 'react'

export function CornerBracketCard({
  children,
  className = '',
  raised = false,
}: {
  children: ReactNode
  className?: string
  raised?: boolean
}) {
  return (
    <div
      className={`border border-rule rounded-[3px] ${
        raised ? 'bg-surface-raised' : 'bg-surface'
      } ${className}`}
    >
      {children}
    </div>
  )
}
