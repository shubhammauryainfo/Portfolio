"use client";

import { useEffect, useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";

export function BackToTop() {
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full border-4 border-[color:var(--ink-strong)] bg-[color:var(--accent-main)] text-lg text-[color:var(--ink-strong)] shadow-[4px_4px_0_var(--shadow-accent)] transition hover:-translate-y-1 hover:shadow-[6px_6px_0_var(--shadow-accent)]"
    >
      <FiArrowUpRight className="-rotate-45" />
    </button>
  );
}
