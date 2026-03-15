"use client";

import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

type NavLink = {
  href: string;
  label: string;
};

const links: NavLink[] = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" }
];

export function SiteHeader() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/8 bg-ink/65 backdrop-blur-xl">
      <div className="section-shell flex items-center justify-between py-4">
        <a href="#hero" className="text-xl text-sand" style={{ fontFamily: "var(--font-logo)" }}>
          {"<"}Shubham Maurya{"/>"}
        </a>
        <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          aria-label="Toggle navigation"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white md:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>
      {open ? (
        <div className="border-t border-white/8 bg-ink/95 md:hidden">
          <nav className="section-shell flex flex-col gap-3 py-4 text-sm text-white/70">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-2xl border border-white/8 bg-white/5 px-4 py-3 transition hover:text-white"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
