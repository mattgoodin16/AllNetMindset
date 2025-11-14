export default function ContactPage() {
  return (
    <div className="section-shell">
      <p className="section-eyebrow">Next step</p>
      <h1 className="section-title mt-2">Start with a simple conversation.</h1>
      <p className="section-subtitle">
        No pressure, no script. Just a short call with Coach Tony to see if mindset
        training is a good fit for your athlete and schedule.
      </p>

      <div className="mt-8 grid gap-8 md:grid-cols-2 items-start text-sm text-slate-200">
        <div>
          <div className="space-y-3">
            <div>
              <p className="text-[0.7rem] uppercase tracking-[0.2em] text-slate-400">
                Call or text
              </p>
              <a href="tel:14156061066" className="text-neonBlueSoft">
                415-606-1066
              </a>
            </div>
            <div>
              <p className="text-[0.7rem] uppercase tracking-[0.2em] text-slate-400">
                Email
              </p>
              <a
                href="mailto:coachtonybutler@gmail.com"
                className="text-neonBlueSoft"
              >
                coachtonybutler@gmail.com
              </a>
            </div>
            <div>
              <p className="text-[0.7rem] uppercase tracking-[0.2em] text-slate-400">
                Instagram
              </p>
              <a
                href="https://www.instagram.com/allnetmindsettraining"
                target="_blank"
                className="text-neonBlueSoft"
              >
                @allnetmindsettraining
              </a>
            </div>
          </div>

          <p className="mt-5 text-xs text-slate-400">
            Parents and guardians are encouraged to be part of the first conversation.
          </p>
        </div>

        <form className="rounded-xl2 border border-slate-700 bg-slate-950/80 p-5 shadow-card space-y-3 text-sm">
          <div className="grid gap-3 sm:grid-cols-2">
            <label className="space-y-1">
              <span>Your name</span>
              <input
                type="text"
                placeholder="Parent or guardian name"
                className="w-full rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 outline-none focus:border-neonBlueSoft"
              />
            </label>
            <label className="space-y-1">
              <span>Athlete&apos;s name</span>
              <input
                type="text"
                placeholder="Athlete&apos;s first name"
                className="w-full rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 outline-none focus:border-neonBlueSoft"
              />
            </label>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <label className="space-y-1">
              <span>Email</span>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 outline-none focus:border-neonBlueSoft"
              />
            </label>
            <label className="space-y-1">
              <span>Phone</span>
              <input
                type="tel"
                placeholder="Best number to reach you"
                className="w-full rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 outline-none focus:border-neonBlueSoft"
              />
            </label>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <label className="space-y-1">
              <span>Athlete&apos;s sport</span>
              <input
                type="text"
                placeholder="Basketball, soccer, etc."
                className="w-full rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 outline-none focus:border-neonBlueSoft"
              />
            </label>
            <label className="space-y-1">
              <span>Approximate age</span>
              <input
                type="text"
                placeholder="e.g. 15"
                className="w-full rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 outline-none focus:border-neonBlueSoft"
              />
            </label>
          </div>

          <label className="space-y-1">
            <span>What would you like mindset training to help with?</span>
            <textarea
              rows={4}
              placeholder="Share a bit about your athlete&apos;s experience so far."
              className="w-full rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 outline-none focus:border-neonBlueSoft"
            />
          </label>

          <button
            type="button"
            className="mt-2 w-full rounded-full bg-gradient-to-r from-neonBlue to-neonOrange px-4 py-2.5 text-sm font-semibold text-slate-950 shadow-glow"
          >
            Request a mindset call
          </button>

          <p className="text-xs text-slate-400">
            This form does not book a session automatically. Expect a personal follow up
            from Coach Tony to talk through next steps.
          </p>
        </form>
      </div>
    </div>
  );
}
