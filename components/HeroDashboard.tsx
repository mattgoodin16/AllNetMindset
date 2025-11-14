"use client";

import { useEffect, useState } from "react";

const metrics = [
  { label: "Pre game focus", tag: "locked in", start: 0.4, end: 0.82 },
  { label: "Confidence under pressure", tag: "climbing", start: 0.35, end: 0.76 },
  { label: "Reset after mistakes", tag: "elite", start: 0.6, end: 0.91 }
];

export default function DashboardCard() {
  const [progress, setProgress] = useState(metrics.map((m) => m.start));

  useEffect(() => {
    const id = setTimeout(() => {
      setProgress(metrics.map((m) => m.end));
    }, 300);
    return () => clearTimeout(id);
  }, []);

  return (
    <div className="relative rounded-xl2 border border-neonBlue/50 bg-slate-950/80 p-4 shadow-card backdrop-blur-xl">
      <div className="flex items-center justify-between">
        <span className="inline-flex items-center rounded-full border border-neonBlue/80 bg-slate-900/80 px-3 py-1 text-[0.7rem] uppercase tracking-[0.18em] text-slate-100">
          Live mindset session
        </span>
        <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
      </div>
      <div className="mt-4 space-y-3">
        {metrics.map((m, idx) => (
          <div key={m.label}>
            <div className="flex items-center justify-between text-xs text-slate-200">
              <span>{m.label}</span>
              <span className="text-[0.65rem] uppercase tracking-[0.18em] text-slate-400">
                {m.tag}
              </span>
            </div>
            <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-slate-900">
              <div
                className="h-full rounded-full bg-gradient-to-r from-neonBlueSoft to-neonOrange transition-all duration-700 ease-out"
                style={{ width: `${progress[idx] * 100}%` }}
              />
            </div>
            <span className="mt-1 block text-[0.7rem] text-slate-400">
              {Math.round(progress[idx] * 100)} percent capacity
            </span>
          </div>
        ))}
      </div>
      <p className="mt-3 text-[0.75rem] text-slate-300">
        Session by session, teen athletes upgrade their mental game and learn tools they can
        take into every practice, game, and classroom.
      </p>
    </div>
  );
}
