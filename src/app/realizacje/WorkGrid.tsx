"use client";

import { Fragment, useLayoutEffect, useMemo, useRef, useState } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import type { Project } from "@/data/projects";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";

const ALL = "Wszystkie";

export function WorkGrid({ projects }: { projects: readonly Project[] }) {
  const [room, setRoom] = useState<string>(ALL);
  const tabs = useRef<HTMLDivElement>(null);
  const bar = useRef<HTMLSpanElement>(null);
  const rooms = useMemo(() => {
    const counts = new Map<string, number>();
    for (const p of projects) counts.set(p.room, (counts.get(p.room) ?? 0) + 1);
    return [[ALL, projects.length] as const, ...counts];
  }, [projects]);
  const grid = useRef<HTMLDivElement>(null);
  const shown = room === ALL ? projects : projects.filter((p) => p.room === room);

  useLayoutEffect(() => {
    const place = () => {
      const on = tabs.current?.querySelector<HTMLElement>('[aria-selected="true"]');
      if (!on || !bar.current) return;
      bar.current.style.transform = `translate(${on.offsetLeft}px, ${on.offsetTop + on.offsetHeight}px) scaleX(${on.offsetWidth})`;
    };
    place();
    window.addEventListener("resize", place);
    return () => window.removeEventListener("resize", place);
  }, [room]);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>(".proj");
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
            .fromTo(batch.map((c) => c.querySelector(".pcover")), { scaleX: 1 }, { scaleX: 0, duration: 1.1, ease: "expo.inOut", stagger: 0.14 })
            .fromTo(
              batch.flatMap((c) => [...c.querySelectorAll("figcaption > :not(.proj__go)")]),
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
      <div className="tabs" role="tablist" aria-label="Filtruj po pomieszczeniu" ref={tabs}>
        {rooms.map(([r, c]) => (
          <Fragment key={r}>
            <button
              type="button"
              role="tab"
              className="tab"
              aria-selected={room === r}
              aria-controls="pgrid"
              onClick={() => setRoom(r)}
            >
              {r}<span>{c}</span>
            </button>
            {r === ALL && <span className="tabs__div" aria-hidden="true" />}
          </Fragment>
        ))}
        <span className="tabs__bar" ref={bar} aria-hidden="true" />
      </div>
      <div className="pgrid" id="pgrid" role="tabpanel" key={room} ref={grid}>
        {shown.map((p, i) => (
          <ProjectCard key={p.slug} project={p} sizes="(max-width: 900px) 100vw, (max-width: 1400px) 50vw, 33vw" priority={i < 2} />
        ))}
        {shown.length === 0 && <p className="pgrid__empty">Brak realizacji w tej kategorii.</p>}
      </div>
    </>
  );
}
