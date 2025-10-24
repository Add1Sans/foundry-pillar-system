'use client';
import { useId } from 'react';

export default function PillarSlider({
  name, value, onChange, min = 30, max = 100
}: { name: string; value: number; onChange: (v:number)=>void; min?:number; max?:number; }) {
  const id = useId();
  return (
    <div className="space-y-1">
      <label htmlFor={id} className="flex justify-between">
        <span className="font-semibold">{name}</span>
        <span>{value}</span>
      </label>
      <input id={id} type="range" min={min} max={max} value={value}
        onChange={(e)=>onChange(parseInt(e.target.value))}
        className="w-full accent-accent" />
    </div>
  );
}
