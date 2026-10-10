"use client";

import type { RefObject } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";

/**
 * Wspólna logika procesu: jeden aktywny etap (`data-on` na `[data-step]`) i jego wideo (`[data-step-video]`).
 *  - "click": etap przełącza kliknięcie przycisku w nim (strona główna),
 *  - "scroll": etap przełącza się, gdy dojedzie do 55 % wysokości ekranu (/jak-pracuje); `[data-counter]` pokazuje numer.
 * Wideo gra tylko, gdy sekcja jest w widoku.
 */
export function useProcessSteps(root: RefObject<HTMLElement | null>, mode: "click" | "scroll", count: number) {
  useGSAP(
    () => {
      const items = gsap.utils.toArray<HTMLElement>("[data-step]");
      const vids = gsap.utils.toArray<HTMLVideoElement>("[data-step-video]");
      const counter = root.current?.querySelector<HTMLElement>("[data-counter]");
      let current = -1;
      const setStep = (i: number) => {
        if (i === current) return;
        current = i;
        items.forEach((s, j) => {
          s.toggleAttribute("data-on", j === i);
          s.querySelector("button")?.setAttribute("aria-expanded", String(j === i));
        });
        vids.forEach((v, j) => {
          v.toggleAttribute("data-on", j === i);
          if (j === i) v.play().catch(() => {}); else v.pause();
        });
        if (counter) counter.textContent = String(i + 1).padStart(2, "0");
      };
      setStep(0);

      const offs: (() => void)[] = [];
      if (mode === "click") {
        items.forEach((s, i) => {
          const btn = s.querySelector("button");
          const on = () => setStep(i);
          btn?.addEventListener("click", on);
          offs.push(() => btn?.removeEventListener("click", on));
        });
      } else {
        items.forEach((s, i) =>
          ScrollTrigger.create({ trigger: s, start: "top 55%", end: "bottom 55%", onToggle: (self) => self.isActive && setStep(i) }),
        );
      }

      ScrollTrigger.create({
        trigger: root.current, start: "top 80%", end: "bottom top",
        onToggle: (self) => {
          const v = vids.find((x) => x.hasAttribute("data-on"));
          if (!v) return;
          if (self.isActive) v.play().catch(() => {}); else v.pause();
        },
      });

      return () => offs.forEach((off) => off());
    },
    { scope: root, dependencies: [mode, count] },
  );
}
