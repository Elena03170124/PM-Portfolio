import type { AppStrings } from './types'

const strings: AppStrings = {
  nav: {
    competencies: '能力矩陣',
    projects: '專案時間軸',
    growth: '成長軌跡',
    future: '未來方向',
    about: '關於我',
  },
  languageToggle: {
    label: 'EN',
    srAnnounce: '切換為英文',
  },
  hero: {
    eyebrow: 'PM PORTFOLIO · SYSTEM & INFRASTRUCTURE',
    ctaProjects: '看專案案例',
    ctaContact: '聯絡我',
  },
  competencyMatrix: {
    title: '九大能力矩陣',
    subtitle: '點一個能力節點，篩選出實際應用它的專案。',
    resetFilter: '顯示全部專案',
    emptyState: '目前尚無對應的已交付專案——這是我近期主動自學、正在累積實作經驗的方向。',
    projectCount: (n: number) => `${n} 個專案`,
  },
  projects: {
    title: '專案時間軸',
    subtitle: '南一集團的 6 個完整案例，加上和泰聯網早期的產品助理經歷。',
    southoneLabel: '南一集團・系統與架構型 PM',
    hotaiLabel: '和泰聯網・產品助理起點',
    expand: '展開完整案例',
    collapse: '收合',
    situation: '背景',
    task: '任務',
    action: '行動',
    result: '成果',
    reflection: '反思',
    confidentialNote: '部分文件涉及商業機密，完整原稿可於面談階段提供查核。',
    filteredBy: '目前篩選：',
  },
  growth: {
    title: '從執行者到決策者',
    subtitle: '結合整體作品脈絡，可以看到我由「任務執行者」蛻變為「系統層級決策者」的過程。',
    hotaiEra: {
      label: '2023・和泰聯網',
      title: '任務執行者',
      description: '站在第一線做 QA 驗收、訪談彙整使用者回饋、撰寫規格文件——把交付的每一項任務做到扎實。',
    },
    southoneEra: {
      label: '2024–2026・南一集團',
      title: '系統層級決策者',
      description: '主導跨系統整合、資料治理與身份驗證架構，在技術限制、商業目標與風險之間做平衡決策。',
    },
  },
  future: {
    title: 'Strategy TPM・下一階段',
    subtitle: '我為自己設定的下一階段目標框架，偏向 Platform／SaaS 類公司的 Strategy TPM。',
  },
  about: {
    title: '關於我',
    positioningLabel: '職涯定位',
    contactCta: '取得聯繫',
  },
  footer: {
    note: '內容整理自個人 Notion 專案文件，如有錯誤或想進一步了解案例細節，歡迎聯繫。',
  },
}

export default strings
