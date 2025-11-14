"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/training", label: "Training" },
    { href: "/athletes", label: "For Athletes" },
    { href: "/contact", label: "Contact" }
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-sky-500/40 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-10 w-10 overflow-hidden rounded-full shadow-glow">
            <Image
              src="/logo.png"
              alt="All Net Mindset logo"
              fill
              sizes="40px"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-semibold tracking-[0.22em] uppercase text-slate-300">
              All Net Mindset
            </span>
            <span className="text-[0.7rem] text-slate-400">
              Positive Performance Mindset Training
            </span>
          </div>
        </Link>

        <nav className="ml-auto hidden items-center gap-6 text-[0.7rem] tracking-[0.18em] uppercase text-slate-400 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-neonBlueSoft"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <a
          href="tel:14156061066"
          className="hidden md:inline-flex items-center rounded-full border border-neonBlue/70 bg-slate-900/60 px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-slate-50 shadow-glow"
        >
          Call 415-606-1066
        </a>

        <button
          className="ml-auto inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 md:hidden"
          aria-label="Toggle navigation"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="h-0.5 w-4 rounded-full bg-slate-100" />
        </button>

        {open && (
          <nav className="absolute left-0 right-0 top-full border-b border-slate-800 bg-slate-950/95 px-4 py-3 text-[0.76rem] tracking-[0.2em] uppercase text-slate-300 md:hidden">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a href="tel:14156061066" onClick={() => setOpen(false)}>
                Call 415-606-1066
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
