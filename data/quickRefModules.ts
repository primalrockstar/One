// data/quickRefModules.ts

export interface QuickRefSection {
  id: string;
  title: string;
  content: string[];
}

export interface QuickRefChapter {
  id: string;
  title: string;
  sections: QuickRefSection[];
}

export interface QuickRefModule {
  id: string;
  title: string;
  chapters: QuickRefChapter[];
}

const quickRefModules: QuickRefModule[] = [
  {
    id: 'module1',
    title: 'Foundations of EMS (Chapters 1–4)',
    chapters: [
      {
        id: 'chapter1',
        title: 'EMS Systems',
        sections: [
          {
            id: 'ch1-intro',
            title: 'Introduction to EMS Systems',
            content: [
              'Overview of EMS system structure and function.',
              'Covers history, roles, and EMT’s place within the system.',
              'Teams of healthcare professionals providing emergency care and transport.',
              'Governed by state laws.',
            ],
          },
          // …other sections from Chapter 1…
        ],
      },
      {
        id: 'chapter2',
        title: 'Workforce Safety & Wellness',
        sections: [
          {
            id: 'ch2-wellbeing',
            title: 'Prioritizing EMT Well-being',
            content: [
              'Recognize hazards to physical/mental health.',
              'Manage stress and support emotional needs.',
              'Ensure personal safety and use proper precautions.',
              'Prevent on-the-job injuries; prioritize your own wellness.',
            ],
          },
          // …other sections from Chapter 2…
        ],
      },
      {
        id: 'chapter3',
        title: 'Medical, Legal & Ethical Issues',
        sections: [], // fill in when ready
      },
      {
        id: 'chapter4',
        title: 'Communication & Documentation',
        sections: [], // fill in when ready
      },
    ],
  },
  // Future: add Module 2 (Ch 5–9) here
];

export default quickRefModules;
