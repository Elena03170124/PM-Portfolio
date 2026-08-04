/** Shape shared by strings.zh.ts and strings.en.ts. Kept as an explicit
 *  interface (rather than inferring from `typeof zh`) so both locale
 *  dictionaries type-check against the same shape instead of each other's
 *  narrower string-literal types. */
export interface AppStrings {
  nav: {
    competencies: string
    projects: string
    growth: string
    future: string
    about: string
  }
  languageToggle: {
    label: string
    srAnnounce: string
  }
  hero: {
    eyebrow: string
    ctaProjects: string
    ctaContact: string
  }
  competencyMatrix: {
    title: string
    subtitle: string
    resetFilter: string
    emptyState: string
    projectCount: (n: number) => string
  }
  projects: {
    title: string
    subtitle: string
    southoneLabel: string
    hotaiLabel: string
    expand: string
    collapse: string
    situation: string
    task: string
    action: string
    result: string
    reflection: string
    confidentialNote: string
    filteredBy: string
  }
  growth: {
    title: string
    subtitle: string
    hotaiEra: { label: string; title: string; description: string }
    southoneEra: { label: string; title: string; description: string }
  }
  future: {
    title: string
    subtitle: string
  }
  about: {
    title: string
    positioningLabel: string
    contactCta: string
  }
  footer: {
    note: string
  }
}
