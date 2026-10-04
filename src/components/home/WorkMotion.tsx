"use client";

import Link from "next/link";
import { useRef } from "react";
import { Arrow } from "@/components/Arrow";
import { ProjectCard } from "@/components/ProjectCard";
import type { Project } from "@/data/projects";
import { gsap, useGSAP } from "@/lib/gsap";

type Props = { head: React.ReactNode; projects: readonly Project[] };

const shapes = ["wt--wide", "wt--tall", "wt--wide", "wt--tall"];

export function WorkTrack({ head, projects }: Props) {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 901px)", () => {
        const track = root.current!.querySelector<HTMLElement>(".wt__track")!;
        const distance = () => track.scrollWidth - track.clientWidth;
        gsap.to(track, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: root.current!.querySelector(".wt__pin"), start: "top top", end: () => `+=${distance()}`,
            pin: true, scrub: 0.8, invalidateOnRefresh: true,
          },
        });
      });
      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <section className="surface work wt" ref={root} aria-labelledby="work-title">
      <div className="wt__pin">
        <div className="wrap">{head}</div>
        <div className="wt__track">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} className={shapes[i]} sizes="(max-width: 900px) 80vw, 50vw" />
          ))}
          <Link href="/realizacje" className="wt__end">
            <span className="h3">Zobacz wszystkie realizacje</span>
            <Arrow />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function WorkColumns({ head, projects }: Props) {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 901px)", () => {
        gsap.fromTo(".wc__col--b", { y: 80 }, {
          y: -80, ease: "none",
          scrollTrigger: { trigger: ".wc", start: "top bottom", end: "bottom top", scrub: 0.8 },
        });
      });
      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <section className="surface work wrap" ref={root} aria-labelledby="work-title">
      {head}
      <div className="wc">
        <div className="wc__col">
          <ProjectCard project={projects[0]} className="wc--a" sizes="(max-width: 900px) 100vw, 55vw" />
          <ProjectCard project={projects[2]} className="wc--b" sizes="(max-width: 900px) 100vw, 55vw" />
        </div>
        <div className="wc__col wc__col--b">
          <ProjectCard project={projects[1]} className="wc--c" sizes="(max-width: 900px) 100vw, 40vw" />
          <ProjectCard project={projects[3]} className="wc--d" sizes="(max-width: 900px) 100vw, 40vw" />
          <Link href="/realizacje" className="btn btn--soft" style={{ justifySelf: "start" }}>Wszystkie realizacje <Arrow /></Link>
        </div>
      </div>
    </section>
  );
}
