const items = [
  {
    title: "Calm focus",
    body:
      "Build pre game and in game routines that help athletes feel grounded, present, " +
      "and ready to compete without overthinking."
  },
  {
    title: "Real confidence",
    body:
      "Shift from hoping to playing with earned belief by tracking progress, stacking " +
      "small wins, and owning strengths."
  },
  {
    title: "Reset skills",
    body:
      "Learn simple mental reset tools to bounce back from mistakes, bad calls, " +
      "or off nights without spiraling."
  },
  {
    title: "Healthy perspective",
    body:
      "Keep sports in a healthy place so athletes can push hard, compete well, " +
      "and still enjoy being a teenager."
  }
];

export default function TrainingPage() {
  return (
    <div className="section-shell">
      <p className="section-eyebrow">Training focus</p>
      <h1 className="section-title mt-2">
        Four cores of Positive Performance Mindset Training.
      </h1>
      <p className="section-subtitle">
        Every athlete is different, but these four areas show up again and again in
        high performing teens. All Net Mindset builds them on purpose with clear language,
        simple tools, and repetition.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-4 text-sm text-slate-200">
        {items.map((item) => (
          <article
            key={item.title}
            className="rounded-xl2 border border-slate-700 bg-slate-950/80 p-4 shadow-card"
          >
            <h2 className="text-sm font-semibold text-slate-100">{item.title}</h2>
            <p className="mt-3 text-xs sm:text-sm text-slate-200">{item.body}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
