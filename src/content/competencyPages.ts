import type { Bilingual } from './types'

/** One titled group inside an entry: a short descriptive heading, then the
 *  bullets that back it up. */
export interface CompetencySection {
  heading: Bilingual
  points: Bilingual<string[]>
}

/** One piece of evidence on a competency page: what I did on a project (or in
 *  self-study) that answers the competency, grouped under small headings. */
export interface CompetencyEntry {
  title: Bilingual
  /** When set and the project has a full write-up, the title links to it. */
  projectId?: string
  sections: CompetencySection[]
}

export interface CompetencyPageData {
  /** Short label shown above the heading, e.g. "第①類". */
  label: Bilingual
  heading: Bilingual
  /** 職場實戰 — a block with no entries is not rendered at all. */
  work: CompetencyEntry[]
  /** 自我精進 — a block with no entries is not rendered at all. */
  selfStudy: CompetencyEntry[]
}

/** Keyed by the same slug as the page folder (competencies/<slug>/). */
export const competencyPages: Record<string, CompetencyPageData> = {
  'product-strategy': {
    label: { zh: '第①類', en: 'Category 1' },
    heading: {
      zh: '產品設計 / 商業策略 / Trade-off / RoadMap / MVP',
      en: 'Product design / Business strategy / Trade-off / Roadmap / MVP',
    },
    work: [
      {
        title: { zh: '補教 × 家教雙系統合併', en: 'Tutoring × Home-Tutoring System Merge' },
        projectId: 'dual-system-merge',
        sections: [
          {
            heading: { zh: 'MVP', en: 'MVP' },
            points: {
              zh: ['優先以直接影響公司營收的「使用者端功能轉移」作為大型系統合併的第一階段MVP。'],
              en: ['Made the user-side migration — the part that directly drives company revenue — the phase-one MVP of a large system merge.'],
            },
          },
        ],
      },
      {
        title: { zh: '教育部雲端資料介接', en: 'National EduCloud Data Integration' },
        projectId: 'edu-cloud-integration',
        sections: [
          {
            heading: { zh: '商業策略', en: 'Business strategy' },
            points: {
              zh: ['推動「UA分流」折衷方案落地，達成時限內獲准取得教育部資料介接資格的目標。'],
              en: ['Landed the "UA routing" compromise, winning approval for the ministry data integration within the deadline.'],
            },
          },
          {
            heading: { zh: 'Trade-off', en: 'Trade-off' },
            points: {
              zh: ['兼顧既有服務穩定性維護，且避免6~8個月重構成本。'],
              en: ['Kept existing services stable while avoiding a 6–8 month rebuild.'],
            },
          },
        ],
      },
      {
        title: { zh: '會員身份驗證模式統一化', en: 'Unified Identity & SSO Across the Platform' },
        projectId: 'member-auth-unification',
        sections: [
          {
            heading: { zh: '產品設計｜系統流程規劃', en: 'Product design | System flow planning' },
            points: {
              zh: ['令不同開發時空背景的教用服務，改以同一套OIDC驗證邏輯識別登入者身份。'],
              en: ['Moved teaching services built at different times and in different contexts onto one OIDC verification logic for identifying users.'],
            },
          },
          {
            heading: { zh: '商業策略', en: 'Business strategy' },
            points: {
              zh: ['未來新服務導入時可沿用同一機制，降低跨系統串接的資料差異比對成本。'],
              en: ['New services can reuse the same mechanism later, cutting the cost of reconciling data differences across systems.'],
            },
          },
        ],
      },
      {
        title: { zh: '學生請假流程與補課機制重構', en: 'Student Leave Flow & Make-up Class Rebuild' },
        projectId: 'leave-flow-rebuild',
        sections: [
          {
            heading: { zh: '產品設計｜系統流程重構', en: 'Product design | System flow rebuild' },
            points: {
              zh: ['比照Uber派單機制，將補課需求派發給有空檔時段的老師搶課，提高師資利用率。'],
              en: ['Modeled on Uber-style dispatch: make-up class requests go out to teachers with open slots to claim, raising teacher utilization.'],
            },
          },
          {
            heading: { zh: '商業策略', en: 'Business strategy' },
            points: {
              zh: ['透過系統自動媒合機制，大幅降低內勤以人工方式在家長、教師端來回協調補課資訊的時間成本。'],
              en: ['An automatic matching mechanism sharply cuts the time ops staff spent coordinating make-up details back and forth between parents and teachers.'],
            },
          },
        ],
      },
    ],
    selfStudy: [],
  },
}
