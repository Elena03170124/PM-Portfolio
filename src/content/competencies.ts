import type { Competency } from './types'

/** The nine-competency matrix, distilled from Cassandra's own "Case Study
 *  九大能力矩陣" — each with her 觀點定義 (what it means) and 解題錦囊
 *  (her working formula), condensed for a portfolio audience. */
export const competencies: Competency[] = [
  {
    id: 'product-strategy',
    index: 1,
    name: { zh: '產品設計・商業策略', en: 'Product & Business Strategy' },
    definition: {
      zh: '好產品在創造使用者價值的同時，也兼顧商業可持續性。做之前先評估可行性，做之後一定驗證追蹤。',
      en: 'A good product creates user value while staying commercially sustainable — assess feasibility before building, verify impact after shipping.',
    },
    playbook: {
      zh: '先抓出核心問題，排優先序去解題，加驗證追蹤機制；高風險項目先做小範圍 MVP 驗證方向。',
      en: 'Identify the core problem, sequence it by priority, and build in a way to verify impact; validate high-risk bets with a small-scope MVP first.',
    },
  },
  {
    id: 'requirements',
    index: 2,
    name: { zh: '需求管理・整合梳理', en: 'Requirements & Synthesis' },
    definition: {
      zh: '把模糊、分散、甚至互相衝突的需求，拆解成可執行、可排序的具體工項。',
      en: 'Break vague, scattered, or conflicting requirements into concrete, sequenced, executable work.',
    },
    playbook: {
      zh: '依急迫性、影響範圍、發生機率排序；需求變動先理解根因，再盤點範疇與風險，同步資訊給相關人。',
      en: 'Prioritize by urgency, blast radius, and likelihood; when scope shifts, understand the root cause first, then map the risk before communicating it onward.',
    },
  },
  {
    id: 'ux',
    index: 3,
    name: { zh: '使用體驗・流程優化', en: 'UX & Flow Design' },
    definition: {
      zh: '使用者體驗＝有效率、低學習成本地完成目標，不是把介面做得好看而已。',
      en: 'Good UX means completing a goal efficiently with minimal learning cost — not just a polished interface.',
    },
    playbook: {
      zh: '系統轉換或整併時，優先保留使用者熟悉的操作路徑，降低服務切換帶來的適應成本。',
      en: 'When migrating or merging systems, preserve the operating patterns users already know first, to minimize the switching cost.',
    },
  },
  {
    id: 'tech',
    index: 4,
    name: { zh: '技術理解・架構轉譯', en: 'Technical Understanding & Translation' },
    definition: {
      zh: '不需要懂到能寫程式，但要理解架構限制與資料結構，才能在技術與商業之間做出對的取捨。',
      en: "You don't need to write the code, but you do need to understand the architecture and data model well enough to make the right trade-offs.",
    },
    playbook: {
      zh: '評估技術可行性時把驗收點切小、對照過去平均工時；理解不了就跟工程或 AI 協作做判斷。',
      en: 'Break feasibility checks into small, verifiable checkpoints against past benchmarks; when in doubt, work it through with engineering or AI directly.',
    },
  },
  {
    id: 'risk',
    index: 5,
    name: { zh: '風險控管・危機處理', en: 'Risk Management & Crisis Response' },
    definition: {
      zh: '短期止血與根因分析同等重要；任何修風險的方案都必須先在模擬環境測試過。',
      en: 'Short-term containment and root-cause analysis matter equally — any risk fix gets tested in a staging environment first.',
    },
    playbook: {
      zh: '先控制現場、降低衝擊，確認資訊後再事後檢討；短中長期都要有對應決策，不是一次性解完。',
      en: 'Contain the immediate impact first, confirm the facts, then do the post-mortem — pair every fix with a short-, mid-, and long-term response, not a one-shot patch.',
    },
  },
  {
    id: 'project-mgmt',
    index: 6,
    name: { zh: '專案管理・資源配置', en: 'Project Management & Resourcing' },
    definition: {
      zh: '敏捷的核心是快速驗證、持續迭代——MVP 與 A/B 測試都建立在這個精神上。',
      en: 'The core of agility is fast validation and continuous iteration — MVPs and A/B tests both rest on this principle.',
    },
    playbook: {
      zh: '確保進度＝資訊對齊＋協作方式清楚＋問題即時同步＋持續迭代優化，延遲時先釐清原因與影響範圍。',
      en: 'Keeping projects on track means aligned information, clear collaboration norms, fast issue surfacing, and continuous iteration — when slippage happens, scope the cause and blast radius first.',
    },
  },
  {
    id: 'stakeholder',
    index: 7,
    name: { zh: 'Stakeholder 協作・向上管理', en: 'Stakeholder Alignment & Upward Management' },
    definition: {
      zh: '領導力是主動釐清方向、聚焦需求，推動不同角色往同一個目標前進，共識則來自充分討論。',
      en: 'Leadership means proactively clarifying direction and focus, pulling different roles toward the same goal — consensus comes from real discussion, not a decree.',
    },
    playbook: {
      zh: '先判斷溝通對象再選方式；遇到衝突先找根本來源、整合各方意見，必要時才升級請高層裁決。',
      en: "Read the audience before choosing how to communicate; when conflict surfaces, find the root source and synthesize positions first — escalate only when it's truly needed.",
    },
  },
  {
    id: 'data',
    index: 8,
    name: { zh: '數據分析・成效驗證', en: 'Data Analysis & Impact Validation' },
    definition: {
      zh: '指標的定義（計算期間、算法、資料來源）本身就會影響團隊能不能達成共識。',
      en: "How a metric is defined — its window, formula, data source — shapes whether a team can even agree on it.",
    },
    playbook: {
      zh: '從流程漏斗找節點定義指標；沒有數據時用訪談、問卷、客訴、競品做替代驗證。',
      en: 'Locate the metric at the actual funnel step it describes; when data is unavailable, triangulate with interviews, surveys, support tickets, or competitor benchmarks.',
    },
  },
  {
    id: 'ai',
    index: 9,
    name: { zh: 'AI 應用・自動化導入', en: 'AI Adoption & Automation' },
    definition: {
      zh: 'AI 不是取代判斷，而是降低重複性工作，幫團隊更快發現問題、預測趨勢、提升效率。',
      en: "AI isn't a substitute for judgment — it removes repetitive work so teams can spot problems, anticipate trends, and move faster.",
    },
    playbook: {
      zh: '導入前評估效益與風險（可控性、能否 rollback、有無人工覆核），先小範圍測試再擴大。',
      en: 'Before adopting, weigh the upside against controllability, rollback options, and human review — pilot small before scaling.',
    },
  },
]
