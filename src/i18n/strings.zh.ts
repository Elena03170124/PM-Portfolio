import type { AppStrings } from './types'

const strings: AppStrings = {
  nav: {
    about: '關於我',
    projects: '專案經驗',
    competencies: 'PM能力矩陣',
    honors: '其他榮譽',
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
    subtitle: '涵蓋 PM 核心職能的九個面向，內容整理中。',
    emptyState: '目前尚無對應的已交付專案——這是我近期主動自學、正在累積實作經驗的方向。',
    projectCount: (n: number) => `${n} 個專案`,
  },
  projects: {
    title: '專案經驗',
    subtitle: '以下爲 3 大代表案例；更多專案經驗與能力演進歷程，請至「專案經驗」頁面查看。',
    moreCta: '查看更多專案經驗 →',
    expand: '速覽專案概要',
    collapse: '收合',
    situation: '背景',
    task: '任務',
    action: '行動',
    result: '成果',
    reflection: '反思',
    confidentialNote: '部分文件涉及商業機密，完整原稿可於面談階段提供查核。',
  },
  menu: {
    open: '開啟選單',
    close: '關閉選單',
  },
  contact: {
    cta: '聯絡我',
    copied: '已複製email',
  },
  footer: {
    note: '內容整理自個人 Notion 文件，如想進一步了解專案細節，歡迎聯繫：',
    disclaimer: '部分尚未完成的頁面暫不開放瀏覽，敬請見諒。',
  },
}

export default strings
