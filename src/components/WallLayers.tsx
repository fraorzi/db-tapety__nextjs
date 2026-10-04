"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { videos } from "@/data/site";
import { Squircle } from "./Squircle";

const layers = ["Ściana", "Grunt", "Klej", "Tapeta"];

export function WallLayers() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.timeline({ delay: 0.25 })
        .from(".wl__layer", { scaleX: 0, duration: 1.2, ease: "expo.inOut", stagger: 0.22 })
        .from(".wl__label", { opacity: 0, yPercent: 30, duration: 0.7, ease: "power2.out", stagger: 0.22 }, 0.9);
    },
    { scope: root },
  );

  return (
    <div ref={root} className="wl">
      <Squircle radius={18} className="wl__box" role="img" aria-label="Przekrój ściany: ściana, grunt, klej, tapeta">
        {layers.map((t, i) => (
          <div key={t} className="wl__layer" style={{ right: `${i * 12}%` }} aria-hidden="true">
            {t === "Tapeta" && <Image src={videos.heroPoster} alt="" fill sizes="(max-width: 900px) 70vw, 64vw" priority />}
            <span className="wl__label">{t}</span>
          </div>
        ))}
      </Squircle>
    </div>
  );
}
