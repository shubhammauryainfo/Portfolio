"use client";

import { useEffect } from "react";
import type { ReactNode } from "react";
import AOS from "aos";

type AosProviderProps = {
  children: ReactNode;
};

export function AosProvider({ children }: AosProviderProps) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 60
    });
  }, []);

  return children;
}
