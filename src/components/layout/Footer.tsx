import { useLocale } from '../../i18n/LocaleContext'
import { CONTACT_EMAIL } from '../../content/contact'

export function Footer() {
  const { strings } = useLocale()
  return (
    <footer className="border-t border-rule mt-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex max-w-xl flex-col gap-2">
          <p className="font-mono text-[11.5px] leading-relaxed text-muted-dim">{strings.footer.note}</p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="w-fit font-mono text-[12.5px] text-muted underline-offset-4 transition-colors hover:text-accent hover:underline"
          >
            {CONTACT_EMAIL}
          </a>
        </div>
        <p className="font-mono text-[11px] text-muted-dim">© {new Date().getFullYear()} Elena Zhuang ｜ 莊詒安</p>
      </div>
    </footer>
  )
}
