'use client';

import talents from '@/data/talents.json';
import TalentCard from '@/components/TalentCard';
import { useState } from 'react';

export default function TalentsPage() {
  const [pillar, setPillar] = useState<string>('All');
  const filtered = talents.filter(t => pillar === 'All' || t.pillar === pillar);
  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        {['All','Vigor','Grace','Instinct','Theory','Presence'].map(p => (
          <button key={p}
            className={`btn ${pillar===p?'bg-accent text-white':''}`}
            onClick={()=>setPillar(p)}>{p}</button>
        ))}
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map(t => <TalentCard key={t.id} talent={t}/>)}
      </div>
    </div>
  );
}
