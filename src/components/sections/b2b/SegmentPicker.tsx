"use client";

import Image from "next/image";
import { useState } from "react";
import { segments } from "@/data/b2b";
import { cn } from "@/lib/cn";
import { Media } from "@/components/ui/Media";
import { SectionHeading } from "@/components/ui/SectionHeading";

/** „Z kim pracuję”: lista rodzajów klientów; najechanie lub fokus rozwija opis i przełącza zdjęcie obok. */
export function SegmentPicker() {
  const [active, setActive] = useState(0);

  return (
    <section className="grid grid-cols-12 items-center gap-x-gutter gap-y-10 px-page pb-section" aria-labelledby="seg-title">
      <div className="order-2 col-span-5 col-start-8 grid content-center gap-6 max-md:order-none max-md:col-span-full">
        <SectionHeading id="seg-title" title="Z kim pracuję" />
        <div className="grid border-t border-rule" role="tablist" aria-label="Rodzaje klientów biznesowych">
          {segments.map((s, i) => (
            <button
              type="button"
              key={s.t}
              role="tab"
              className="group grid w-full border-b border-rule py-[1.1rem] text-left text-muted transition-colors duration-300 aria-selected:text-ink"
              aria-selected={i === active}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onClick={() => setActive(i)}
            >
              <h3 className="text-[clamp(1.2rem,1.8vw,1.7rem)] text-muted transition-colors duration-300 group-aria-selected:text-ink">{s.t}</h3>
              <p className="grid max-w-[40ch] grid-rows-[0fr] text-muted transition-[grid-template-rows] duration-500 group-aria-selected:grid-rows-[1fr]">
                <span className="block overflow-hidden">
                  <span className="block max-w-[44ch] pt-[0.4rem]">{s.d}</span>
                </span>
              </p>
            </button>
          ))}
        </div>
      </div>
      <div className="relative order-1 col-span-6 aspect-[4/5] max-md:order-none max-md:col-span-full max-md:aspect-[4/3]">
        {segments.map((s, i) => (
          <Media
            fill
            key={s.t}
            aria-hidden={i !== active}
            className={cn("opacity-0 transition-opacity duration-600", i === active && "opacity-100")}
          >
            <Image src={s.img} alt="" fill sizes="(max-width: 900px) 100vw, 50vw" />
          </Media>
        ))}
      </div>
    </section>
  );
}
