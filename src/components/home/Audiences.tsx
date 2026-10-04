"use client";

import Image from "next/image";
import Link from "next/link";
import { useId, useRef, useState } from "react";
import { audiences } from "@/data/home";

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
    <section className="surface aud wrap" aria-labelledby="aud-title">
      <div className="aud__top">
        <div className="sec-head">
          <h2 className="h2" id="aud-title">Dla kogo pracuję</h2>
          <p>Wybierz, co jest najbliżej Twojej sytuacji.</p>
        </div>
        <div className="aud__ctrl">
          <button type="button" className="btn btn--soft btn--icon" aria-label="Poprzedni" onClick={() => go(-1)}>←</button>
          <button type="button" className="btn btn--soft btn--icon" aria-label="Następny" onClick={() => go(1)}>→</button>
        </div>
      </div>
      <div className="aud__track">
        {audiences.map((a, i) => {
          const on = i === active;
          return (
            <article key={a.t} className={on ? "aud__panel is-on" : "aud__panel"}>
              <Image src={a.img} alt="" fill sizes="(max-width: 900px) 100vw, 60vw" priority={i === 0} />
              <button
                ref={(el) => { buttons.current[i] = el; }}
                type="button"
                className="aud__toggle"
                aria-expanded={on}
                aria-controls={`${id}-${i}`}
                onClick={() => setActive(i)}
                onKeyDown={(e) => {
                  if (e.key === "ArrowRight" || e.key === "ArrowDown") { e.preventDefault(); focusPanel((i + 1) % n); }
                  if (e.key === "ArrowLeft" || e.key === "ArrowUp") { e.preventDefault(); focusPanel((i - 1 + n) % n); }
                }}
              >
                <span className="aud__vt">{a.t}</span>
              </button>
              <div className="aud__body" id={`${id}-${i}`} aria-hidden={!on}>
                <h3>{a.t}</h3>
                <p>{a.d}</p>
                <Link href={a.href} className="ulink" tabIndex={on ? 0 : -1}>{a.link} →</Link>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
