export default function RulesPage() {
  return (
    <div className="prose prose-invert max-w-none">
      <h1 className="h1">Core Rules</h1>
      <h2 className="h2 mt-6">Resolution</h2>
      <ul>
        <li>Attacks: roll <b>1d100</b> under your hit threshold to hit.</li>
        <li>Criticals: separate 1d100 under weapon’s secondary Pillar to crit (×2 final damage).</li>
        <li>Defense modifies <i>damage range</i>, not crit outcomes.</li>
      </ul>
      <h2 className="h2 mt-6">Derived</h2>
      <pre className="bg-zinc-900 p-3 rounded-lg text-xs overflow-auto">
{`HP = Vigor × 2
SP = (Grace + Instinct) × 1.5
Evasion = (Grace + Instinct) / 5
Crit % = Grace / 10
Accuracy Mod = (Grace + Theory) / 20
Armor % = Vigor / 10
Magic Defense = Theory / 10`}
      </pre>
      <h2 className="h2 mt-6">Defense</h2>
      <pre className="bg-zinc-900 p-3 rounded-lg text-xs overflow-auto">
{`Physical: DamageTaken = BaseDamage × (100 - (Defense × 0.5)) / 100
Magic:    MagicTaken  = SpellPower × (100 - (Theory × 0.4)) / 100`}
      </pre>
    </div>
  );
}
