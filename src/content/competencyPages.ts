import type { Bilingual } from './types'

/** One titled group inside an entry: a short descriptive heading, then the
 *  bullets that back it up. */
export interface CompetencySection {
  heading: Bilingual
  points: Bilingual<string[]>
  /** Source material for this section, shown folded away under the bullets.
   *  `src` is relative to the site base (public/). */
  images?: { src: string; alt: Bilingual }[]
  imagesLabel?: Bilingual
}

/** One piece of evidence on a competency page: what I did on a project (or in
 *  self-study) that answers the competency, grouped under small headings. */
export interface CompetencyEntry {
  title: Bilingual
  /** Small line under the title, e.g. "2021.06". */
  period?: Bilingual
  /** One line saying what the experience built, under the title. */
  lead?: Bilingual
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
  /** Optional line under the 自我精進 heading, tying the entries together. */
  selfStudyIntro?: Bilingual
  /** Optional line after the last 自我精進 entry, e.g. "more on the way". */
  selfStudyNote?: Bilingual
  /** Marks the page as still being filled in; the grid cell says so. */
  updating?: boolean
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
            heading: { zh: 'MVP｜優先處理營收相關', en: 'MVP | Revenue first' },
            points: {
              zh: [
                '雙系統合併關係到資料欄位對齊、前端功能移轉、營運管理邏輯調整，規模龐大且初期需求模糊、無既定規格可依循。',
                '優先以直接影響公司營收的「使用者端功能轉移」作為大型系統合併的第一階段MVP。',
              ],
              en: [
                'The merge touched data-field alignment, front-end feature migration and changes to operations logic: a very large scope, with vague early requirements and no existing spec to follow.',
                'Made the user-side migration — the part that directly drives company revenue — the phase-one MVP of a large system merge.',
              ],
            },
          },
        ],
      },
      {
        title: { zh: '教育部雲端資料介接', en: 'National EduCloud Data Integration' },
        projectId: 'edu-cloud-integration',
        sections: [
          {
            heading: { zh: '商業策略｜制定可複用機制', en: 'Business strategy | Building a reusable mechanism' },
            points: {
              zh: ['推動「UA分流」折衷方案落地，達成時限內獲准取得教育部資料介接資格的目標。'],
              en: ['Landed the "UA routing" compromise, winning approval for the ministry data integration within the deadline.'],
            },
          },
          {
            heading: { zh: 'Trade-off｜兼顧資源有限性與服務穩定性', en: 'Trade-off | Limited resources vs. service stability' },
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
            heading: { zh: '產品設計｜OIDC統一驗證規劃', en: 'Product design | Unified OIDC verification planning' },
            points: {
              zh: ['令不同開發時空背景的教用服務，改以同一套OIDC驗證邏輯識別登入者身份。'],
              en: ['Moved teaching services built at different times and in different contexts onto one OIDC verification logic for identifying users.'],
            },
          },
          {
            heading: { zh: '商業策略｜降低新服務導入成本', en: 'Business strategy | Lower cost of onboarding new services' },
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
            heading: { zh: '產品設計｜自動媒合流程建構', en: 'Product design | Building the automatic matching flow' },
            points: {
              zh: ['比照Uber派單機制，將補課需求派發給有空檔時段的老師搶課，提高師資利用率。'],
              en: ['Modeled on Uber-style dispatch: make-up class requests go out to teachers with open slots to claim, raising teacher utilization.'],
            },
          },
          {
            heading: { zh: '商業策略｜提高師資運用率 降低人工作業量', en: 'Business strategy | Higher teacher utilization, less manual work' },
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
  requirements: {
    label: { zh: '第②類', en: 'Category 2' },
    heading: {
      zh: '需求管理分析 / 整合梳理 / 優先序 / 變動 / 規格',
      en: 'Requirements analysis / Synthesis / Prioritization / Change / Specs',
    },
    updating: true,
    selfStudyNote: { zh: '更多經驗持續整理更新中', en: 'More experiences are being added.' },
    work: [
      {
        title: { zh: '補教 × 家教雙系統合併', en: 'Tutoring × Home-Tutoring System Merge' },
        projectId: 'dual-system-merge',
        sections: [
          {
            heading: {
              zh: '需求管理分析｜以系統架構為切角拆解模糊需求',
              en: 'Requirements analysis | Breaking down vague needs through system architecture',
            },
            points: {
              zh: [
                '核對兩大系統SiteMap，盤點整合項目，將龐大且模糊的需求拆解成對資料欄位、營運管理、前端流程等面向的具體工項，使專案有更明確的執行路徑與階段目標。',
              ],
              en: [
                'Cross-checked the sitemaps of both systems and inventoried what had to be integrated, breaking a huge, vague requirement into concrete work items across data fields, operations management and front-end flows, giving the project a clearer path and clear phase goals.',
              ],
            },
          },
        ],
      },
      {
        title: { zh: '教師身份驗證機制建構', en: 'Teacher Identity Verification System' },
        projectId: 'teacher-auth',
        sections: [
          {
            heading: {
              zh: '需求管理分析｜技術實作資料需求確認、使用體驗平衡管理',
              en: 'Requirements analysis | Confirming data needs for implementation, balancing user experience',
            },
            points: {
              zh: [
                '釐清「資料取得」與「系統實作需求」的落差，與工程對齊建立白名單所需的最小必要欄位。',
                '代表研發團隊與外部單位溝通，釐清白名單必要資料欄位，對齊 JSON 交換格式。',
                '與UX設計共同商議資料驗證需求與註冊易用性之間的平衡。',
              ],
              en: [
                'Closed the gap between the data that could actually be obtained and what the system needed, and agreed with engineering on the minimum required fields for the whitelist.',
                'Spoke for the engineering team with external units to confirm the whitelist fields and align on the JSON exchange format.',
                'Worked with UX design to balance data-verification needs against ease of sign-up.',
              ],
            },
          },
          {
            heading: {
              zh: '需求變動管理｜簡化跨平台作業流程，降低內勤學習成本',
              en: 'Change management | Simplifying the cross-platform flow, lowering the learning cost for back-office staff',
            },
            points: {
              zh: [
                '主管提出流程跨多個系統、維運負擔高，重新討論後從 3 種方案中選定極簡化流程。',
                '把原先橫跨會員中心、Zendesk、Teams 三個服務的人工驗證流程，收攏重構至單\u2060一\u00A0Microsoft\u00A0Teams 平台運作。',
              ],
              en: [
                'When the manager pointed out that the flow spanned several systems and was costly to maintain, we reopened the discussion and chose the simplest of 3 options.',
                'Consolidated the manual verification flow, which used to span the member center, Zendesk and Teams, into a single Microsoft Teams workflow.',
              ],
            },
          },
        ],
      },
    ],
    selfStudyIntro: {
      zh: '聚焦在需求分析中的「業主與使用者訪談」進修，其中幾段經驗看似各自獨立，實則有明確因果影響關係。',
      en: 'My study here focuses on client and user interviews within requirements analysis. These experiences look separate, but each one clearly led to the next.',
    },
    selfStudy: [
      {
        title: {
          zh: '臺科大碩士商學院「個案研究」：茶館創辦人訪談',
          en: 'NTUST MBA "Case Study" course: interviewing a tea-house founder',
        },
        period: { zh: '2021.06', en: 'June 2021' },
        lead: {
          zh: '建立「商業理論融合實務」的訪談專業基礎',
          en: 'Building the interviewing foundation of applying business theory to practice',
        },
        sections: [
          {
            heading: {
              zh: '訪綱設計｜依學術框架反推訪談題目，理論融合實務',
              en: 'Interview guide | Working back from academic frameworks to interview questions',
            },
            points: {
              zh: [
                '針對個案資訊推演適用理論框架→由框架拆解訪談綱要→透過訪談反推蒐集原始資料。',
                '訪談前先蒐集粉專、活動與公益參與等次級資料，建立個案資訊背景。',
                '根據背景資訊選定 8 個適用框架：兩難困境、Enactment 制定、資源拼湊、資源活化、組織敏捷性、組織雙元性、商業模式、資源基礎理論。',
                '依據框架反推出逾 30 題的完整訪綱，並安排訪談題目優先序。',
              ],
              en: [
                'Worked out which theoretical frameworks fit the case, broke each into interview outlines, then used the interviews to collect first-hand data.',
                'Before interviewing, gathered secondary material (social posts, events, community involvement) to build background on the case.',
                'Chose 8 frameworks from that background: dilemmas, Enactment, bricolage, resource revitalization, organizational agility, ambidexterity, business model and the resource-based view.',
                'Derived a full guide of 30+ questions from the frameworks and ranked them by priority.',
              ],
            },
            imagesLabel: { zh: '查看訪綱截圖', en: 'View the interview guide' },
            images: [
              {
                src: 'competencies/requirements/interview-guide-1.png',
                alt: { zh: '訪綱截圖：衝突性、兩難的困境與故事性', en: 'Interview guide: conflict and dilemmas' },
              },
              {
                src: 'competencies/requirements/interview-guide-2.png',
                alt: { zh: '訪綱截圖：資源拼湊理論與資源活化', en: 'Interview guide: bricolage and resource revitalization' },
              },
              {
                src: 'competencies/requirements/interview-guide-3.png',
                alt: { zh: '訪綱截圖：外部環境應對與組織雙元性', en: 'Interview guide: external shocks and ambidexterity' },
              },
            ],
          },
          {
            heading: {
              zh: '訪談執行歸納｜依營運階段整理訪談結果',
              en: 'Interview synthesis | Organizing findings by operating stage',
            },
            points: {
              zh: [
                '訪談內容依茶館營運階段歸納對環境的認知、行動與結果。',
                '以 Enactment 制定與資源基礎理論，分析茶館如何調整策略、憑何資源建立獨特競爭力。',
                '結論給管理者：不一味追求資源豐富，而是把現有資源運用到極致。',
              ],
              en: [
                "Grouped the interview content by the tea house's operating stages: how it read its environment, what it did, and what resulted.",
                'Used Enactment and the resource-based view to analyze how the tea house adjusted its strategy and which resources built its distinctive edge.',
                'Takeaway for managers: rather than chasing ever more resources, get the most out of the ones you already have.',
              ],
            },
          },
        ],
      },
    ],
  },
}
