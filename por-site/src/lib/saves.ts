import { Character } from '@/types';
const KEY = 'por:characters:v1';

export function loadAll(): Character[] {
  if (typeof window === 'undefined') return [];
  try { return JSON.parse(localStorage.getItem(KEY) || '[]'); }
  catch { return []; }
}

export function save(char: Character) {
  if (typeof window === 'undefined') return;
  const all = loadAll();
  const idx = all.findIndex(c => c.id === char.id);
  if (idx >= 0) all[idx] = char; else all.push(char);
  localStorage.setItem(KEY, JSON.stringify(all));
}

export function remove(id: string) {
  if (typeof window === 'undefined') return;
  const all = loadAll().filter(c => c.id !== id);
  localStorage.setItem(KEY, JSON.stringify(all));
}
