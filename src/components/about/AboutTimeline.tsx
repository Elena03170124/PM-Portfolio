import { aboutChapters } from '../../content'
import type { AboutChapter, AboutCta, AboutPara } from '../../content/types'
import { useLocale } from '../../i18n/LocaleContext'
import { Reveal } from '../common/Reveal'

const BASE = import.meta.env.BASE_URL

/** Site-relative paths — "#projects" (a home-page anchor) or "projects/" (another
 *  page) — get the deploy base prefixed. An absolute URL is left alone. */
const resolveHref = (href: string) => (/^https?:\/\//.test(href) ? href : `${BASE}${href.replace(/^\//, '')}`)

/** Keep a short quoted phrase (「…」 or “…”) on one line so a title never breaks
 *  inside it. Long quotes are left alone: no-wrap would overflow a phone screen. */
function keepQuotesTogether(text: string) {
  return text.split(/(「[^」]*」|“[^”]*”)/).map((part, i) =>
    i % 2 === 1 && part.length <= 16 ? (
      <span key={i} className="whitespace-nowrap">
        {part}
      </span>
    ) : (
      part
    ),
  )
}

/** Titles may carry a "|" as the only allowed wrap point: each side becomes an
 *  atomic inline block, so on a narrow screen the line breaks there and nowhere else. */
function renderTitle(text: string) {
  if (!text.includes('|')) return keepQuotesTogether(text)
  return text.split('|').map((part, i) => (
    <span key={i} className="inline-block">
      {part}
    </span>
  ))
}

function Cta({ cta }: { cta: AboutCta }) {
  const { t } = useLocale()
  const label = t(cta.label)
  const isButton = cta.kind === 'button'

  const base = isButton
    ? 'inline-block font-mono text-[13px] font-semibold px-5 py-2.5 rounded-md bg-accent text-on-accent'
    : 'inline-block font-mono text-[13px] text-accent underline underline-offset-4'

  if (!cta.href) {
    // Destination not decided yet: keep the layout, but make it inert.
    return (
      <span aria-disabled="true" className={`${base} opacity-50 cursor-not-allowed ${isButton ? '' : 'no-underline'}`}>
        {label}
        {isButton ? '' : ' →'}
      </span>
    )
  }

  return (
    <a href={resolveHref(cta.href)} className={`${base} transition-opacity hover:opacity-90`}>
      {label}
      {isButton ? '' : ' →'}
    </a>
  )
}

function Para({ para }: { para: AboutPara }) {
  const { t } = useLocale()
  return (
    <p className={`mb-3 text-[15.5px] leading-[1.8] ${para.emphasis ? 'font-semibold text-ink' : 'text-ink/90'}`}>
      {t(para)}
    </p>
  )
}

function TimelineItem({ chapter }: { chapter: AboutChapter }) {
  const { t } = useLocale()

  return (
    <li className="group">
      <Reveal className="grid grid-cols-[22px_1fr] sm:grid-cols-[152px_28px_1fr]">
        {/* When: years + stage name. Left column on desktop, above the title on mobile. */}
        <div className="col-start-2 row-start-1 pt-1 pb-2 sm:col-start-1 sm:pb-0 sm:text-right">
          <span className="block font-mono text-[12.5px] text-muted font-mono-num">{t(chapter.years)}</span>
          <span className="mt-1 block font-serif text-[17px] font-semibold leading-[1.35] text-accent sm:text-[18px]">
            {t(chapter.tag)}
          </span>
        </div>

        {/* Line + node. The last node is filled and the line stops there. */}
        <div
          aria-hidden="true"
          className="relative col-start-1 row-span-2 row-start-1 ml-[6px] border-l border-rule sm:col-start-2 sm:row-span-1 sm:ml-[13px] group-last:border-transparent before:absolute before:-left-[6px] before:top-[10px] before:size-[11px] before:rounded-full before:border-2 before:border-accent before:bg-paper group-last:before:bg-accent"
        />

        <div className="col-start-2 row-start-2 max-w-[620px] pb-12 sm:col-start-3 sm:row-start-1 sm:pl-4">
          <h3 className="mb-3.5 font-serif text-[20px] sm:text-[22px] font-semibold leading-[1.45] text-ink text-balance">
            {renderTitle(t(chapter.title))}
          </h3>

          {chapter.paras.map((p, i) => (
            <Para key={i} para={p} />
          ))}

          {chapter.bullets && (
            <ul className="mb-3 mt-1">
              {chapter.bullets.map((b, i) => (
                <li
                  key={i}
                  className="relative mb-1.5 pl-[18px] text-[15px] leading-[1.8] text-ink/90 before:absolute before:left-0 before:top-[0.95em] before:h-px before:w-1.5 before:bg-accent"
                >
                  <span className="font-semibold">{t(b.lead)}</span>
                  {t(b.text)}
                </li>
              ))}
            </ul>
          )}

          {chapter.closing?.map((p, i) => (
            <Para key={i} para={p} />
          ))}

          {chapter.cta && (
            <div className="mt-2">
              <Cta cta={chapter.cta} />
            </div>
          )}
        </div>
      </Reveal>
    </li>
  )
}

export function AboutTimeline() {
  return (
    <ol className="max-w-[820px]">
      {aboutChapters.map((c) => (
        <TimelineItem key={c.id} chapter={c} />
      ))}
    </ol>
  )
}
