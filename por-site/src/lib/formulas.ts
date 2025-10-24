import { Character } from '@/types';

export const hitThreshold = (attacker: Character) =>
  Math.max(1, Math.min(99, 50 + attacker.derived.accuracyMod));

export const critThreshold = (secondaryPillarScore: number) =>
  Math.max(1, Math.min(100, secondaryPillarScore));

export const applyPhysicalDefense = (baseDamage: number, defense: number) =>
  Math.round((baseDamage * (100 - (defense * 0.5))) / 100);

export const applyMagicDefense = (spellPower: number, theoryScore: number) =>
  Math.round((spellPower * (100 - (theoryScore * 0.4))) / 100);

export const deriveStats = (pillars: Character['pillars']) => {
  const hp = pillars.Vigor * 2;
  const sp = Math.round((pillars.Grace + pillars.Instinct) * 1.5);
  const evasion = Math.round((pillars.Grace + pillars.Instinct) / 5);
  const critPct = Math.round(pillars.Grace / 10);
  const accuracyMod = Math.round((pillars.Grace + pillars.Theory) / 20);
  const armorPct = Math.round(pillars.Vigor / 10);
  const magicDefense = Math.round(pillars.Theory / 10);
  return { hp, sp, evasion, critPct, accuracyMod, armorPct, magicDefense };
};
