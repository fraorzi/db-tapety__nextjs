"use client";

import { useRef } from "react";
import { flow } from "@/data/b2b";
import { gsap, useGSAP } from "@/lib/gsap";
import { cn } from "@/lib/cn";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

/**
 * „Od zapytania do faktury” jako schody tonalne: każdy krok jaśniejszy (od deep-2 do paper-3) i wyższy,
 * nachodzi na poprzedni z miękkim cieniem jak położony pas. Przy wejściu w widok wyrastają po kolei, potem tekst.
 */
export function Flow() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const steps = gsap.utils.toArray<HTMLElement>("[data-flow-step]");
      const texts = gsap.utils.toArray<HTMLElement>("[data-flow-step] > *");
      const mm = gsap.matchMedia();
      const play = (from: gsap.TweenVars) => {
        gsap.timeline({ scrollTrigger: { trigger: "[data-flow]", start: "top 75%", once: true } })
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
    <Section tone="deep" bands="both" ref={root} aria-labelledby="flow-title">
      <SectionHeading id="flow-title" title="Od zapytania do faktury" intro="Tak wygląda zlecenie od pierwszej wiadomości do rozliczenia." tone="deep" />
      <ol data-flow className="mt-stack grid grid-cols-5 items-end max-md:grid-cols-1">
        {flow.map((f, i) => (
          <li
            key={f.t}
            data-flow-step
            className={cn(
              "grid min-h-[calc(13rem+var(--i)*3.25rem)] content-start gap-[0.8rem] p-[clamp(1.1rem,1.8vw,1.7rem)]",
              // każdy kolejny nachodzi na poprzedni o 10 px (na mobile w pionie o 4 px)
              "not-first:-ml-2.5 not-first:pl-[calc(clamp(1.1rem,1.8vw,1.7rem)+0.625rem)] not-first:shadow-[-10px_0_18px_-6px_oklch(from_var(--color-scrim)_l_c_h/0.5)]",
              "max-md:ml-[calc(var(--i)*1rem)] max-md:min-h-0 max-md:not-first:ml-[calc(var(--i)*1rem)]",
              "max-md:not-first:-mt-1 max-md:not-first:pt-[calc(clamp(1.1rem,1.8vw,1.7rem)+0.25rem)] max-md:not-first:pl-[clamp(1.1rem,1.8vw,1.7rem)]",
              "max-md:not-first:shadow-[0_-6px_12px_-5px_oklch(from_var(--color-scrim)_l_c_h/0.42)]",
              i >= 3 && "text-ink",
            )}
            style={{ "--i": i, background: `color-mix(in oklch, var(--color-deep-2), var(--color-paper-3) ${i * 25}%)` } as React.CSSProperties}
          >
            <Heading level={3} className="text-[clamp(1.15rem,1.5vw,1.4rem)]">{f.t}</Heading>
            <p className={cn("max-w-[26ch] text-md", i < 2 ? "text-on-deep-muted" : i === 2 ? "text-on-deep" : "text-muted")}>{f.d}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
