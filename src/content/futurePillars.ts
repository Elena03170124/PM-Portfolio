import type { FuturePillar } from './types'

/** Her self-defined next-stage target framework — "Strategy TPM 綜合能力升級"
 *  — four pillars, distinct from the backward-looking nine-competency
 *  matrix above. Used for the "where I'm headed" section of the site. */
export const futurePillars: FuturePillar[] = [
  {
    id: 'strategic-influence',
    index: 1,
    name: { zh: '跨領域影響力與戰略轉譯', en: 'Strategic Influence & Alignment' },
    description: {
      zh: '擔任高層、業務與研發團隊之間的橋樑，以非對稱轉譯建立團隊決策框架——向上把技術限制轉譯為商業風險與 ROI，向下建立決策框架避免技術細節爭執。',
      en: "Acting as the bridge between leadership, business, and engineering — translating asymmetrically in both directions: technical constraints into business risk and ROI upward, and a shared decision framework downward that keeps teams out of the weeds.",
    },
  },
  {
    id: 'data-value-validation',
    index: 2,
    name: { zh: '數據驅動與價值驗證', en: 'Data Analytics & Value Validation' },
    description: {
      zh: '融合質化洞察與量化數據，精確驗證技術與產品決策的真實商業 Impact——焦點訪談挖掘深層痛點，搭配 Dashboard、North Star Metric 與 A/B 測試做嚴謹驗證。',
      en: 'Blending qualitative insight with quantitative rigor to validate the real business impact of technical and product decisions — focus groups to surface real pain points, paired with dashboards, a North Star metric, and disciplined A/B testing.',
    },
  },
  {
    id: 'architecture-strategy',
    index: 3,
    name: { zh: '商業取捨與架構投資決策', en: 'Business Strategy & Architecture Trade-offs' },
    description: {
      zh: '把技術與架構視為商業策略變數，用財務語言做資源配置——拆解毛利結構與單位經濟模型，量化比較「技術重構 vs. 新功能開發」的 ROI。',
      en: "Treating architecture as a business-strategy variable, not just an engineering one — reading it through margin structure and unit economics, and quantifying the ROI trade-off between rebuilding versus shipping new features.",
    },
  },
  {
    id: 'architectural-execution',
    index: 4,
    name: { zh: '架構級交付與敏捷應變', en: 'Architectural Execution & Agile Resilience' },
    description: {
      zh: '升級為「架構考量型 PM」，把技術複雜度、依賴性、擴展性納入規格定義，並判斷架構重構的最佳時機。',
      en: 'Growing into an "architecture-aware PM" — folding technical complexity, dependencies, and scalability directly into spec-writing, and knowing when a refactor is actually worth the timing.',
    },
  },
]
