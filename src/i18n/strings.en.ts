import type { AppStrings } from './types'

const strings: AppStrings = {
  nav: {
    about: 'About',
    projects: 'Project Experience',
    competencies: 'PM Competency Matrix',
    honors: 'Honors',
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
    subtitle: 'Nine areas core to the PM role — still being filled in.',
    emptyState: "No shipped project here yet — this is a direction I'm actively self-studying and building toward.",
    projectCount: (n: number) => `${n} project${n === 1 ? '' : 's'}`,
  },
  projects: {
    title: 'Project Experience',
    subtitle: '3 flagship case studies below — see the Project Experience page for more projects and my growth journey.',
    moreCta: 'See more project experience →',
    expand: 'Preview summary',
    collapse: 'Collapse',
    situation: 'Situation',
    task: 'Task',
    action: 'Action',
    result: 'Result',
    reflection: 'Reflection',
    confidentialNote: 'Some source documents are confidential — full originals available on request at interview stage.',
  },
  menu: {
    open: 'Open menu',
    close: 'Close menu',
  },
  contact: {
    cta: 'Contact',
    copied: 'Email copied',
  },
  footer: {
    note: 'Content curated from my own Notion project documentation — reach out to go deeper on any case study:',
    disclaimer: "A few pages are still being finished and aren't open yet — thanks for your understanding.",
  },
}

export default strings
