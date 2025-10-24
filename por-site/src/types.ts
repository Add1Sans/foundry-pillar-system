export type Pillar = 'Vigor' | 'Grace' | 'Instinct' | 'Theory' | 'Presence';

export interface Talent {
  id: string;
  name: string;
  pillar: Pillar;
  tierEV: number;
  type: 'Passive' | 'Active' | 'Reaction' | 'AoE' | 'Ultimate';
  spCost?: number;
  usesPerEncounter?: number;
  description: string;
  tags?: string[];
  prerequisites?: string[];
}

export interface Spell {
  id: string;
  name: string;
  school: 'Elemental' | 'Illusion' | 'Mental' | 'Support' | 'Control';
  tierEV: number;
  spCost: number;
  range: string;
  area?: string;
  scaling: Pillar[];
  effects: string;
  notes?: string;
  tags?: string[];
}

export interface Archetype {
  id: string;
  name: string;
  primary: Pillar;
  identity: string;
  startingTalents: string[];
  signatureMechanics: string[];
}

export interface Character {
  id: string;
  name: string;
  level: number;
  pillars: Record<Pillar, number>;
  talents: string[];
  spells: string[];
  gear: { weapons: string[]; armor?: string; items?: string[]; };
  derived: {
    hp: number; sp: number; evasion: number; critPct: number; accuracyMod: number; armorPct: number; magicDefense: number;
  };
  notes?: string;
  createdAt: string;
  updatedAt: string;
}
