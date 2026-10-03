import { useLocale } from '../../i18n/LocaleContext'
import { CONTACT_EMAIL } from '../../content/contact'

export function Footer() {
  const { strings } = useLocale()
  return (
    <footer className="border-t border-rule mt-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 pt-10 pb-24 lg:pb-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex max-w-xl flex-col gap-1.5">
          <p className="font-mono text-[11.5px] leading-relaxed text-muted-dim">
            {strings.footer.note}{' '}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-muted underline-offset-4 transition-colors hover:text-accent hover:underline"
            >
              {CONTACT_EMAIL}
            </a>
          </p>
          <p className="font-mono text-[11.5px] leading-relaxed text-muted-dim">{strings.footer.disclaimer}</p>
        </div>
        <div className="flex flex-col gap-1 sm:items-end sm:whitespace-nowrap">
          <p className="font-mono text-[11px] text-muted-dim">© {new Date().getFullYear()} Elena Zhuang ｜ 莊詒安</p>
          <p className="font-mono text-[10px] text-muted-dim/50">
            {strings.footer.lastUpdated}
            {import.meta.env.VITE_BUILD_DATE}
          </p>
        </div>
      </div>
    </footer>
  )
}
