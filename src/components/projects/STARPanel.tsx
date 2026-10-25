import { useLocale } from '../../i18n/LocaleContext'
import type { StarNarrative, StarText } from '../../content/types'

function StarRow({ label, text }: { label: string; text: StarText }) {
  return (
    <div className="grid sm:grid-cols-[88px_1fr] gap-2 sm:gap-5 py-4 border-b border-rule last:border-b-0">
      <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-accent pt-0.5">{label}</div>
      {Array.isArray(text) ? (
        <ul className="space-y-1.5">
          {text.map((item, i) => (
            <li
              key={i}
              className="relative pl-[18px] text-[13.5px] leading-relaxed text-ink/85 before:absolute before:left-0 before:top-[0.85em] before:h-px before:w-1.5 before:bg-accent"
            >
              {item}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-[13.5px] leading-relaxed text-ink/85 whitespace-pre-line">{text}</p>
      )}
    </div>
  )
}

/** Expand/collapse via a CSS grid-rows transition (0fr -> 1fr) so we don't
 *  need JS height measurement or a library. `open` toggles the row size;
 *  the inner div's overflow-hidden clips content while collapsed. */
export function STARPanel({ star, open }: { star: StarNarrative; open: boolean }) {
  const { t, strings } = useLocale()

  return (
    <div
      className="grid transition-[grid-template-rows] duration-500 ease-in-out"
      style={{ gridTemplateRows: open ? '1fr' : '0fr' }}
    >
      <div className="overflow-hidden">
        <div className="pt-2 pb-1 border-t border-rule mt-4">
          <StarRow label={strings.projects.situation} text={t(star.situation)} />
          <StarRow label={strings.projects.task} text={t(star.task)} />
          <StarRow label={strings.projects.action} text={t(star.action)} />
          <StarRow label={strings.projects.result} text={t(star.result)} />
          <StarRow label={strings.projects.reflection} text={t(star.reflection)} />
        </div>
      </div>
    </div>
  )
}
