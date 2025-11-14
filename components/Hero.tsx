import DashboardCard from "./HeroDashboard";

export default function Hero() {
  return (
    <div className="section-shell relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-0 h-80 w-80 rounded-full bg-neonBlue/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-neonOrange/20 blur-3xl" />
      </div>

      <div className="relative grid items-center gap-10 md:grid-cols-[1.4fr,1fr]">
        <div>
          <p className="section-eyebrow">Positive Performance Mindset Training</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Empowering teen athletes
            <span className="neon-gradient-text mt-1 block">
              to take their best shot.
            </span>
          </h1>
          <p className="mt-4 max-w-xl text-sm text-slate-200 sm:text-base">
            All Net Mindset helps teen athletes build calm confidence, mental toughness,
            and game ready focus so they can maximize their athletic experience through
            proven mindset training.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/contact"
              className="inline-flex items-center rounded-full bg-gradient-to-r from-neonBlue to-neonOrange px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-glow"
            >
              Book a mindset call
            </a>
            <a
              href="https://www.instagram.com/allnetmindsettraining"
              target="_blank"
              className="inline-flex items-center rounded-full border border-slate-600 bg-slate-900/70 px-5 py-2.5 text-sm text-slate-100"
            >
              Follow @allnetmindsettraining
            </a>
          </div>

          <dl className="mt-6 grid gap-4 text-xs text-slate-300 sm:grid-cols-3">
            <div>
              <dt className="text-[0.65rem] uppercase tracking-[0.2em] text-slate-400">
                Coach
              </dt>
              <dd className="mt-1 text-sm text-slate-100">Tony Butler</dd>
            </div>
            <div>
              <dt className="text-[0.65rem] uppercase tracking-[0.2em] text-slate-400">
                Focus
              </dt>
              <dd className="mt-1 text-sm text-slate-100">Teen athletes 13 to 19</dd>
            </div>
            <div>
              <dt className="text-[0.65rem] uppercase tracking-[0.2em] text-slate-400">
                Format
              </dt>
              <dd className="mt-1 text-sm text-slate-100">1 to 1 & small group sessions</dd>
            </div>
          </dl>
        </div>

        <div className="relative">
          <DashboardCard />
        </div>
      </div>
    </div>
  );
}
