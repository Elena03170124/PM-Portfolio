import type { Bilingual } from './types'

/** Employer facts shown under each company heading on the Project Experience page. */
export interface CompanyInfo {
  organization: Bilingual
  size: Bilingual
  group: Bilingual
  products: Bilingual
  appliedTitle: Bilingual
  internalTitles: Bilingual
  scope: Bilingual<string[]>
}

export const naniInfo: CompanyInfo = {
  organization: {
    zh: '母公司南一書局企業、子公司萬通教育科技',
    en: 'Nani Book Enterprise (parent company), OneClass Education Technology (subsidiary)',
  },
  size: { zh: '100～500人', en: '100–500 employees' },
  group: { zh: '南一教育集團', en: 'Nani Education Group' },
  products: {
    zh: 'NaniClub會員中心系統、OneClass一對一真人家教系統、Live App家教家長專用App',
    en: 'NaniClub member center system, OneClass one-on-one live tutoring system, Live App (parent-only app for tutoring)',
  },
  appliedTitle: { zh: '產品經理', en: 'Product Manager' },
  internalTitles: { zh: 'PM、產品經理、專案企劃', en: 'PM, Product Manager, Project Planner' },
  scope: {
    zh: [
      '梳理整合資訊脈絡',
      '定義規格流程與驗收標準',
      '需求與優先序變動管理',
      '資源成本管理',
      '風險識別與根因分析',
      '技術商業溝通轉譯',
      '跨域資訊同步共識建立',
      '取捨與推動決策',
      '專案交付落地與品質控管',
      '教育訓練',
    ],
    en: [
      'Consolidating scattered information into a clear picture',
      'Defining specs, flows and acceptance criteria',
      'Managing changes in requirements and priorities',
      'Resource and cost management',
      'Risk identification and root-cause analysis',
      'Translating between technical and business stakeholders',
      'Building cross-domain information sync and consensus',
      'Weighing trade-offs and driving decisions',
      'Project delivery and quality control',
      'Training',
    ],
  },
}

export const hotaiInfo: CompanyInfo = {
  organization: { zh: '和泰聯網股份有限公司', en: 'Hotai Connected Co., Ltd.' },
  size: { zh: '100～500人', en: '100–500 employees' },
  group: { zh: '和泰汽車集團', en: 'Hotai Motor Group' },
  products: { zh: '行程規劃App「chicTrip去趣」', en: 'Trip-planning app “chicTrip”' },
  appliedTitle: { zh: '產品助理', en: 'Product Assistant' },
  internalTitles: { zh: 'QA、數據分析專員', en: 'QA, Data Analyst' },
  scope: {
    zh: ['QA品保測試', '驗收標準定義', 'SPEC規格梳理', '功能或流程優化建議', '問題回報追蹤', '需求訪談', '簡易競品分析'],
    en: [
      'QA testing',
      'Defining acceptance criteria',
      'Sorting out SPEC documents',
      'Suggesting feature and flow improvements',
      'Tracking reported issues',
      'Requirement interviews',
      'Lightweight competitor analysis',
    ],
  },
}
