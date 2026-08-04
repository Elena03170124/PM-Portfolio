import { createContext, useContext, useMemo, useState, type ReactNode } from 'react'
import zh from './strings.zh'
import en from './strings.en'
import type { AppStrings } from './types'
import type { Bilingual } from '../content/types'

export type Locale = 'zh' | 'en'

const dictionaries: Record<Locale, AppStrings> = { zh, en }

interface LocaleContextValue {
  locale: Locale
  setLocale: (locale: Locale) => void
  toggleLocale: () => void
  strings: AppStrings
  /** Resolve a Bilingual<T> field for the current locale, falling back to
   *  zh when the English translation is missing or empty. */
  t: <T = string>(field: Bilingual<T>) => T
}

const LocaleContext = createContext<LocaleContextValue | null>(null)

const STORAGE_KEY = 'portfolio-locale'

function readInitialLocale(): Locale {
  if (typeof window === 'undefined') return 'zh'
  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (stored === 'zh' || stored === 'en') return stored
  return 'zh'
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(readInitialLocale)

  const setLocale = (next: Locale) => {
    setLocaleState(next)
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, next)
    }
    if (typeof document !== 'undefined') {
      document.documentElement.lang = next === 'zh' ? 'zh-Hant' : 'en'
    }
  }

  const value = useMemo<LocaleContextValue>(
    () => ({
      locale,
      setLocale,
      toggleLocale: () => setLocale(locale === 'zh' ? 'en' : 'zh'),
      strings: dictionaries[locale],
      t: (field) => {
        const v = field[locale]
        if (typeof v === 'string' && v.trim() === '' && locale === 'en') {
          return field.zh
        }
        return v
      },
    }),
    [locale],
  )

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}

export function useLocale(): LocaleContextValue {
  const ctx = useContext(LocaleContext)
  if (!ctx) throw new Error('useLocale must be used within a LocaleProvider')
  return ctx
}
