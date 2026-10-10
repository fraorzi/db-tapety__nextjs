"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { videos } from "@/data/site";
import { cn } from "@/lib/cn";

/** Warstwy od spodu; każda zostawia z prawej schodek 12 % z podpisem. */
const layers = [
  { label: "Ściana", className: "bg-paper-3" },
  { label: "Grunt", className: "bg-paper-2 shadow-[inset_-1px_0_0_var(--color-rule)]" },
  { label: "Klej", className: "bg-deep-2 text-on-deep" },
  {
    label: "Tapeta",
    className: "bg-deep text-on-deep after:absolute after:inset-0 after:bg-linear-to-l after:from-scrim/60 after:to-transparent after:to-34%",
  },
];

/** Wejście na /jak-pracuje: przekrój ściany. Warstwy nakładają się od lewej (scaleX), potem pojawiają się podpisy. */
export function WallLayers() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.timeline({ delay: 0.25 })
        .from("[data-layer]", { scaleX: 0, duration: 1.2, ease: "expo.inOut", stagger: 0.22 })
        .from("[data-layer-label]", { opacity: 0, yPercent: 30, duration: 0.7, ease: "power2.out", stagger: 0.22 }, 0.9);
    },
    { scope: root },
  );

  return (
    <div ref={root} className="mt-stack">
      <div className="@container relative h-[clamp(13rem,34vh,22rem)] overflow-hidden" role="img" aria-label="Przekrój ściany: ściana, grunt, klej, tapeta">
        {layers.map((l, i) => (
          <div
            key={l.label}
            data-layer
            className={cn("absolute inset-0 origin-left overflow-hidden", l.className)}
            style={{ right: `${i * 12}%` }}
            aria-hidden="true"
          >
            {l.label === "Tapeta" && <Image src={videos.heroPoster} alt="" fill sizes="(max-width: 900px) 70vw, 64vw" priority />}
            <span
              data-layer-label
              className="absolute right-[6cqw] bottom-[1.1rem] z-1 translate-x-1/2 rotate-180 font-display text-base font-semibold tracking-[-0.01em] whitespace-nowrap [writing-mode:vertical-rl]"
            >
              {l.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
