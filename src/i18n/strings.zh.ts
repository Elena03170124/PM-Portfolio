import type { AppStrings } from './types'

const strings: AppStrings = {
  nav: {
    about: '關於我',
    projects: '專案經驗',
    competencies: 'PM能力矩陣',
  },
  languageToggle: {
    label: 'EN',
    srAnnounce: '切換為英文',
  },
  hero: {
    eyebrow: 'PM・系統與架構・2.5 年經驗',
    ctaProjects: '看專案經驗',
    ctaAbout: '更多關於我',
  },
  competencyMatrix: {
    title: '九大能力矩陣',
    subtitle: '點一個能力節點，篩選出實際應用它的專案。',
    resetFilter: '顯示全部專案',
    emptyState: '目前尚無對應的已交付專案——這是我近期主動自學、正在累積實作經驗的方向。',
    projectCount: (n: number) => `${n} 個專案`,
  },
  projects: {
    title: '專案經驗',
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
  contact: {
    cta: '聯絡我',
  },
  footer: {
    note: '內容整理自個人 Notion 專案文件，如有錯誤或想進一步了解案例細節，歡迎聯繫。',
  },
}

export default strings
