import type { AboutChapter, Bilingual } from './types'

/** Headline of the "About me" page. */
export const aboutThesis: Bilingual = {
  zh: '一切經歷，皆因「不甘平庸的韌性」而生',
  en: 'Every step I have taken comes from a resilience that refuses to settle for the ordinary',
}

/** The four stages of the story, in chronological order. Chinese is the
 *  author's own text; English is a provisional translation. */
export const aboutChapters: AboutChapter[] = [
  {
    id: 'direction',
    years: { zh: '2022 – 2023', en: '2022 – 2023' },
    tag: { zh: '確立方向', en: 'Finding direction' },
    title: {
      zh: '建立「優秀 PM 能力框架」，自我檢核專業能力',
      en: 'Building an “Excellent PM Competency Framework” to self-assess my skills',
    },
    paras: [
      {
        zh: '將數十篇 Medium 文章與 Podcast 內容，梳理轉化為個人專業能力檢核框架。',
        en: 'I distilled dozens of Medium articles and podcast episodes into a personal framework for checking my own professional competencies.',
      },
      { zh: '內容包含兩大核心：', en: 'It has two core parts:' },
    ],
    bullets: [
      {
        lead: { zh: '技能工具方法論：', en: 'Skills, tools and methods: ' },
        text: {
          zh: '產品生命週期、競品分析、用戶訪談、需求管理與優先級排序方法等。',
          en: 'the product lifecycle, competitor analysis, user interviews, requirements management and prioritization methods, and more.',
        },
      },
      {
        lead: { zh: '軟實力要求：', en: 'Soft-skill expectations: ' },
        text: {
          zh: 'PM 職責範疇定義、常見利害關係人梳理與跨團隊溝通協商方法。',
          en: 'how a PM’s responsibilities are defined, mapping common stakeholders, and methods for cross-team communication and negotiation.',
        },
      },
    ],
    // Destination not decided yet (no href) — renders as a disabled placeholder.
    cta: { kind: 'link', label: { zh: '查看專案經驗', en: 'View my project experience' } },
  },
  {
    id: 'breakout',
    years: { zh: '2023 – 2024', en: '2023 – 2024' },
    tag: { zh: '拒絕平穩', en: 'Refusing the comfortable' },
    title: {
      zh: '主動破局，追求真正具影響力的舞台',
      en: 'Breaking out on my own to find a stage with real influence',
    },
    paras: [
      {
        zh: '第一份工作，在和泰聯網擔任產品助理，我迅速將方法論落地於測試驗收流程優化、QA 文件標準化與需求訪談梳理等任務。',
        en: 'My first job was as a product assistant at Hotai Motor’s digital division, where I quickly put these methods to work — improving test-and-acceptance processes, standardizing QA documents, and organizing requirements interviews.',
      },
      {
        zh: '但我知道，這份職務的專業天花板與成長速度難以滿足我對卓越的追求，因此在 2024 年選擇主動離開。',
        en: 'But I knew the ceiling on expertise and the pace of growth in that role could not satisfy my pursuit of excellence, so in 2024 I chose to leave.',
      },
      {
        zh: '我清楚自己追求的是能真正深入決策、承擔責任，且充滿多重挑戰的實戰舞台。',
        en: 'I knew what I was after: a demanding, real-world stage where I could be deeply involved in decisions and take on responsibility.',
      },
    ],
  },
  {
    id: 'adversity',
    years: { zh: '2024 – 2026', en: '2024 – 2026' },
    tag: { zh: '逆境磨練', en: 'Forged by adversity' },
    title: {
      zh: '越是混亂，越要鋪出一條讓專案平穩落地的路',
      en: 'The more chaotic it gets, the more I lay a path for projects to land smoothly',
    },
    paras: [
      {
        zh: '進入南一集團任職產品經理後，我承接了多個系統重構與跨服務整合專案。',
        en: 'After joining Nani as a Product Manager, I took on several system-rebuild and cross-service integration projects.',
      },
      {
        zh: '面對陌生知識的吸收轉譯、資料結構的相依性釐清、多方利害關係人的需求平衡，以及在資訊模糊下推進專案落地等多重挑戰。',
        en: 'The challenges came together: absorbing and translating unfamiliar knowledge, untangling data-structure dependencies, balancing the needs of many stakeholders, and pushing projects to landing under ambiguous information.',
      },
      {
        zh: '憑著一貫不服輸的韌性，我除了累積多個複雜專案經驗，更磨練出需求整合梳理、資料規格釐清、跨域溝通轉譯與風險識別管理等可複用的進階專業能力。',
        en: 'With my usual refusal to back down, I gained experience across several complex projects and, more importantly, honed reusable advanced skills: consolidating and structuring requirements, clarifying data specifications, translating across disciplines, and identifying and managing risk.',
      },
    ],
    cta: { kind: 'link', label: { zh: '查看專案經驗', en: 'View my project experience' }, href: '#projects' },
  },
  {
    id: 'elevate',
    years: { zh: '2026 – 今', en: '2026 – Present' },
    tag: { zh: '昇華專業', en: 'Elevating my craft' },
    title: {
      zh: '朝 Strategy TPM 的長遠目標持續邁進',
      en: 'Moving steadily toward my long-term goal of Strategy TPM',
    },
    paras: [
      {
        zh: '在下一階段，我希望能投入更具規模與挑戰性的複雜系統專案及溝通環境，進一步培養從技術、產品、商業與營運等多重角度思考問題、權衡評估決策的能力。',
        en: 'In the next stage, I hope to work on larger and more challenging complex-system projects and communication environments, further developing the ability to think through problems and weigh decisions from technical, product, business and operational angles.',
      },
      {
        zh: '同時，我也期待新環境能提供更多元的方案評估與成效追蹤管道，除了強化對「資源投入何處能帶來最大整體價值」的配置判斷力，更能發揮我在數據分析上的基礎專業，投入實驗設計、定義成效衡量指標，並追蹤評估開發與優化成果。',
        en: 'I also hope my next environment offers more varied ways to evaluate options and track results. Beyond strengthening my judgment on where resources should go to create the greatest overall value, I want to put my foundation in data analysis to work — designing experiments, defining success metrics, and tracking and evaluating the outcomes of development and optimization.',
      },
    ],
  },
]
