import type { AppStrings } from './types'

const strings: AppStrings = {
  nav: {
    competencies: 'Competencies',
    projects: 'Projects',
    growth: 'Growth',
    future: 'Future Direction',
    about: 'About',
  },
  languageToggle: {
    label: '中',
    srAnnounce: 'Switch to Traditional Chinese',
  },
  hero: {
    eyebrow: 'PM PORTFOLIO · SYSTEM & INFRASTRUCTURE',
    ctaProjects: 'View case studies',
    ctaContact: 'Get in touch',
  },
  competencyMatrix: {
    title: 'The Nine-Competency Matrix',
    subtitle: 'Click a node to filter the projects that actually applied it.',
    resetFilter: 'Show all projects',
    emptyState: "No shipped project here yet — this is a direction I'm actively self-studying and building toward.",
    projectCount: (n: number) => `${n} project${n === 1 ? '' : 's'}`,
  },
  projects: {
    title: 'Project Timeline',
    subtitle: 'Six full case studies from South One Group, plus earlier product-assistant work at Hotai.',
    southoneLabel: 'South One Group · Systems & Infrastructure PM',
    hotaiLabel: 'Hotai Motor · Product-Assistant Origins',
    expand: 'Expand full case study',
    collapse: 'Collapse',
    situation: 'Situation',
    task: 'Task',
    action: 'Action',
    result: 'Result',
    reflection: 'Reflection',
    confidentialNote: 'Some source documents are confidential — full originals available on request at interview stage.',
    filteredBy: 'Filtered by:',
  },
  growth: {
    title: 'From Executor to Decision-Maker',
    subtitle: "Across my body of work you can trace the arc from 'task executor' to 'systems-level decision-maker.'",
    hotaiEra: {
      label: '2023 · Hotai Motor',
      title: 'Task Executor',
      description: 'On the front line doing QA sign-off, synthesizing user interviews, and writing specs — executing every handoff solidly.',
    },
    southoneEra: {
      label: '2024–2026 · South One Group',
      title: 'Systems-Level Decision-Maker',
      description: 'Leading cross-system integration, data governance, and identity architecture — balancing technical limits, business goals, and risk.',
    },
  },
  future: {
    title: 'Strategy TPM · Next Chapter',
    subtitle: "The target framework I've set for my next stage — leaning toward a Strategy TPM role at a platform or SaaS company.",
  },
  about: {
    title: 'About',
    positioningLabel: 'Career Positioning',
    contactCta: 'Get in touch',
  },
  footer: {
    note: 'Content curated from my own Notion project documentation — reach out for corrections or to go deeper on any case study.',
  },
}

export default strings
