"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { Arrow } from "@/components/Arrow";
import { ProjectCard } from "@/components/ProjectCard";
import type { Project } from "@/data/projects";
import { usePreview } from "@/preview/store";

type Props = { picks: readonly Project[]; slides: readonly Project[] };

const head = (controls?: React.ReactNode) => (
  <div className="sec-row">
    <div className="sec-head">
      <h2 className="h2" id="b2bwork-title">Realizacje w lokalach</h2>
    </div>
    {controls ?? <Link href="/realizacje" className="ulink">Wszystkie realizacje</Link>}
  </div>
);

function Controls({ go, label }: { go: (d: number) => void; label: string }) {
  return (
    <div className="aud__ctrl" aria-label={label}>
      <button type="button" className="btn btn--soft btn--icon" aria-label="Poprzednia" onClick={() => go(-1)}><Arrow dir="left" /></button>
      <button type="button" className="btn btn--soft btn--icon" aria-label="Następna" onClick={() => go(1)}><Arrow /></button>
    </div>
  );
}

function useIndex(n: number) {
  const [i, setI] = useState(0);
  return [i, (d: number) => setI((x) => (x + d + n) % n)] as const;
}

function Peek({ slides }: { slides: readonly Project[] }) {
  const [active, go] = useIndex(slides.length);
  return (
    <section className="wrap lk" aria-labelledby="b2bwork-title">
      {head(<Controls go={go} label="Przewijanie realizacji" />)}
      <div className="lkp" aria-live="polite">
        {slides.map((p, i) => {
          const n = slides.length;
          let d = i - active;
          if (d > n / 2) d -= n;
          if (d < -n / 2) d += n;
          return (
            <Link
              key={p.slug}
              href={`/realizacje/${p.slug}`}
              className="lkp__slide"
              data-d={Math.max(-1, Math.min(2, d))}
              tabIndex={d === 0 ? 0 : -1}
              aria-hidden={d !== 0}
              onClick={(e) => {
                if (d === 0) return;
                e.preventDefault();
                go(d);
              }}
            >
              <div className="lkp__img"><Image src={p.cover} alt={p.alt} fill sizes="(max-width: 900px) 90vw, 62vw" /></div>
              <div className="lkp__cap">
                <b>{p.title}</b>
                <span>{p.room} · {p.material}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

function Roll({ slides }: { slides: readonly Project[] }) {
  const n = slides.length;
  const [{ active, prev }, setState] = useState({ active: 0, prev: -1 });
  const go = (d: number) => setState((s) => ({ active: (s.active + d + n) % n, prev: s.active }));
  const set = (i: number) => setState((s) => (i === s.active ? s : { active: i, prev: s.active }));
  const p = slides[active];
  return (
    <section className="wrap lk" aria-labelledby="b2bwork-title">
      {head()}
      <div className="lkr">
        <div className="lkr__stage">
          {slides.map((s, i) => (
            <div key={s.slug} className="lkr__slide" data-on={i === active} data-prev={i === prev}>
              <div><Image src={s.cover} alt={i === active ? s.alt : ""} fill sizes="(max-width: 900px) 100vw, 64vw" /></div>
            </div>
          ))}
        </div>
        <div className="lkr__side">
          <div className="lkr__text" key={p.slug}>
            <h3>{p.title}</h3>
            <p>{p.statement}</p>
            <dl>
              <div><dt>Materiał</dt><dd>{p.material}</dd></div>
              <div><dt>Zakres</dt><dd>{p.scope}</dd></div>
            </dl>
            <Link href={`/realizacje/${p.slug}`} className="ulink">Zobacz realizację <Arrow /></Link>
          </div>
          <div className="lkr__nav">
            <ul>
              {slides.map((s, i) => (
                <li key={s.slug}>
                  <button type="button" aria-current={i === active} onClick={() => set(i)}>{s.title}</button>
                </li>
              ))}
            </ul>
            <Controls go={go} label="Przewijanie realizacji" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Tape({ slides }: { slides: readonly Project[] }) {
  const track = useRef<HTMLDivElement>(null);
  const drag = useRef<{ x: number; left: number } | null>(null);
  const go = (d: number) => {
    const t = track.current;
    if (!t) return;
    const card = t.querySelector<HTMLElement>(".lkt__item");
    t.scrollBy({ left: d * ((card?.offsetWidth ?? 400) + 16), behavior: "smooth" });
  };
  return (
    <section className="lk lkt-sec" aria-labelledby="b2bwork-title">
      <div className="wrap">{head(<Controls go={go} label="Przewijanie realizacji" />)}</div>
      <div
        className="lkt"
        ref={track}
        data-lenis-prevent-horizontal
        onPointerDown={(e) => {
          if (e.pointerType !== "mouse") return;
          drag.current = { x: e.clientX, left: track.current!.scrollLeft };
          track.current!.dataset.drag = "true";
        }}
        onPointerMove={(e) => {
          if (!drag.current) return;
          track.current!.scrollLeft = drag.current.left - (e.clientX - drag.current.x);
        }}
        onPointerUp={() => { drag.current = null; delete track.current!.dataset.drag; }}
        onPointerLeave={() => { drag.current = null; if (track.current) delete track.current.dataset.drag; }}
      >
        {slides.map((p, i) => (
          <ProjectCard key={p.slug} project={p} className={`lkt__item lkt__item--${i % 3}`} sizes="(max-width: 900px) 80vw, 40vw" detail />
        ))}
      </div>
    </section>
  );
}

export function LokalSlider({ picks, slides }: Props) {
  const look = usePreview("lokal");
  if (look === "b") return <Peek slides={slides} />;
  if (look === "c") return <Roll slides={slides} />;
  if (look === "d") return <Tape slides={slides} />;
  return (
    <section className="wrap" style={{ paddingBottom: "clamp(4.5rem, 12vh, 9rem)" }} aria-labelledby="b2bwork-title">
      {head()}
      <div className="pgrid" style={{ paddingBottom: 0, gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
        {picks.map((p) => <ProjectCard key={p.slug} project={p} detail sizes="(max-width: 900px) 100vw, 50vw" />)}
      </div>
    </section>
  );
}
