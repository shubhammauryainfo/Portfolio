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
    <header className="sticky top-0 z-40 border-b-4 border-[color:var(--ink-strong)] bg-[color:var(--header-bg)]/95 backdrop-blur-md">
      <div className="section-shell flex items-center justify-between py-4">
        <a
          href="#hero"
          className="text-xl text-[color:var(--text-main)] drop-shadow-[2px_2px_0_var(--shadow-accent)] sm:text-2xl"
          style={{ fontFamily: "var(--font-logo)" }}
        >
          {"<"}Shubham Maurya {"/>"}
        </a>
        <nav className="hidden items-center gap-3 text-sm md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full border-4 border-transparent px-4 py-2 font-bold uppercase tracking-[0.18em] text-[color:var(--text-soft)] transition hover:border-[color:var(--ink-strong)] hover:bg-[color:var(--accent-main)] hover:text-[color:var(--ink-strong)]"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          aria-label="Toggle navigation"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border-4 border-[color:var(--ink-strong)] bg-[color:var(--panel-main)] text-[color:var(--text-main)] shadow-[4px_4px_0_var(--shadow-accent)] md:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>
      {open ? (
        <div className="border-t-4 border-[color:var(--ink-strong)] bg-[color:var(--panel-main)] md:hidden">
          <nav className="section-shell flex flex-col gap-3 py-4 text-sm">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-[20px] border-4 border-[color:var(--ink-strong)] bg-[color:var(--card-alt)] px-4 py-3 font-bold uppercase tracking-[0.14em] text-[color:var(--text-main)] shadow-[4px_4px_0_var(--shadow-accent)] transition hover:-translate-y-1"
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
