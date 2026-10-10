"use client";

import { useMemo, useRef, useState } from "react";
import type { Project } from "@/data/projects";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { ProjectCard } from "./ProjectCard";
import { RoomTabs } from "./RoomTabs";

const ALL = "Wszystkie";

/**
 * /realizacje: taby po pomieszczeniu + równa siatka kart (2 kolumny, 3 od 1400 px, 1 na mobile).
 * Wejście kart liczone tutaj, także po zmianie taba: nakładka zjeżdża w bok kolejno w rzędzie, potem podpis.
 */
export function WorkGrid({ projects }: { projects: readonly Project[] }) {
  const [room, setRoom] = useState<string>(ALL);
  const grid = useRef<HTMLDivElement>(null);
  const rooms = useMemo(() => {
    const counts = new Map<string, number>();
    for (const p of projects) counts.set(p.room, (counts.get(p.room) ?? 0) + 1);
    return [[ALL, projects.length] as const, ...counts];
  }, [projects]);
  const shown = room === ALL ? projects : projects.filter((p) => p.room === room);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>("[data-card]");
      cards.forEach((card) => {
        const img = card.querySelector("img");
        if (img) {
          gsap.fromTo(img, { scale: 1.14, yPercent: -3 }, {
            scale: 1.04, yPercent: 3, ease: "none",
            scrollTrigger: { trigger: card, start: "top bottom", end: "bottom top", scrub: 0.6 },
          });
        }
      });
      ScrollTrigger.batch(cards, {
        start: "top 88%",
        once: true,
        onEnter: (batch) => {
          gsap.timeline()
            .fromTo(batch.map((c) => c.querySelector("[data-card-cover]")), { scaleX: 1 }, { scaleX: 0, duration: 1.1, ease: "expo.inOut", stagger: 0.14 })
            .fromTo(
              batch.flatMap((c) => [...c.querySelectorAll("[data-card-reveal]")]),
              { opacity: 0, y: 8 },
              { opacity: 1, y: 0, duration: 1, ease: "power2.out", stagger: 0.06 },
              "-=0.5",
            );
        },
      });
    },
    { scope: grid, dependencies: [room], revertOnUpdate: true },
  );

  return (
    <>
      <RoomTabs rooms={rooms} value={room} onChange={setRoom} controls="pgrid" />
      <div
        className="mt-stack grid grid-cols-2 gap-x-gutter gap-y-[clamp(2rem,4vw,3.5rem)] pb-section-lg max-md:grid-cols-1 xl:grid-cols-3"
        id="pgrid"
        role="tabpanel"
        key={room}
        ref={grid}
      >
        {shown.map((p, i) => (
          <ProjectCard key={p.slug} project={p} sizes="(max-width: 900px) 100vw, (max-width: 1400px) 50vw, 33vw" priority={i < 2} />
        ))}
        {shown.length === 0 && <p className="col-span-full py-12 text-muted">Brak realizacji w tej kategorii.</p>}
      </div>
    </>
  );
}
