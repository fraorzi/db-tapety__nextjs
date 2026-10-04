"use client";

import { gsap, useGSAP } from "@/lib/gsap";
import { usePreview } from "@/preview/store";

export function WorkMotion() {
  const enter = usePreview("wenter");

  useGSAP(
    () => {
      const tiles = gsap.utils.toArray<HTMLElement>(".wm__item");
      tiles.forEach((t) => {
        const img = t.querySelector("img");
        if (img) {
          gsap.fromTo(img, { scale: 1.14, yPercent: -3 }, {
            scale: 1.04, yPercent: 3, ease: "none",
            scrollTrigger: { trigger: t, start: "top bottom", end: "bottom top", scrub: 0.6 },
          });
        }
      });

      const st = { trigger: ".wm", start: "top 80%", once: true } as const;
      if (enter === "a") {
        tiles.forEach((t) =>
          gsap.fromTo(t.querySelector(".media"), { clipPath: "inset(14% 0% 0% 0%)" }, {
            clipPath: "inset(0% 0% 0% 0%)", duration: 1.3, ease: "expo.out",
            scrollTrigger: { trigger: t, start: "top 88%", once: true },
          }),
        );
      } else if (enter === "b") {
        gsap.fromTo(".wm__cover", { scaleX: 1, scaleY: 1, transformOrigin: "right center" }, {
          scaleX: 0, duration: 1.1, ease: "expo.inOut", stagger: 0.14, scrollTrigger: st,
        });
      } else if (enter === "c") {
        gsap.fromTo(".wm__cover", { scaleX: 1, scaleY: 1, transformOrigin: "center bottom" }, {
          scaleY: 0, duration: 1.2, ease: "expo.inOut", stagger: 0.14, scrollTrigger: st,
        });
      } else {
        gsap.timeline({ scrollTrigger: st })
          .from(".wm__item .media", { yPercent: 8, opacity: 0, duration: 1.1, ease: "expo.out", stagger: 0.1 })
          .from(".wm__label", { xPercent: -105, duration: 0.9, ease: "expo.out", stagger: 0.1 }, 0.45);
      }
    },
    { dependencies: [enter], revertOnUpdate: true },
  );

  return null;
}
