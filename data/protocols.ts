// data/protocols.ts

import { CertLevel } from './toolRegistry';

export interface ProtocolStep {
  order: number;
  instruction: string;
}

export interface ProtocolEntry {
  id: string;
  title: string;
  description?: string;
  category: string;
  scope: CertLevel[];
  steps: ProtocolStep[];
}

const protocols: ProtocolEntry[] = [
  {
    id: 'protocol-cardiac-arrest',
    title: 'Cardiac Arrest Management',
    category: 'Cardiac',
    scope: ['EMT', 'AEMT', 'Paramedic'],
    description: 'ACLS-based approach for adult cardiac arrest.',
    steps: [
      { order: 1, instruction: 'Confirm unresponsiveness and call for help.' },
      { order: 2, instruction: 'Begin high-quality CPR at 30:2 ratio.' },
      // …more steps…
    ],
  },
  // …other protocols…
];

export default protocols;
