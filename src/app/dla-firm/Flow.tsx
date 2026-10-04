"use client";

import { useRef } from "react";
import { flow } from "@/data/b2b";
import { gsap, useGSAP } from "@/lib/gsap";

/** Schody tonalne: kroki jaśnieją i rosną; przy wejściu w widok wyrastają po kolei od dołu, potem pojawia się tekst. */
export function Flow() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const steps = gsap.utils.toArray<HTMLElement>(".fst__step");
      const texts = gsap.utils.toArray<HTMLElement>(".fst__step > *");
      const mm = gsap.matchMedia();
      const play = (from: gsap.TweenVars) => {
        gsap.timeline({ scrollTrigger: { trigger: ".fst", start: "top 75%", once: true } })
          .from(steps, { ...from, duration: 0.9, ease: "expo.out", stagger: 0.12 })
          .from(texts, { opacity: 0, y: 8, duration: 0.6, ease: "power2.out", stagger: 0.06 }, 0.35);
      };
      mm.add("(min-width: 901px)", () => play({ scaleY: 0, transformOrigin: "50% 100%" }));
      mm.add("(max-width: 900px)", () => play({ scaleX: 0, transformOrigin: "0% 50%" }));
      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <section className="deep flow wrap bands-t bands-b" ref={root} aria-labelledby="flow-title">
      <div className="sec-head">
        <h2 className="h2" id="flow-title">Od zapytania do faktury</h2>
        <p>Pięć kroków. Na każdym wiecie, co się dzieje i kiedy.</p>
      </div>
      <ol className="fst">
        {flow.map((f, i) => (
          <li className="fst__step" key={f.t} style={{ "--i": i } as React.CSSProperties}>
            <h3>{f.t}</h3>
            <p>{f.d}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
