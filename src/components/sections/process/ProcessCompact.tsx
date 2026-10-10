"use client";

import { useRef } from "react";
import type { Step } from "@/data/process";
import type { Video } from "@/data/site";
import { cn } from "@/lib/cn";
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

/* Ikonka etapu na odwrotnym tonie: „i” (kropka + kreska) zwinięty, pozioma kreska rozwinięty. */
const iconBox = cn(
  "absolute top-[round(1rem_+_0.5lh_-_16px,_1px)] right-5 size-8 bg-deep-3 transition-colors duration-500 group-data-on/step:bg-deep-2",
  "max-xl:top-[round(1rem_+_0.5lh_-_13px,_1px)] max-xl:size-[26px]",
);
const iconPart = "absolute left-[14px] w-1 bg-current transition-[transform,opacity] duration-[450ms,300ms] max-xl:left-[11px]";

/** Nagłówek etapu jako przycisk; aktywność (`data-on` na `group/step`) ustawia useProcessSteps. */
function StepToggle({ title, open, controls }: { title: string; open: boolean; controls: string }) {
  return (
    <button
      type="button"
      aria-expanded={open}
      aria-controls={controls}
      className="relative block w-full py-4 pr-[4.25rem] pl-5 text-left leading-[inherit] text-on-deep-muted transition-colors duration-400 hover:text-on-deep group-data-on/step:cursor-default group-data-on/step:text-on-deep max-xl:pr-[3.75rem]"
    >
      {title}
      <span className={iconBox} aria-hidden="true">
        <span className={cn(iconPart, "top-[7px] h-1 group-data-on/step:transform-[scale(0)] group-data-on/step:opacity-0 max-xl:top-[5px]")} />
        <span className={cn(iconPart, "top-[14px] h-3 group-data-on/step:transform-[translateY(-4px)_rotate(90deg)] max-xl:top-[11px] max-xl:h-2.5 max-xl:group-data-on/step:transform-[translateY(-3px)_rotate(90deg)]")} />
      </span>
    </button>
  );
}

/**
 * Proces na stronie głównej: ciemne tło, wideo w ramce po lewej, po prawej etapy jako tonalne pasy ze szwem.
 * Kliknięcie etapu rozwija go i przełącza wideo (celowo inaczej niż FAQ z liniami i plusem).
 */
export function ProcessCompact({ title, intro, steps, videos, cta, id = "proces" }: Props) {
  const root = useRef<HTMLElement>(null);
  useProcessSteps(root, "click", steps.length);

  return (
    <Section tone="deep" bands="both" spacing="none" id={id} ref={root} aria-labelledby={`${id}-title`}>
      <Grid className="min-h-svh content-center py-[clamp(4rem,10vh,6rem)] max-md:min-h-0 max-md:grid-cols-1 max-md:content-start">
        <Frame className="relative col-span-6 h-[min(76vh,46rem)] max-md:col-span-full max-md:h-[42vh]">
          <div className="overflow-hidden bg-deep-2" aria-hidden="true">
            <ProcessVideos videos={videos} />
          </div>
        </Frame>
        <div className="col-span-5 col-start-8 grid content-center gap-8 max-md:col-span-full max-md:mt-8">
          <SectionHeading id={`${id}-title`} title={title} intro={intro} tone="deep" />
          <ol className="grid gap-1.5">
            {steps.map((s, i) => (
              <li className="group/step bg-deep-2 transition-colors duration-500 data-on:bg-deep-3" data-step key={s.title}>
                <Heading level={3} className="text-[clamp(1.2rem,1.7vw,1.6rem)]">
                  <StepToggle title={s.title} open={i === 0} controls={`${id}-step-${i}`} />
                </Heading>
                <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-650 group-data-on/step:grid-rows-[1fr]" id={`${id}-step-${i}`}>
                  <div className="overflow-hidden">
                    <p className="max-w-[40ch] px-5 pb-[1.2rem] text-on-deep-muted">{s.text}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
          {cta && (
            <Button href={cta.href} variant="light" className="justify-self-start" arrow>{cta.label}</Button>
          )}
        </div>
      </Grid>
    </Section>
  );
}
