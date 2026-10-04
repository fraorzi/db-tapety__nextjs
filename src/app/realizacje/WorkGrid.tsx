"use client";

import { useMemo, useState } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import type { Project } from "@/data/projects";

const ALL = "Wszystkie";

export function WorkGrid({ projects }: { projects: readonly Project[] }) {
  const [room, setRoom] = useState<string>(ALL);
  const rooms = useMemo(() => {
    const counts = new Map<string, number>();
    for (const p of projects) counts.set(p.room, (counts.get(p.room) ?? 0) + 1);
    return [[ALL, projects.length] as const, ...counts];
  }, [projects]);
  const shown = room === ALL ? projects : projects.filter((p) => p.room === room);

  return (
    <>
      <div className="tabs" role="tablist" aria-label="Filtruj po pomieszczeniu">
        {rooms.map(([r, c]) => (
          <button
            type="button"
            key={r}
            role="tab"
            className="tab"
            aria-selected={room === r}
            aria-controls="pgrid"
            onClick={() => setRoom(r)}
          >
            {r}<span>{c}</span>
          </button>
        ))}
      </div>
      <div className="pgrid" id="pgrid" role="tabpanel" key={room}>
        {shown.map((p, i) => (
          <ProjectCard key={p.slug} project={p} detail sizes="(max-width: 900px) 100vw, (max-width: 1400px) 50vw, 33vw" priority={i < 2} />
        ))}
        {shown.length === 0 && <p className="pgrid__empty">Brak realizacji w tej kategorii.</p>}
      </div>
    </>
  );
}
