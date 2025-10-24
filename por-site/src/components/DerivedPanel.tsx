import { Pillar } from '@/types';
import { deriveStats } from '@/lib/formulas';

export default function DerivedPanel({ pillars }:{ pillars: Record<Pillar,number> }) {
  const d = deriveStats(pillars);
  return (
    <div className="grid grid-cols-2 gap-2 text-sm">
      <div className="card"><div>HP</div><div className="font-bold">{d.hp}</div></div>
      <div className="card"><div>SP</div><div className="font-bold">{d.sp}</div></div>
      <div className="card"><div>Evasion</div><div className="font-bold">{d.evasion}</div></div>
      <div className="card"><div>Crit %</div><div className="font-bold">{d.critPct}</div></div>
      <div className="card"><div>Accuracy</div><div className="font-bold">{d.accuracyMod}</div></div>
      <div className="card"><div>Armor %</div><div className="font-bold">{d.armorPct}</div></div>
      <div className="card"><div>Magic DEF</div><div className="font-bold">{d.magicDefense}</div></div>
    </div>
  );
}
