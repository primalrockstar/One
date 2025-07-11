// data/flashcards.ts

export interface Flashcard {
  id: string;
  category: string;
  front: string;
  back: string;
  tags?: string[];
}

const flashcards: Flashcard[] = [
  {
    id: 'card-0001',
    category: 'Cardiovascular System',
    front: 'What is the normal adult heart rate range?',
    back: '60–100 bpm',
    tags: ['vitals', 'assessment'],
  },
  {
    id: 'card-0002',
    category: 'Respiratory System',
    front: 'List the airway pathway from nose/mouth to alveoli.',
    back: 'Pharynx → Larynx → Trachea → Bronchi → Alveoli',
    tags: ['anatomy'],
  },
  // …more cards…
];

export default flashcards;
