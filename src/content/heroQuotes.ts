import type { HeroQuote } from './types'

/** Her own self-positioning statements, used as the hero's rotating value
 *  props and as pull-quotes elsewhere on the site. */
export const heroQuotes: HeroQuote[] = [
  {
    id: 'ambiguity-to-execution',
    text: {
      zh: '能在複雜且不確定的情境下，將抽象需求轉化為可執行方案。',
      en: 'Turning ambiguous, complex situations into plans that actually ship.',
    },
  },
  {
    id: 'balanced-decisions',
    text: {
      zh: '能協助團隊在多方限制下做出平衡決策。',
      en: 'Helping teams find the balanced call under real constraints.',
    },
  },
  {
    id: 'common-language',
    text: {
      zh: '能在不同角色之間建立共通語言，提升專案推進效率。',
      en: 'Building a shared language across roles to keep projects moving.',
    },
  },
]

export const positioningStatement = {
  zh: '偏向「系統與架構型 PM（System / Infrastructure PM）」——強項在跨系統整併、資料結構重構與身份治理架構，而非前台流量成長。',
  en: 'A systems/infrastructure-leaning PM — strongest at cross-system integration, data restructuring, and identity architecture, rather than front-of-funnel growth.',
}

export const selfDescription = {
  zh: '持續成長、有韌性、可靠。',
  en: 'Always growing, resilient, reliable.',
}
