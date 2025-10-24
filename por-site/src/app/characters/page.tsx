'use client';

import { loadAll, remove } from '@/lib/saves';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function CharactersPage() {
  const [chars, setChars] = useState(loadAll());
  useEffect(()=>setChars(loadAll()), []);

  return (
    <div className="space-y-3">
      <h1 className="h1">My Characters</h1>
      {chars.length===0 && <p className="text-zinc-400">No saved characters yet. Create one in the <a href="/builder">Builder</a>.</p>}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
        {chars.map(c=>(
          <div key={c.id} className="card">
            <div className="flex justify-between">
              <div>
                <div className="font-bold">{c.name}</div>
                <div className="text-xs text-zinc-400">Lvl {c.level}</div>
              </div>
              <div className="text-right text-xs">
                <div>HP {c.derived.hp}</div>
                <div>SP {c.derived.sp}</div>
              </div>
            </div>
            <div className="mt-3 flex gap-2">
              <Link className="btn" href={`/characters/${c.id}`}>Open</Link>
              <button className="btn" onClick={()=>{ remove(c.id); setChars(loadAll()); }}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
