import { useLocale } from '../../i18n/LocaleContext'

export function Footer() {
  const { strings } = useLocale()
  return (
    <footer className="border-t border-rule mt-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <p className="font-mono text-[11.5px] text-muted-dim max-w-xl leading-relaxed">{strings.footer.note}</p>
        <p className="font-mono text-[11px] text-muted-dim">© {new Date().getFullYear()} Elena Zhuang ｜ 莊詒安</p>
      </div>
    </footer>
  )
}
