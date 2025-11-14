import Hero from "../components/Hero";

export default function HomePage() {
  return (
    <div>
      <Hero />

      <section className="section-shell">
        <div className="max-w-3xl">
          <p className="section-eyebrow">Positive Performance Mindset Training</p>
          <h2 className="section-title mt-2">
            Positive Performance Mindset Training for teen athletes.
          </h2>
          <p className="section-subtitle">
            All Net Mindset helps teen athletes build calm confidence, mental toughness,
            and game ready focus so they can maximize their athletic experience through
            practical mental training, guided by Coach Tony Butler.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3 text-sm text-slate-200">
          <div className="rounded-xl2 border border-slate-700 bg-slate-950/80 p-5 shadow-card">
            <h3 className="text-sm font-semibold text-slate-100">
              Designed for teen athletes
            </h3>
            <p className="mt-3 text-sm text-slate-200">
              Sessions feel like a conversation, not a lecture. Teens get a space to talk
              honestly about pressure, expectations, and what they are really feeling.
            </p>
          </div>
          <div className="rounded-xl2 border border-slate-700 bg-slate-950/80 p-5 shadow-card">
            <h3 className="text-sm font-semibold text-slate-100">
              Simple tools they actually use
            </h3>
            <p className="mt-3 text-sm text-slate-200">
              Instead of theory, athletes leave each session with one or two simple mental
              tools they can try in practices, games, and everyday life.
            </p>
          </div>
          <div className="rounded-xl2 border border-slate-700 bg-slate-950/80 p-5 shadow-card">
            <h3 className="text-sm font-semibold text-slate-100">
              A calm, steady voice for families
            </h3>
            <p className="mt-3 text-sm text-slate-200">
              Parents and guardians get a partner who understands the world of youth sports
              and keeps the big picture in mind.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
