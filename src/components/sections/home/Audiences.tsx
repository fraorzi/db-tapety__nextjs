"use client";

import Image from "next/image";
import { useId, useRef, useState } from "react";
import { audiences } from "@/data/home";
import { cn } from "@/lib/cn";
import { Arrow } from "@/components/ui/Arrow";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SliderControls } from "@/components/ui/SliderControls";
import { TextLink } from "@/components/ui/TextLink";

/**
 * „Dla kogo” jako rozsuwane panele: aktywny rośnie (flex-grow), pozostałe zostają wąskie z pionowym podpisem.
 * Zdjęcie, gradient i tekst mają stały rozmiar rozwiniętego panelu (--open-w) i są tylko przycinane,
 * więc przy rozsuwaniu nic się nie przeskalowuje ani nie przełamuje. Na mobile akordeon pionowy.
 */
export function Audiences() {
  const [active, setActive] = useState(0);
  const id = useId();
  const n = audiences.length;
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);
  const go = (d: number) => setActive((a) => (a + d + n) % n);
  const focusPanel = (i: number) => {
    setActive(i);
    buttons.current[i]?.focus();
  };

  return (
    <section className="relative z-1 bg-paper px-page pb-section-lg" aria-labelledby="aud-title">
      <div className="mb-6 flex items-end justify-between gap-8">
        <SectionHeading id="aud-title" title="Dla kogo pracuję" />
        <SliderControls prevLabel="Poprzedni" nextLabel="Następny" onPrev={() => go(-1)} onNext={() => go(1)} />
      </div>
      {/* tor: stała wysokość + contain, więc rozsuwanie przelicza układ tylko w środku */}
      <div
        className="@container flex h-[clamp(24rem,58vh,32rem)] gap-(--gap) [--gap:0.5rem] [--open:4.2] contain-strict max-md:h-auto max-md:flex-col max-md:[container-type:normal] max-md:[contain:layout_paint]"
        style={{ "--n": n } as React.CSSProperties}
      >
        {audiences.map((a, i) => {
          const on = i === active;
          return (
            <article
              key={a.t}
              data-on={on || undefined}
              className={cn(
                "group/panel relative isolate min-w-0 flex-[1_1_0] cursor-pointer overflow-hidden bg-deep text-left text-on-deep",
                "[--open-w:calc((100cqw-(var(--n)-1)*var(--gap))*var(--open)/(var(--open)+var(--n)-1))]",
                "transition-[flex-grow] duration-900 data-on:grow-(--open) data-on:cursor-default",
                "max-md:flex-[0_0_4rem] max-md:transition-[flex-basis] max-md:duration-800 max-md:[--open-h:26rem] max-md:data-on:grow-0 max-md:data-on:basis-(--open-h)",
              )}
            >
              <span
                className={cn(
                  "absolute inset-y-0 left-1/2 -z-1 w-(--open-w) -translate-x-1/2",
                  "after:absolute after:inset-0 after:bg-linear-to-t after:from-scrim/78 after:to-scrim/10 after:to-60% after:opacity-0 after:transition-opacity after:duration-700 group-data-on/panel:after:opacity-100",
                  "max-md:top-1/2 max-md:bottom-auto max-md:left-0 max-md:h-(--open-h) max-md:w-full max-md:translate-x-0 max-md:-translate-y-1/2",
                )}
                aria-hidden="true"
              >
                <Image
                  src={a.img}
                  alt=""
                  fill
                  sizes="(max-width: 900px) 100vw, 60vw"
                  priority={i === 0}
                  className="opacity-55 transition-[transform,opacity] duration-[1.2s,700ms] transform-[scale(1.06)] group-data-on/panel:opacity-100 group-data-on/panel:transform-none"
                />
              </span>
              <button
                ref={(el) => { buttons.current[i] = el; }}
                type="button"
                className="absolute inset-0 z-1 cursor-pointer focus-visible:shadow-inset-on-deep focus-visible:outline-none group-data-on/panel:cursor-default"
                aria-expanded={on}
                aria-controls={`${id}-${i}`}
                onClick={() => setActive(i)}
                onKeyDown={(e) => {
                  if (e.key === "ArrowRight" || e.key === "ArrowDown") { e.preventDefault(); focusPanel((i + 1) % n); }
                  if (e.key === "ArrowLeft" || e.key === "ArrowUp") { e.preventDefault(); focusPanel((i - 1 + n) % n); }
                }}
              >
                <span
                  className={cn(
                    "absolute bottom-[1.4rem] left-1/2 z-1 font-display text-[1.05rem] font-semibold tracking-[-0.01em] whitespace-nowrap [writing-mode:vertical-rl]",
                    "transform-[translateX(-50%)_rotate(180deg)] transition-opacity duration-400 group-data-on/panel:opacity-0",
                    "max-md:top-1/2 max-md:bottom-auto max-md:left-[1.2rem] max-md:-translate-y-1/2 max-md:transform-none max-md:[writing-mode:horizontal-tb]",
                  )}
                >
                  {a.t}
                </span>
              </button>
              <div
                id={`${id}-${i}`}
                aria-hidden={!on}
                className={cn(
                  "pointer-events-none absolute inset-x-0 bottom-0 z-2 grid w-[min(var(--open-w),36rem)] justify-items-start gap-[0.9rem] p-[clamp(1.4rem,2.6vw,2.4rem)]",
                  "translate-y-3 opacity-0 transition-[opacity,translate] duration-[500ms,600ms]",
                  "group-data-on/panel:pointer-events-auto group-data-on/panel:translate-y-0 group-data-on/panel:opacity-100 group-data-on/panel:delay-250",
                  "max-md:w-full",
                )}
              >
                <h3 className="text-[clamp(1.6rem,2.6vw,2.6rem)] whitespace-nowrap max-md:whitespace-normal">{a.t}</h3>
                <p className="max-w-[40ch] text-on-media">{a.d}</p>
                <TextLink href={a.href} className="mt-[0.4rem]" tabIndex={on ? 0 : -1}>{a.link} <Arrow /></TextLink>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
