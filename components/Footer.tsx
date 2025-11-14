export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-5 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-[0.7rem] font-semibold tracking-[0.22em] uppercase text-slate-500">
            All Net Mindset
          </p>
          <p className="text-slate-400">
            Positive Performance Mindset Training. Empowering teen athletes to take their best
            shot and maximize their athletic experience through mental training.
          </p>
        </div>
        <div className="space-y-1 text-right">
          <p>Coach Tony Butler</p>
          <p>Phone: 415 606 1066</p>
          <p>Email: coachtonybutler@gmail.com</p>
        </div>
      </div>
      <div className="border-t border-slate-800/80">
        <div className="mx-auto max-w-6xl px-4 py-3 text-[0.7rem] text-slate-500">
          © {new Date().getFullYear()} All Net Mindset. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
