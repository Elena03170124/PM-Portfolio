/** Shape shared by strings.zh.ts and strings.en.ts. Kept as an explicit
 *  interface (rather than inferring from `typeof zh`) so both locale
 *  dictionaries type-check against the same shape instead of each other's
 *  narrower string-literal types. */
export interface AppStrings {
  nav: {
    about: string
    projects: string
    competencies: string
  }
  languageToggle: {
    label: string
    srAnnounce: string
  }
  hero: {
    eyebrow: string
    ctaProjects: string
    ctaAbout: string
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
  contact: {
    cta: string
  }
  footer: {
    note: string
  }
}
