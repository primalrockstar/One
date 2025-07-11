// src/data/quickRefModules.ts

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
      { id: 'chapter1', title: 'EMS Systems', sections: [ /* …already filled… */ ] },
      { id: 'chapter2', title: 'Workforce Safety & Wellness', sections: [ /* …already filled… */ ] },
      { id: 'chapter3', title: 'Medical, Legal & Ethical Issues', sections: [ /* …already filled… */ ] },
      { id: 'chapter4', title: 'Communication & Documentation', sections: [ /* …already filled… */ ] },
    ],
  },

  {
    id: 'module2',
    title: 'Medical Foundations (Chapters 5–9)',
    chapters: [
      { id: 'chapter5', title: 'Medical Terminology', sections: [ /* …already filled… */ ] },
      { id: 'chapter6', title: 'The Human Body', sections: [ /* …already filled… */ ] },
      { id: 'chapter7', title: 'Life Span Development', sections: [ /* …already filled… */ ] },
      { id: 'chapter8', title: 'Lifting & Moving Patients', sections: [ /* …already filled… */ ] },
      { id: 'chapter9', title: 'Team-Based Healthcare', sections: [ /* …already filled… */ ] },
    ],
  },

  // from here on, we’ll drop your chapter content into the `sections: []`
  {
    id: 'module3',
    title: 'Module 3 (Chapter 10)',
    chapters: [
      { id: 'chapter10', title: 'Chapter 10 Title…', sections: [] },
    ],
  },
  {
    id: 'module4',
    title: 'Module 4 (Chapter 11)',
    chapters: [
      { id: 'chapter11', title: 'Chapter 11 Title…', sections: [] },
    ],
  },
  {
    id: 'module5',
    title: 'Module 5 (Chapter 12)',
    chapters: [
      { id: 'chapter12', title: 'Chapter 12 Title…', sections: [] },
    ],
  },
  {
    id: 'module6',
    title: 'Module 6 (Chapters 13–14)',
    chapters: [
      { id: 'chapter13', title: 'Chapter 13 Title…', sections: [] },
      { id: 'chapter14', title: 'Chapter 14 Title…', sections: [] },
    ],
  },
  {
    id: 'module7',
    title: 'Module 7 (Chapters 15–17)',
    chapters: [
      { id: 'chapter15', title: 'Chapter 15 Title…', sections: [] },
      { id: 'chapter16', title: 'Chapter 16 Title…', sections: [] },
      { id: 'chapter17', title: 'Chapter 17 Title…', sections: [] },
    ],
  },
  {
    id: 'module8',
    title: 'Module 8 (Chapters 18–20)',
    chapters: [
      { id: 'chapter18', title: 'Chapter 18 Title…', sections: [] },
      { id: 'chapter19', title: 'Chapter 19 Title…', sections: [] },
      { id: 'chapter20', title: 'Chapter 20 Title…', sections: [] },
    ],
  },
  {
    id: 'module9',
    title: 'Module 9 (Chapters 21–24)',
    chapters: [
      { id: 'chapter21', title: 'Chapter 21 Title…', sections: [] },
      { id: 'chapter22', title: 'Chapter 22 Title…', sections: [] },
      { id: 'chapter23', title: 'Chapter 23 Title…', sections: [] },
      { id: 'chapter24', title: 'Chapter 24 Title…', sections: [] },
    ],
  },
  {
    id: 'module10',
    title: 'Module 10 (Chapters 25–27)',
    chapters: [
      { id: 'chapter25', title: 'Chapter 25 Title…', sections: [] },
      { id: 'chapter26', title: 'Chapter 26 Title…', sections: [] },
      { id: 'chapter27', title: 'Chapter 27 Title…', sections: [] },
    ],
  },
  {
    id: 'module11',
    title: 'Module 11 (Chapters 28–30)',
    chapters: [
      { id: 'chapter28', title: 'Chapter 28 Title…', sections: [] },
      { id: 'chapter29', title: 'Chapter 29 Title…', sections: [] },
      { id: 'chapter30', title: 'Chapter 30 Title…', sections: [] },
    ],
  },
  {
    id: 'module12',
    title: 'Module 12 (Chapters 31–33)',
    chapters: [
      { id: 'chapter31', title: 'Chapter 31 Title…', sections: [] },
      { id: 'chapter32', title: 'Chapter 32 Title…', sections: [] },
      { id: 'chapter33', title: 'Chapter 33 Title…', sections: [] },
    ],
  },
  {
    id: 'module13',
    title: 'Module 13 (Chapters 34–37)',
    chapters: [
      { id: 'chapter34', title: 'Chapter 34 Title…', sections: [] },
      { id: 'chapter35', title: 'Chapter 35 Title…', sections: [] },
      { id: 'chapter36', title: 'Chapter 36 Title…', sections: [] },
      { id: 'chapter37', title: 'Chapter 37 Title…', sections: [] },
    ],
  },
  {
    id: 'module14',
    title: 'Module 14 (Chapters 38–41)',
    chapters: [
      { id: 'chapter38', title: 'Chapter 38 Title…', sections: [] },
      { id: 'chapter39', title: 'Chapter 39 Title…', sections: [] },
      { id: 'chapter40', title: 'Chapter 40 Title…', sections: [] },
      { id: 'chapter41', title: 'Chapter 41 Title…', sections: [] },
    ],
  },
];

export default quickRefModules;
