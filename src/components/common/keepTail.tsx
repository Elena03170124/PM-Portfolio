import type { ReactNode } from 'react'

/** Keeps the last few characters of a line of text together, so a wrapped
 *  paragraph never ends on a lone character or a lone full stop.
 *  Backs up `text-wrap: pretty`, which not every browser applies. */
export function keepTail(text: string, tail = 4): ReactNode {
  if (text.length <= tail * 2) return text
  return (
    <>
      {text.slice(0, -tail)}
      <span className="whitespace-nowrap">{text.slice(-tail)}</span>
    </>
  )
}
