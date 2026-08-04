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
      className={`corner-bracket border border-rule rounded-lg ${
        raised ? 'bg-surface-raised' : 'bg-surface'
      } ${className}`}
    >
      {children}
    </div>
  )
}
