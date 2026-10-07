"use client";

import Link from "next/link";
import { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { Frame } from "./Frame";
import { Arrow } from "./Arrow";
import { VideoSources } from "./VideoSources";
import type { Video } from "@/data/site";

export type Step = {
  title: string;
  text: string;
  /** Wariant full: co klient dostaje po etapie. */
  outcome?: string;
  /** Wariant full: orientacyjny czas. */
  time?: string;
};

type Props = {
  title: string;
  intro?: string;
  steps: readonly Step[];
  videos: readonly Video[];
  cta?: { href: string; label: string };
  id?: string;
  variant: "compact" | "full";
};

/**
 * Jeden koncept, dwa warianty:
 *  - compact (strona główna): ciemne tło, wideo po lewej, po prawej lista etapów;
 *    kliknięcie etapu rozwija go i przełącza wideo.
 *  - full (/jak-pracuje): jasne tło, tekst po lewej z faktami, wideo po prawej z licznikiem etapów
 *    (jedyna numeracja w witrynie: pięć etapów po ekranie każdy, licznik mówi, gdzie jesteś);
 *    każdy etap ma własną wysokość ekranu.
 */
export function ProcessPinned({ title, intro, steps, videos, cta, id = "proces", variant }: Props) {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const items = gsap.utils.toArray<HTMLElement>("[data-step]");
      const vids = gsap.utils.toArray<HTMLVideoElement>(".proc__media video");
      const counter = root.current?.querySelector<HTMLElement>("[data-counter]");
      let current = -1;
      const setStep = (i: number) => {
        if (i === current) return;
        current = i;
        items.forEach((s, j) => {
          s.classList.toggle("is-on", j === i);
          s.querySelector("button")?.setAttribute("aria-expanded", String(j === i));
        });
        vids.forEach((v, j) => {
          v.classList.toggle("is-on", j === i);
          if (j === i) v.play().catch(() => {}); else v.pause();
        });
        if (counter) counter.textContent = String(i + 1).padStart(2, "0");
      };
      setStep(0);

      const offs: (() => void)[] = [];
      if (variant === "compact") {
        items.forEach((s, i) => {
          const btn = s.querySelector("button");
          const on = () => setStep(i);
          btn?.addEventListener("click", on);
          offs.push(() => btn?.removeEventListener("click", on));
        });
      } else {
        items.forEach((s, i) =>
          ScrollTrigger.create({ trigger: s, start: "top 55%", end: "bottom 55%", onToggle: (self) => self.isActive && setStep(i) }),
        );
      }

      ScrollTrigger.create({
        trigger: root.current, start: "top 80%", end: "bottom top",
        onToggle: (self) => {
          const v = vids.find((x) => x.classList.contains("is-on"));
          if (!v) return;
          if (self.isActive) v.play().catch(() => {}); else v.pause();
        },
      });

      return () => offs.forEach((off) => off());
    },
    { scope: root, dependencies: [variant, steps.length] },
  );

  const media = (className: string, children?: React.ReactNode) => (
    <div className={`${className} proc__media`} aria-hidden="true">
      {videos.map((video, i) => (
        <video key={i} muted loop playsInline preload={i === 0 ? "auto" : "metadata"} className={i === 0 ? "is-on" : undefined}>
          <VideoSources video={video} />
        </video>
      ))}
      {children}
    </div>
  );

  if (variant === "compact") {
    return (
      <section className="surface deep pc wrap bands-t bands-b" id={id} ref={root} aria-labelledby={`${id}-title`}>
        <div className="pc__pin">
          <Frame className="pc__frame">{media("pc__media")}</Frame>
          <div className="pc__text">
            <div className="sec-head">
              <h2 className="h2" id={`${id}-title`}>{title}</h2>
              {intro && <p>{intro}</p>}
            </div>
            <ol className="pc__list">
              {steps.map((s, i) => (
                <li className="pc__item" data-step key={s.title}>
                  <h3><button type="button" aria-expanded={i === 0} aria-controls={`${id}-step-${i}`}>{s.title}<span className="pc__icon" aria-hidden="true" /></button></h3>
                  <div className="pc__more" id={`${id}-step-${i}`}><div><p>{s.text}</p></div></div>
                </li>
              ))}
            </ol>
            {cta && (
              <Link href={cta.href} className="btn btn--light" style={{ justifySelf: "start" }}>
                {cta.label} <Arrow />
              </Link>
            )}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="surface section wrap" id={id} ref={root} aria-labelledby={`${id}-title`}>
      <div className="sec-row">
        <div className="sec-head">
          <h2 className="h2" id={`${id}-title`}>{title}</h2>
          {intro && <p>{intro}</p>}
        </div>
      </div>
      <div className="grid12 pf__body" style={{ marginTop: "clamp(2.5rem, 7vh, 4rem)" }}>
        <ol className="pf__steps">
          {steps.map((s) => (
            <li className="pf__step" data-step key={s.title}>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              {(s.outcome || s.time) && (
                <dl className="pf__facts">
                  {s.outcome && <div><dt>Co dostajesz</dt><dd>{s.outcome}</dd></div>}
                  {s.time && <div><dt>Czas</dt><dd>{s.time}</dd></div>}
                </dl>
              )}
            </li>
          ))}
        </ol>
        <Frame className="pf__frame">
          {media(
            "pf__media",
            <div className="pf__counter"><span className="num" data-counter>01</span><span>/ {String(steps.length).padStart(2, "0")}</span></div>,
          )}
        </Frame>
      </div>
      {cta && (
        <div className="grid12" style={{ marginTop: "clamp(2rem, 6vh, 3.5rem)" }}>
          <div style={{ gridColumn: "1 / span 5" }}>
            <Link href={cta.href} className="btn">{cta.label} <Arrow /></Link>
          </div>
        </div>
      )}
    </section>
  );
}
