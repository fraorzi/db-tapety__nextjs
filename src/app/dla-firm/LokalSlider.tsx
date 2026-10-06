"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Chevron } from "@/components/Chevron";
import type { Project } from "@/data/projects";

export function LokalSlider({ slides }: { slides: readonly Project[] }) {
  const [active, setActive] = useState(0);
  const n = slides.length;
  const go = (d: number) => setActive((x) => (x + d + n) % n);

  return (
    <section className="wrap lk" aria-labelledby="b2bwork-title">
      <div className="sec-row">
        <div className="sec-head">
          <h2 className="h2" id="b2bwork-title">Realizacje w lokalach</h2>
        </div>
        <div className="aud__ctrl">
          <button type="button" className="btn btn--soft btn--icon" aria-label="Poprzednia realizacja" onClick={() => go(-1)}><Chevron dir="left" /></button>
          <button type="button" className="btn btn--soft btn--icon" aria-label="Następna realizacja" onClick={() => go(1)}><Chevron dir="right" /></button>
        </div>
      </div>
      <div className="lkp" aria-live="polite">
        {slides.map((p, i) => {
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
                <span>{p.room}<span className="sep" aria-hidden="true" />{p.material}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
