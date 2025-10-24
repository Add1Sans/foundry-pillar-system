'use client';

import spells from '@/data/spells.json';
import SpellCard from '@/components/SpellCard';
import { useState } from 'react';

export default function SpellsPage() {
  const [school, setSchool] = useState('All');
  const filtered = spells.filter(s => school === 'All' || s.school === school);
  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        {['All','Elemental','Illusion','Mental','Support','Control'].map(s => (
          <button key={s}
            className={`btn ${school===s?'bg-accent text-white':''}`}
            onClick={()=>setSchool(s)}>{s}</button>
        ))}
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map(s => <SpellCard key={s.id} spell={s}/>)}
      </div>
    </div>
  );
}
