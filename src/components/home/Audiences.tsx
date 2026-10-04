"use client";

import Image from "next/image";
import Link from "next/link";
import { useId, useState } from "react";
import { audiences } from "@/data/home";
import { Arrow } from "@/components/Arrow";

export function Audiences() {
  const [active, setActive] = useState(0);
  const id = useId();
  const n = audiences.length;
  const go = (d: number) => setActive((a) => (a + d + n) % n);

  return (
    <section className="surface aud wrap" aria-labelledby="aud-title">
      <div className="aud__top">
        <div className="sec-head">
          <h2 className="h2" id="aud-title">Dla kogo pracuję</h2>
          <p>Wybierz, co jest najbliżej Twojej sytuacji.</p>
        </div>
        <div className="aud__ctrl">
          <button type="button" className="btn btn--soft btn--icon" aria-label="Poprzedni" onClick={() => go(-1)}><Arrow dir="left" /></button>
          <button type="button" className="btn btn--soft btn--icon" aria-label="Następny" onClick={() => go(1)}><Arrow /></button>
        </div>
      </div>
      <div className="aud__track" role="tablist" aria-label="Rodzaje klientów">
        {audiences.map((a, i) => {
          const on = i === active;
          return (
            <article
              key={a.t}
              className="aud__panel"
              role="tab"
              aria-selected={on}
              aria-controls={`${id}-${i}`}
              tabIndex={on ? 0 : -1}
              onClick={() => setActive(i)}
              onKeyDown={(e: React.KeyboardEvent) => {
                if (e.key === "ArrowRight" || e.key === "ArrowDown") { e.preventDefault(); go(1); }
                if (e.key === "ArrowLeft" || e.key === "ArrowUp") { e.preventDefault(); go(-1); }
              }}
            >
              <Image src={a.img} alt="" fill sizes="(max-width: 900px) 100vw, 60vw" priority={i === 0} />
              <span className="aud__vt" aria-hidden="true">{a.t}</span>
              <div className="aud__body" id={`${id}-${i}`} role="tabpanel" aria-hidden={!on}>
                <h3>{a.t}</h3>
                <p>{a.d}</p>
                <Link href={a.href} className="ulink" tabIndex={on ? 0 : -1}>{a.link} <Arrow /></Link>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
