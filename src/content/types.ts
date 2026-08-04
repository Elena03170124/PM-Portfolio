/** A field carried in both languages. English is authoritative once filled in;
 *  until then `en` should still hold a real (if provisional) translation —
 *  the UI does not special-case empty strings. */
export interface Bilingual<T = string> {
  zh: T
  en: T
}

/** The nine competency categories from Cassandra's own PM competency
 *  framework (①–⑨). Ids are stable keys used to cross-link competencies
 *  and projects — do not rename without updating both content files. */
export type CompetencyId =
  | 'product-strategy'
  | 'requirements'
  | 'ux'
  | 'tech'
  | 'risk'
  | 'project-mgmt'
  | 'stakeholder'
  | 'data'
  | 'ai'

export interface Competency {
  id: CompetencyId
  /** Display order, matches her own ①–⑨ numbering. */
  index: number
  name: Bilingual
  /** 觀點定義 — her definition of what this competency means. */
  definition: Bilingual
  /** 解題錦囊 — her own problem-solving formula for this category. */
  playbook: Bilingual
}

export interface Metric {
  value: Bilingual
  label: Bilingual
}

export type Company = 'southone' | 'hotai'

export interface StarNarrative {
  situation: Bilingual
  task: Bilingual
  action: Bilingual
  result: Bilingual
  reflection: Bilingual
}

export interface Project {
  id: string
  company: Company
  companyLabel: Bilingual
  /** Display string, e.g. "2025.09 – 2025.11" */
  period: Bilingual
  title: Bilingual
  /** One-line summary shown on the collapsed card. */
  summary: Bilingual
  star: StarNarrative
  metrics: Metric[]
  competencyIds: CompetencyId[]
  /** 專案亮點 — short highlight tags. */
  highlights: Bilingual[]
  /** True for the confidential 和泰聯網 items: summary + tags only, no
   *  full STAR narrative and no embedded screenshots. */
  summaryOnly: boolean
  /** Optional standout line, used for pull-quotes in the UI. */
  quote?: Bilingual
}

export interface FuturePillar {
  id: string
  index: number
  name: Bilingual
  description: Bilingual
}

export interface HeroQuote {
  id: string
  text: Bilingual
}
