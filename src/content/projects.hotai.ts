import type { Project } from './types'

/** Three early-career items from her product-assistant role at 和泰聯網
 *  (Hotai Motor's digital arm), 2023. Source documents flag most detail
 *  screenshots as confidential ("available on request at interview stage"),
 *  so these render as summary + competency tags only — no embedded STAR
 *  narrative or screenshots. */
export const hotaiProjects: Project[] = [
  {
    id: 'hotai-spec-logic-flow',
    company: 'hotai',
    companyLabel: { zh: '和泰聯網', en: 'Hotai Motor — digital division' },
    period: { zh: '2023.11 – 2024.02', en: '2023.11 – 2024.02' },
    title: {
      zh: '功能開發前｜製作 Logic Flow、SPEC 文件與產品文案發想',
      en: 'Pre-development: Logic Flow, Spec Docs & Product Copy',
    },
    summary: {
      zh: '用 Figma 繪製第三方租車 App 串接的 Logic Flow 協助工程評估技術限制；撰寫規格文件獲主管肯定架構清楚；星等評分文案提案架構被團隊直接沿用為最終版本。',
      en: 'Mapped a third-party car-rental integration in Figma to help engineering scope technical limits; wrote spec docs praised for clarity; my draft copy structure for a star-rating feature was adopted as the final version by the team.',
    },
    star: {
      situation: { zh: '', en: '' },
      task: { zh: '', en: '' },
      action: { zh: '', en: '' },
      result: { zh: '', en: '' },
      reflection: { zh: '', en: '' },
    },
    metrics: [],
    competencyIds: ['requirements', 'tech'],
    highlights: [
      { zh: '產品繪圖軟體應用', en: 'product diagramming (Figma)' },
      { zh: '組織邏輯力', en: 'structured logical thinking' },
      { zh: '獨立思考力', en: 'independent problem-solving' },
    ],
    summaryOnly: true,
  },
  {
    id: 'hotai-qa-launch-quality',
    company: 'hotai',
    companyLabel: { zh: '和泰聯網', en: 'Hotai Motor — digital division' },
    period: { zh: '2023.06 – 2024.02', en: '2023.06 – 2024.02' },
    title: {
      zh: '功能上線前｜App 品質驗收與流程文案優化',
      en: 'Pre-launch: QA Sign-off & Flow/Copy Polish',
    },
    summary: {
      zh: '站在第一線驗收新功能是否照規格開發、追蹤 bug 修復狀態，並與外包設計公司協作調整 UI 文案，同時主動優化 QA 測試文件降低測試門檻。',
      en: 'Signed off new features against spec, tracked bug fixes to closure, worked with the external design vendor on UI copy, and proactively simplified the QA test-plan documentation.',
    },
    star: {
      situation: { zh: '', en: '' },
      task: { zh: '', en: '' },
      action: { zh: '', en: '' },
      result: { zh: '', en: '' },
      reflection: { zh: '', en: '' },
    },
    metrics: [],
    competencyIds: ['risk', 'stakeholder'],
    highlights: [
      { zh: 'QA Testing', en: 'QA testing' },
      { zh: '細心謹慎', en: 'meticulous attention to detail' },
      { zh: '跨域溝通力', en: 'cross-functional communication' },
    ],
    summaryOnly: true,
  },
  {
    id: 'hotai-post-launch-feedback',
    company: 'hotai',
    companyLabel: { zh: '和泰聯網', en: 'Hotai Motor — digital division' },
    period: { zh: '2023.06 – 2024.02', en: '2023.06 – 2024.02' },
    title: {
      zh: '功能上線後｜使用者訪談、優化建議與指標定義',
      en: 'Post-launch: User Interviews, Optimization & Metrics',
    },
    summary: {
      zh: '執行使用者訪談彙整回饋、把雜亂的手稿訪談紀錄整理成規格化統計表，並從 GA 後台撈數據、定義產品績效指標的算法與追蹤意義。',
      en: 'Ran user interviews and synthesized feedback, turned handwritten interview notes into a structured tracking sheet, and pulled GA data to define what the product\'s performance metrics should mean and how they should be calculated.',
    },
    star: {
      situation: { zh: '', en: '' },
      task: { zh: '', en: '' },
      action: { zh: '', en: '' },
      result: { zh: '', en: '' },
      reflection: { zh: '', en: '' },
    },
    metrics: [],
    competencyIds: ['data', 'stakeholder', 'project-mgmt'],
    highlights: [
      { zh: '數據分析力', en: 'data analysis' },
      { zh: '溝通文件優化', en: 'communication-doc optimization' },
      { zh: '工項流程優化', en: 'workflow optimization' },
    ],
    summaryOnly: true,
  },
]
