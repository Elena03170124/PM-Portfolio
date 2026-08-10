import { useLocale } from '../../i18n/LocaleContext'

export function LanguageToggle() {
  const { locale, toggleLocale, strings } = useLocale()
  return (
    <button
      onClick={toggleLocale}
      aria-label={strings.languageToggle.srAnnounce}
      className="font-mono text-[12px] tracking-wide px-3 py-1.5 rounded-full border border-rule text-muted hover:border-accent hover:text-accent transition-colors"
    >
      {locale === 'zh' ? 'EN' : '中'}
    </button>
  )
}
