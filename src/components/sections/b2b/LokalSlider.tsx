"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/cn";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Separator } from "@/components/ui/Separator";
import { SliderControls } from "@/components/ui/SliderControls";

/**
 * Położenie slajdu względem aktywnego (-1 poprzedni, 0 aktywny, 1 zapowiedź, 2 dalej).
 * Slajd to zawsze to samo zdjęcie, więc skalowanie od dolnej krawędzi zostawia dół zapowiedzi równo z dołem aktywnego.
 */
const position: Record<number, string> = {
  [-1]: "pointer-events-none opacity-0 transform-[translateX(-30%)_scale(0.92)]",
  0: "z-2 transform-none",
  // zapowiedź następnej w szarości; na hover (desktop) nabiera koloru i wysuwa się w stronę aktywnej
  1: cn(
    "z-1 cursor-pointer opacity-70 transform-[translateX(calc(100%/0.64*0.68))_scale(0.62)]",
    "max-md:transform-[translateX(calc(100%/0.84*0.88))_scale(0.62)]",
    "md:hover:opacity-100 md:hover:transform-[translateX(calc(100%/0.64*0.66))_scale(0.64)]",
  ),
  2: "opacity-0 transform-[translateX(calc(100%/0.64*1.08))_scale(0.62)]",
};

/** Realizacje w lokalach: aktywny kadr duży, następny wystaje z prawej. Podpisy w osobnym stosie pod spodem. */
export function LokalSlider({ slides }: { slides: readonly Project[] }) {
  const [active, setActive] = useState(0);
  const n = slides.length;
  const go = (d: number) => setActive((x) => (x + d + n) % n);
  const offset = (i: number) => {
    const d = i - active;
    return d > n / 2 ? d - n : d < -n / 2 ? d + n : d;
  };

  return (
    <Section spacing="none" className="pb-section" aria-labelledby="b2bwork-title">
      <SectionHeading id="b2bwork-title" title="Realizacje w lokalach" />
      <div className="relative mt-[clamp(2rem,5vh,3rem)] grid grid-cols-[64%_minmax(0,1fr)] max-md:grid-cols-[minmax(0,1fr)_auto] max-md:gap-x-4">
        <div className="relative col-span-full h-[clamp(19rem,58vh,37rem)] overflow-clip max-md:h-[calc((100vw-2*var(--spacing-gutter))*0.84*2/3)]">
          {slides.map((p, i) => {
            const d = offset(i);
            const pos = Math.max(-1, Math.min(2, d));
            return (
              <Link
                key={p.slug}
                href={`/realizacje/${p.slug}`}
                className={cn(
                  "group absolute inset-y-0 left-0 w-[64%] origin-bottom-left transition-[transform,opacity] duration-[1s,700ms] max-md:w-[84%]",
                  position[pos],
                )}
                tabIndex={d === 0 ? 0 : -1}
                aria-hidden={d !== 0}
                onClick={(e) => {
                  if (d === 0) return;
                  e.preventDefault();
                  go(d);
                }}
              >
                <div className="absolute inset-0 overflow-hidden bg-paper-2">
                  <Image
                    src={p.cover}
                    alt={p.alt}
                    fill
                    sizes="(max-width: 900px) 90vw, 62vw"
                    className={cn(
                      "transition-[transform,filter] duration-[1.2s,700ms]",
                      d === 0 ? "group-hover:transform-[scale(1.03)]" : "grayscale",
                      pos === 1 && "md:group-hover:grayscale-0",
                    )}
                  />
                </div>
              </Link>
            );
          })}
        </div>
        <div className="grid pt-[0.9rem]" aria-live="polite">
          {slides.map((p, i) => {
            const on = i === active;
            return (
              <p
                className={cn(
                  "col-start-1 row-start-1 flex justify-between gap-6 text-md max-md:flex-col max-md:gap-[0.2rem]",
                  on
                    ? "visible opacity-100 transition-[opacity,visibility] delay-[250ms,0s] duration-[600ms,0s]"
                    : "invisible opacity-0 transition-[opacity,visibility] delay-[0s,400ms] duration-[400ms,0s]",
                )}
                key={p.slug}
                aria-hidden={!on}
              >
                <b className="font-display text-[1.05rem] font-semibold font-stretch-78%">{p.title}</b>
                <span className="text-muted">{p.room}<Separator />{p.material}</span>
              </p>
            );
          })}
        </div>
        <SliderControls
          className="absolute top-0 right-0 z-3 max-md:static max-md:mt-[0.9rem]"
          prevLabel="Poprzednia realizacja"
          nextLabel="Następna realizacja"
          onPrev={() => go(-1)}
          onNext={() => go(1)}
        />
      </div>
    </Section>
  );
}
