"use client";

import { useEffect } from "react";
import AOS from "aos";

export function AosProvider() {
  useEffect(() => {
    if (window.innerWidth < 768) {
      return;
    }

    AOS.init({
      duration: 500,
      easing: "ease-out",
      once: true,
      offset: 24
    });
  }, []);

  return null;
}
