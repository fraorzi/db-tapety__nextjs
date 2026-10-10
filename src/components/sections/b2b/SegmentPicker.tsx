"use client";

import Image from "next/image";
import { useState } from "react";
import { segments } from "@/data/b2b";
import { cn } from "@/lib/cn";
import { Heading } from "@/components/ui/Heading";
import { Media } from "@/components/ui/Media";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

type TabProps = { title: string; text: string; selected: boolean; onSelect: () => void };

/** Rodzaj klienta: tytuł zawsze, opis rozwija się w wybranym. Wybiera najechanie, fokus i kliknięcie. */
function SegmentTab({ title, text, selected, onSelect }: TabProps) {
  return (
    <button
      type="button"
      role="tab"
      className="group grid w-full border-b border-rule py-[1.1rem] text-left text-muted transition-colors duration-300 aria-selected:text-ink"
      aria-selected={selected}
      onMouseEnter={onSelect}
      onFocus={onSelect}
      onClick={onSelect}
    >
      <Heading level={3} className="text-[clamp(1.2rem,1.8vw,1.7rem)] text-muted transition-colors duration-300 group-aria-selected:text-ink">{title}</Heading>
      <p className="grid max-w-[40ch] grid-rows-[0fr] text-muted transition-[grid-template-rows] duration-500 group-aria-selected:grid-rows-[1fr]">
        <span className="block overflow-hidden">
          <span className="block max-w-[44ch] pt-[0.4rem]">{text}</span>
        </span>
      </p>
    </button>
  );
}

/** „Z kim pracuję”: lista rodzajów klientów; najechanie lub fokus rozwija opis i przełącza zdjęcie obok. */
export function SegmentPicker() {
  const [active, setActive] = useState(0);

  return (
    <Section grid spacing="none" className="items-center gap-y-10 pb-section" aria-labelledby="seg-title">
      <div className="order-2 col-span-5 col-start-8 grid content-center gap-6 max-md:order-none max-md:col-span-full">
        <SectionHeading id="seg-title" title="Z kim pracuję" />
        <div className="grid border-t border-rule" role="tablist" aria-label="Rodzaje klientów biznesowych">
          {segments.map((s, i) => (
            <SegmentTab key={s.t} title={s.t} text={s.d} selected={i === active} onSelect={() => setActive(i)} />
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
    </Section>
  );
}
