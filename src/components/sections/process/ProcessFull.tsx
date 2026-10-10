"use client";

import { useRef } from "react";
import type { Step } from "@/data/process";
import type { Video } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { Frame } from "@/components/ui/Frame";
import { Grid } from "@/components/ui/Grid";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProcessVideos } from "./ProcessVideos";
import { useProcessSteps } from "./useProcessSteps";

type Props = {
  title: string;
  intro?: string;
  steps: readonly Step[];
  videos: readonly Video[];
  cta?: { href: string; label: string };
  id?: string;
};

/**
 * Proces na /jak-pracuje: jasne tło, etapy z faktami po lewej (każdy na wysokość ekranu),
 * przypięte wideo po prawej z licznikiem etapów. To jedyna numeracja w witrynie (pięć etapów po ekranie, łatwo się zgubić).
 */
export function ProcessFull({ title, intro, steps, videos, cta, id = "proces" }: Props) {
  const root = useRef<HTMLElement>(null);
  useProcessSteps(root, "scroll", steps.length);

  return (
    <Section tone="paper" id={id} ref={root} aria-labelledby={`${id}-title`}>
      <SectionHeading id={`${id}-title`} title={title} intro={intro} />
      <Grid className="relative mt-[clamp(2rem,5vh,3rem)] max-md:grid-cols-1">
        <ol className="col-span-5 max-md:col-span-full">
          {steps.map((s) => (
            <li
              className="grid min-h-[70vh] content-center gap-[0.85rem] opacity-30 transition-opacity duration-500 data-on:opacity-100 max-md:min-h-0 max-md:pt-9 max-md:pb-3 max-md:opacity-100"
              data-step
              key={s.title}
            >
              <Heading level={3} className="text-[clamp(1.6rem,2.4vw,2.3rem)]">{s.title}</Heading>
              <p className="max-w-[42ch] text-muted">{s.text}</p>
              {(s.outcome || s.time) && (
                <dl className="mt-3 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-rule pt-[0.9rem] text-md">
                  {s.outcome && <div><dt className="mb-[0.2rem] text-muted">Co dostajesz</dt><dd className="max-w-[28ch]">{s.outcome}</dd></div>}
                  {s.time && <div><dt className="mb-[0.2rem] text-muted">Czas</dt><dd className="max-w-[28ch]">{s.time}</dd></div>}
                </dl>
              )}
            </li>
          ))}
        </ol>
        <Frame className="sticky top-[12vh] col-span-6 col-start-7 h-[80vh] max-md:relative max-md:top-auto max-md:-order-1 max-md:col-span-full max-md:mb-4 max-md:h-[42vh]">
          <div
            className="overflow-hidden bg-paper-2 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:z-1 after:h-[30%] after:bg-linear-to-t after:from-scrim/60 after:to-transparent"
            aria-hidden="true"
          >
            <ProcessVideos videos={videos} />
            <div className="absolute bottom-[1.2rem] left-[1.4rem] z-2 flex items-baseline gap-[0.6rem] text-md text-on-deep">
              <span className="font-display text-[2.4rem] leading-none font-extrabold font-stretch-85% tracking-[-0.02em] tabular-nums" data-counter>01</span>
              <span>/ {String(steps.length).padStart(2, "0")}</span>
            </div>
          </div>
        </Frame>
      </Grid>
      {cta && (
        <Grid className="mt-[clamp(1.5rem,4vh,2.5rem)]">
          <div className="col-span-5">
            <Button href={cta.href} arrow>{cta.label}</Button>
          </div>
        </Grid>
      )}
    </Section>
  );
}
