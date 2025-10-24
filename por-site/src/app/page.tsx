export default function HomePage() {
  return (
    <div className="grid2">
      <section className="card">
        <h1 className="h1 mb-2">Welcome to Pillars of Resolve</h1>
        <p className="text-zinc-300">
          A d100 TTRPG built on five Pillars: Vigor, Grace, Instinct, Theory, Presence.
          Explore the rules, browse talents and spells, then build a character with the wizard.
        </p>
      </section>
      <section className="card">
        <h2 className="h2 mb-2">Quick Start</h2>
        <ol className="list-decimal pl-6 space-y-1 text-zinc-300">
          <li>Skim <a href="/rules">Rules</a> & formulas.</li>
          <li>Browse <a href="/talents">Talents</a> & <a href="/spells">Spells</a>.</li>
          <li>Open the <a href="/builder">Builder</a>, then save to <a href="/characters">My Characters</a>.</li>
        </ol>
      </section>
    </div>
  );
}
