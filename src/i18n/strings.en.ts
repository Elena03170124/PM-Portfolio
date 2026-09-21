import type { AppStrings } from './types'

const strings: AppStrings = {
  nav: {
    about: 'About',
    projects: 'Project Experience',
    competencies: 'PM Competency Matrix',
  },
  languageToggle: {
    label: '中',
    srAnnounce: 'Switch to Traditional Chinese',
  },
  hero: {
    eyebrow: 'PM · SYSTEMS & INFRASTRUCTURE · 2.5 YRS',
    ctaProjects: 'See project experience',
    ctaAbout: 'More about me',
  },
  competencyMatrix: {
    title: 'The Nine-Competency Matrix',
    subtitle: 'Click a node to filter the projects that actually applied it.',
    resetFilter: 'Show all projects',
    emptyState: "No shipped project here yet — this is a direction I'm actively self-studying and building toward.",
    projectCount: (n: number) => `${n} project${n === 1 ? '' : 's'}`,
  },
  projects: {
    title: 'Project Experience',
    subtitle: 'Six full case studies from Nani, plus earlier product-assistant work at Hotai.',
    southoneLabel: 'Nani · Systems & Infrastructure PM',
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
  contact: {
    cta: 'Contact',
    copied: 'Email copied',
  },
  footer: {
    note: 'Content curated from my own Notion project documentation — reach out for corrections or to go deeper on any case study.',
  },
}

export default strings
