import { useEffect, useRef, useState } from 'react'
import { CONTACT_EMAIL } from '../../content/contact'
import { useLocale } from '../../i18n/LocaleContext'

async function copyText(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch {
    // Older browsers, or a page without clipboard permission.
    const box = document.createElement('textarea')
    box.value = text
    box.style.position = 'fixed'
    box.style.opacity = '0'
    document.body.appendChild(box)
    box.select()
    let ok = false
    try {
      ok = document.execCommand('copy')
    } catch {
      ok = false
    }
    box.remove()
    return ok
  }
}

/** Copies the contact email instead of opening a mail app, which does nothing on
 *  devices without a default mail client. */
export function ContactButton() {
  const { strings } = useLocale()
  const [copied, setCopied] = useState(false)
  const timer = useRef<number | undefined>(undefined)

  useEffect(() => () => window.clearTimeout(timer.current), [])

  const onClick = async () => {
    const ok = await copyText(CONTACT_EMAIL)
    if (!ok) {
      window.location.href = `mailto:${CONTACT_EMAIL}`
      return
    }
    setCopied(true)
    window.clearTimeout(timer.current)
    timer.current = window.setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      type="button"
      onClick={onClick}
      title={CONTACT_EMAIL}
      className="min-w-[6.25rem] rounded-full border border-accent/40 px-3.5 py-1.5 text-center font-sans text-[12.5px] tracking-wide text-accent transition-colors hover:bg-accent hover:text-on-accent"
    >
      <span aria-live="polite">{copied ? strings.contact.copied : strings.contact.cta}</span>
    </button>
  )
}
