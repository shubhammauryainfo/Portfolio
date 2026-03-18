"use client";

import { useEffect } from "react";
import AOS from "aos";

export function AosProvider() {
  useEffect(() => {
    const aos = AOS as unknown as {
      init: (options: Record<string, unknown>) => void;
    };

    aos.init({
      duration: 650,
      easing: "ease-out-cubic",
      once: false,
      mirror: true,
      offset: 48
    });
  }, []);

  return null;
}
