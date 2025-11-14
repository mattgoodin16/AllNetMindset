export default function AthletesPage() {
  return (
    <div className="section-shell">
      <p className="section-eyebrow">For athletes and families</p>
      <h1 className="section-title mt-2">
        For teen athletes who want more from their sport, not just their stats.
      </h1>
      <p className="section-subtitle">
        All Net Mindset is for athletes and families who care about growth, character,
        and the full experience of sports, not only trophies or rankings.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-[1.4fr,1fr] text-sm text-slate-200">
        <div className="grid gap-5 sm:grid-cols-2">
          <section>
            <h2 className="text-sm font-semibold text-slate-100">
              Signs mindset training could help
            </h2>
            <ul className="mt-3 space-y-2">
              <li>Plays great in practice, tight in games</li>
              <li>Hard on themselves after mistakes</li>
              <li>Adjusting to a new team or level</li>
              <li>Feeling pressure from recruiting or expectations</li>
            </ul>
          </section>
          <section>
            <h2 className="text-sm font-semibold text-slate-100">
              What athletes build
            </h2>
            <ul className="mt-3 space-y-2">
              <li>Tools for nerves and pressure</li>
              <li>Language to talk about their experience</li>
              <li>Ownership of their own growth</li>
              <li>A mindset they can use long after sports</li>
            </ul>
          </section>
        </div>

        <aside className="rounded-xl2 border border-neonBlue/50 bg-slate-950/80 p-5 shadow-card">
          <p className="text-[0.7rem] uppercase tracking-[0.2em] text-slate-400">
            Sample session flow
          </p>
          <ol className="mt-3 space-y-3 text-sm text-slate-200">
            <li>
              <span className="font-semibold text-neonBlueSoft">01 · Check in</span>
              <p className="mt-1 text-xs text-slate-300">
                Quick review of the week, games, or training moments.
              </p>
            </li>
            <li>
              <span className="font-semibold text-neonBlueSoft">02 · Breakdown</span>
              <p className="mt-1 text-xs text-slate-300">
                Look at a specific situation and what was happening mentally.
              </p>
            </li>
            <li>
              <span className="font-semibold text-neonBlueSoft">03 · Tools</span>
              <p className="mt-1 text-xs text-slate-300">
                Introduce or refine a mindset tool for that scenario.
              </p>
            </li>
            <li>
              <span className="font-semibold text-neonBlueSoft">04 · Game plan</span>
              <p className="mt-1 text-xs text-slate-300">
                Decide how to test it in upcoming practices or games.
              </p>
            </li>
          </ol>
        </aside>
      </div>
    </div>
  );
}
