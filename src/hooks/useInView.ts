import { useEffect, useRef, useState } from 'react'

/** Scroll-reveal hook: returns a ref to attach to an element and whether it
 *  should be shown. Defaults to visible — JS only hides an element if it can
 *  positively confirm (via getBoundingClientRect at mount) that it starts
 *  outside the viewport, then un-hides it once IntersectionObserver reports
 *  it's in view. A fallback timer force-reveals regardless, so a flaky or
 *  non-firing observer (a different viewport/root setup, an odd embedding
 *  context, etc.) can never leave real content permanently invisible —
 *  worst case the fade-in just doesn't play. */
export function useInView<T extends HTMLElement>(threshold = 0.2) {
  const ref = useRef<T | null>(null)
  const [inView, setInView] = useState(true)

  useEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') return

    const rect = el.getBoundingClientRect()
    const startsVisible = rect.top < window.innerHeight && rect.bottom > 0
    if (startsVisible) {
      setInView(true)
      return
    }

    setInView(false)

    const reveal = () => setInView(true)
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          reveal()
          observer.disconnect()
        }
      },
      { threshold },
    )
    observer.observe(el)

    // Safety net: never let content stay hidden indefinitely.
    const fallback = window.setTimeout(reveal, 2000)

    return () => {
      observer.disconnect()
      window.clearTimeout(fallback)
    }
  }, [threshold])

  return { ref, inView }
}
