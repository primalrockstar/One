// data/toolRegistry.ts

export type CertLevel = 'EMT' | 'AEMT' | 'Paramedic';

export type ToolType =
  | 'calculator'
  | 'quickRefModule'
  | 'protocol'
  | 'flashcards'
  | 'quiz';

export interface ToolEntry {
  id: string;
  type: ToolType;
  title: string;
  route: string;
  scope: CertLevel[];
  icon: string;
  description?: string;
}

const toolRegistry: ToolEntry[] = [
  {
    id: 'calc-gcs',
    type: 'calculator',
    title: 'Glasgow Coma Scale',
    route: '/calculators/gcs',
    scope: ['EMT', 'AEMT', 'Paramedic'],
    icon: '🧠',
    description: 'Assess level of consciousness.',
  },
  {
    id: 'qr-module1',
    type: 'quickRefModule',
    title: 'Foundations of EMS',
    route: '/quick-ref/foundations',
    scope: ['EMT', 'AEMT', 'Paramedic'],
    icon: '🚑',
  },
  {
    id: 'flashcards-cardio',
    type: 'flashcards',
    title: 'Cardiovascular System',
    route: '/flashcards/cardio',
    scope: ['EMT', 'AEMT', 'Paramedic'],
    icon: '❤️',
  },
  // …other tools…
];

export default toolRegistry;
