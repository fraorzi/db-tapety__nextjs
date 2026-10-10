"use client";

import { gsap, useGSAP } from "@/lib/gsap";

/** Mozaika realizacji: pasy nakładki zjeżdżają w bok kafel po kaflu, potem wjeżdżają etykiety; zdjęcia z lekką paralaksą. */
export function WorkMotion() {
  useGSAP(() => {
    gsap.utils.toArray<HTMLElement>("[data-tile]").forEach((t) => {
      const img = t.querySelector("img");
      if (img) {
        gsap.fromTo(img, { scale: 1.14, yPercent: -3 }, {
          scale: 1.04, yPercent: 3, ease: "none",
          scrollTrigger: { trigger: t, start: "top bottom", end: "bottom top", scrub: 0.6 },
        });
      }
    });

    gsap.timeline({ scrollTrigger: { trigger: "[data-mosaic]", start: "top 80%", once: true } })
      .fromTo("[data-tile-cover]", { scaleX: 1 }, { scaleX: 0, duration: 1.1, ease: "expo.inOut", stagger: 0.14 })
      .from("[data-tile-label]", { xPercent: -105, duration: 0.9, ease: "expo.out", stagger: 0.1 }, "-=0.35");
  });

  return null;
}
