"use client";

import { useRef } from "react";
import { flow } from "@/data/b2b";
import { gsap, useGSAP } from "@/lib/gsap";
import { usePreview } from "@/preview/store";

const head = (
  <div className="sec-row">
    <div className="sec-head">
      <h2 className="h2" id="flow-title">Od zapytania do faktury</h2>
      <p>Pięć kroków. Na każdym wiecie, co się dzieje i kiedy.</p>
    </div>
  </div>
);

function FlowTrack() {
  return (
    <section className="deep flow wrap bands-t bands-b" aria-labelledby="flow-title">
      {head}
      <ol className="flow__track">
        {flow.map((f) => (
          <li className="flow__step" key={f.t}>
            <h3>{f.t}</h3>
            <p>{f.d}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

function FlowStairs() {
  return (
    <section className="deep flow wrap bands-t bands-b" aria-labelledby="flow-title">
      {head}
      <ol className="fst">
        {flow.map((f, i) => (
          <li className="fst__step" key={f.t} style={{ "--i": i } as React.CSSProperties}>
            <h3>{f.t}</h3>
            <p>{f.d}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

function FlowGantt() {
  const root = useRef<HTMLElement>(null);
  useGSAP(
    () => {
      gsap.from(".fg__bar", {
        scaleX: 0, duration: 1.1, ease: "expo.out", stagger: 0.12,
        scrollTrigger: { trigger: ".fg", start: "top 75%", once: true },
      });
    },
    { scope: root },
  );

  return (
    <section className="deep flow wrap bands-t bands-b" ref={root} aria-labelledby="flow-title">
      {head}
      <ol className="fg">
        {flow.map((f, i) => (
          <li className="fg__row" key={f.t} style={{ "--i": i } as React.CSSProperties}>
            <div className="fg__text">
              <h3>{f.t}</h3>
              <p>{f.d}</p>
            </div>
            <div className="fg__lane" aria-hidden="true"><span className="fg__bar" /></div>
          </li>
        ))}
      </ol>
    </section>
  );
}

function FlowSheet() {
  const root = useRef<HTMLElement>(null);
  useGSAP(
    () => {
      gsap.utils.toArray<HTMLElement>(".fsh__row").forEach((row) => {
        gsap.fromTo(row.querySelector(".fsh__tick"), { scale: 0 }, {
          scale: 1, ease: "none",
          scrollTrigger: { trigger: row, start: "top 70%", end: "top 55%", scrub: 0.5 },
        });
      });
    },
    { scope: root },
  );

  return (
    <section className="deep flow wrap bands-t bands-b fsh-sec" ref={root} aria-labelledby="flow-title">
      <div className="fsh__intro">{head}</div>
      <div className="fsh">
        <div className="fsh__top">
          <span className="fsh__name">Zlecenie</span>
          <span>Jeden wykonawca · jedna wycena · faktura VAT</span>
        </div>
        <ol>
          {flow.map((f) => (
            <li className="fsh__row" key={f.t}>
              <span className="fsh__box" aria-hidden="true"><span className="fsh__tick" /></span>
              <h3>{f.t}</h3>
              <p>{f.d}</p>
            </li>
          ))}
        </ol>
        <div className="fsh__sign" aria-hidden="true">
          <span>Zleceniodawca</span>
          <span>Wykonawca</span>
        </div>
      </div>
    </section>
  );
}

export function Flow() {
  const look = usePreview("flow");
  if (look === "b") return <FlowStairs />;
  if (look === "c") return <FlowGantt />;
  if (look === "d") return <FlowSheet />;
  return <FlowTrack />;
}
