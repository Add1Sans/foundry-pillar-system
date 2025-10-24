import data from '@/data/archetypes.json';
import ArchetypeCard from '@/components/ArchetypeCard';

export default function ArchetypesPage() {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      {data.map(a => <ArchetypeCard key={a.id} archetype={a}/>)}
    </div>
  );
}
