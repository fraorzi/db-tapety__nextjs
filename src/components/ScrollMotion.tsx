"use client";

import { usePathname } from "next/navigation";
import { gsap, useGSAP } from "@/lib/gsap";

/**
 * Jedyna animacja scrollowa współdzielona przez strony: figura z `data-reveal="clip"`
 * odsłania się raz od góry, a obraz w środku ma lekką paralaksę.
 * Tekst nie animuje się przy scrollu — po prostu jest.
 */
export function ScrollMotion() {
  const pathname = usePathname();

  useGSAP(
    () => {
      gsap.utils.toArray<HTMLElement>('[data-reveal="clip"]').forEach((fig) => {
        const box = fig.querySelector<HTMLElement>(".media") ?? fig;
        const img = box.querySelector("img, video");
        gsap.fromTo(box, { clipPath: "inset(14% 0% 0% 0%)" }, {
          clipPath: "inset(0% 0% 0% 0%)", duration: 1.3, ease: "expo.out",
          scrollTrigger: { trigger: fig, start: "top 88%", once: true },
        });
        if (img) {
          gsap.fromTo(img, { scale: 1.14, yPercent: -3 }, {
            scale: 1.04, yPercent: 3, ease: "none",
            scrollTrigger: { trigger: fig, start: "top bottom", end: "bottom top", scrub: 0.6 },
          });
        }
      });
    },
    { dependencies: [pathname], revertOnUpdate: true },
  );

  return null;
}
