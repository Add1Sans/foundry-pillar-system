'use client';

import { useMemo, useState } from 'react';
import { Pillar, Character } from '@/types';
import PillarSlider from '@/components/PillarSlider';
import DerivedPanel from '@/components/DerivedPanel';
import talents from '@/data/talents.json';
import spells from '@/data/spells.json';
import { deriveStats } from '@/lib/formulas';
import { save } from '@/lib/saves';

const PILLARS: Pillar[] = ['Vigor','Grace','Instinct','Theory','Presence'];

export default function BuilderPage() {
  const [name, setName] = useState('New Hero');
  const [pillars, setPillars] = useState<Record<Pillar, number>>({
    Vigor: 60, Grace: 60, Instinct: 60, Theory: 60, Presence: 60
  });
  const total = useMemo(()=>PILLARS.reduce((s,p)=>s+pillars[p],0),[pillars]);
  const remaining = 300 - total;

  const [selectedTalents, setSelectedTalents] = useState<string[]>([]);
  const [selectedSpells, setSelectedSpells] = useState<string[]>([]);
  const derived = deriveStats(pillars);

  function update(p: Pillar, v: number) {
    setPillars(prev => ({...prev, [p]: v}));
  }

  function toggle(list: string[], id: string) {
    return list.includes(id) ? list.filter(x=>x!==id) : [...list, id];
  }

  function handleSave() {
    const char: Character = {
      id: crypto.randomUUID(),
      name,
      level: 1,
      pillars,
      talents: selectedTalents,
      spells: selectedSpells,
      gear: { weapons: [], items: [] },
      derived,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    save(char);
    alert('Character saved to local slots!');
  }

  return (
    <div className="space-y-6">
      <div className="card">
        <div className="flex gap-3 items-center">
          <input className="input" value={name} onChange={e=>setName(e.target.value)} />
          <div className={`px-3 py-2 rounded-lg text-sm ${remaining===0?'bg-green-900':'bg-zinc-800'}`}>
            Points: {total} / 300 {remaining!==0 && <span>({remaining > 0 ? `+${remaining}` : `${remaining}`})</span>}
          </div>
          <button className="btn" onClick={handleSave}>Save Slot</button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="card space-y-3">
          <h2 className="h2">Pillars</h2>
          {PILLARS.map(p=>(
            <PillarSlider key={p} name={p} value={pillars[p]} onChange={(v)=>update(p, v)} />
          ))}
        </div>
        <div className="card">
          <h2 className="h2 mb-2">Derived</h2>
          <DerivedPanel pillars={pillars}/>
        </div>
      </div>

      <div className="grid2">
        <div className="card">
          <h3 className="h3 mb-2">Talents</h3>
          <div className="grid md:grid-cols-2 gap-3">
            {talents.map(t=>(
              <label key={t.id} className="flex items-start gap-2">
                <input
                  type="checkbox"
                  checked={selectedTalents.includes(t.id)}
                  onChange={()=>setSelectedTalents(prev=>toggle(prev, t.id))}
                />
                <div>
                  <div className="font-semibold">{t.name} <span className="text-xs text-zinc-400">[{t.pillar}]</span></div>
                  <div className="text-xs text-zinc-400">{t.type} • EV {t.tierEV}{t.spCost ? ` • SP ${t.spCost}` : ''}</div>
                </div>
              </label>
            ))}
          </div>
        </div>

        <div className="card">
          <h3 className="h3 mb-2">Spells</h3>
          <div className="grid md:grid-cols-2 gap-3">
            {spells.map(s=>(
              <label key={s.id} className="flex items-start gap-2">
                <input
                  type="checkbox"
                  checked={selectedSpells.includes(s.id)}
                  onChange={()=>setSelectedSpells(prev=>toggle(prev, s.id))}
                />
                <div>
                  <div className="font-semibold">{s.name} <span className="text-xs text-zinc-400">[{s.school}]</span></div>
                  <div className="text-xs text-zinc-400">EV {s.tierEV} • SP {s.spCost} {s.area ? `• ${s.area}`:''}</div>
                </div>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
