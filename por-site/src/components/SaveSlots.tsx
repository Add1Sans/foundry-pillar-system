'use client';
import { loadAll, save, remove } from '@/lib/saves';
import { Character } from '@/types';
import { useEffect, useState } from 'react';

export default function SaveSlots() {
  const [chars, setChars] = useState<Character[]>([]);
  useEffect(()=>{ setChars(loadAll()); }, []);
  return (
    <div className="card">
      <div className="font-semibold mb-2">Saved Slots</div>
      {chars.length===0 ? <div className="text-zinc-500 text-sm">No saved characters</div> :
        <ul className="text-sm space-y-2">
          {chars.map(c=>(
            <li key={c.id} className="flex justify-between items-center">
              <span>{c.name}</span>
              <span className="text-xs text-zinc-500">HP {c.derived.hp} • SP {c.derived.sp}</span>
            </li>
          ))}
        </ul>
      }
    </div>
  );
}
