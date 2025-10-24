import { Talent } from '@/types';

export default function TalentCard({ talent }: { talent: Talent }) {
  return (
    <div className="card">
      <div className="font-semibold">{talent.name}</div>
      <div className="text-xs text-zinc-400 mb-2">{talent.pillar} • {talent.type} • EV {talent.tierEV}{talent.spCost?` • SP ${talent.spCost}`:''}{talent.usesPerEncounter?` • Uses ${talent.usesPerEncounter}/enc`:''}</div>
      <p className="text-sm">{talent.description}</p>
      {talent.tags?.length ? <div className="mt-2 text-xs text-zinc-400">{talent.tags.join(' • ')}</div> : null}
    </div>
  );
}
