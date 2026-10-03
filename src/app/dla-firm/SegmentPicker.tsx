"use client";

import Image from "next/image";
import { useState } from "react";
import { segments } from "@/data/b2b";

export function SegmentPicker() {
  const [active, setActive] = useState(0);

  return (
    <section className="dip wrap dip--flip" aria-labelledby="seg-title">
      <div className="dip__text">
        <div className="sec-head">
          <h2 className="h2" id="seg-title">Z kim pracuję</h2>
          <p>Wybierz, co jest Wam najbliższe.</p>
        </div>
        <div className="seg" role="tablist" aria-label="Rodzaje klientów biznesowych">
          {segments.map((s, i) => (
            <button
              type="button"
              key={s.t}
              role="tab"
              className="seg__item"
              aria-selected={i === active}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onClick={() => setActive(i)}
            >
              <h3>{s.t}</h3>
              <p><span><span>{s.d}</span></span></p>
            </button>
          ))}
        </div>
      </div>
      <div className="dip__media dip__media--tall">
        {segments.map((s, i) => (
          <div className={`media seg__pic${i === active ? " is-on" : ""}`} key={s.t} aria-hidden={i !== active}>
            <Image src={s.img} alt="" fill sizes="(max-width: 900px) 100vw, 50vw" />
          </div>
        ))}
      </div>
    </section>
  );
}
