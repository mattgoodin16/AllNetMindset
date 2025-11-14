export default function AboutPage() {
  return (
    <div className="section-shell">
      <p className="section-eyebrow">About All Net Mindset</p>
      <h1 className="section-title mt-2">Led by Coach Tony Butler.</h1>

      <p className="section-subtitle">
        All Net Mindset was created to give teen athletes a place to work on the part of
        their game that most programs skip: the mind. The goal is simple. Help athletes
        compete with more confidence, handle pressure, and enjoy the sport they work so
        hard at.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2 text-sm text-slate-200">
        <section className="rounded-xl2 border border-slate-700 bg-slate-950/80 p-5 shadow-card">
          <h2 className="text-sm font-semibold text-slate-100 mb-3">
            A calm, clear coaching style
          </h2>
          <p>
            Sessions with Coach Tony feel like a structured conversation. Athletes talk
            through what is really happening in practice, games, and daily life. Together,
            you break down key moments, then add mental tools and routines they can use
            right away.
          </p>
        </section>

        <section className="rounded-xl2 border border-slate-700 bg-slate-950/80 p-5 shadow-card">
          <h2 className="text-sm font-semibold text-slate-100 mb-3">
            Built around each athlete
          </h2>
          <p>
            No two athletes are the same. Sessions are shaped around their sport, role,
            goals, and schedule. The work is not about perfection. It is about progress,
            learning, and building skills they will use long after sports.
          </p>
        </section>
      </div>
    </div>
  );
}
