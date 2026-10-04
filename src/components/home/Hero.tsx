"use client";

import Link from "next/link";
import { useRef } from "react";
import { preload } from "react-dom";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { videos } from "@/data/site";
import { VideoSources } from "@/components/VideoSources";
import { Arrow } from "@/components/Arrow";
import { usePreview } from "@/preview/store";

const copies = {
  a: {
    lines: ["Tapety kładzione", "tak, że szwu", "nie widać."],
    text: "Tapetowanie i przygotowanie ścian w mieszkaniach, domach i lokalach. Od pomiaru po ostatnie docięcie przy listwie.",
  },
  b: {
    lines: ["Kładę tapety.", "Tylko tapety."],
    text: "Mieszkania, domy i lokale. Sam mierzę, przygotowuję ścianę i sprzątam po sobie.",
  },
  c: {
    lines: ["Tapeta położona", "raz, porządnie."],
    text: "Przygotowanie ściany i montaż bez podwykonawców.",
  },
  d: {
    lines: ["Przygotuję ścianę", "i położę tapetę."],
    text: "Od pomiaru po docięcie przy listwie, zawsze ta sama osoba.",
  },
} as const;

export function Hero() {
  const root = useRef<HTMLElement>(null);
  const { lines, text } = copies[usePreview("copy")];
  const cta = usePreview("cta");
  preload(videos.heroPoster, { as: "image", fetchPriority: "high" });

  useGSAP(
    () => {
      const video = root.current?.querySelector("video");
      gsap.timeline({ defaults: { ease: "expo.out" } })
        .from(".hero__video video", { scale: 1.1, duration: 2.4, ease: "power2.out" }, 0)
        .from(".line > span", { yPercent: 110, duration: 1.3, stagger: 0.1 }, 0.3)
        .from(".hero__side > *", { opacity: 0, y: 12, duration: 1, stagger: 0.08 }, 0.8);

      // Następna sekcja nasuwa się na przyklejony hero; wideo cofa się i ciemnieje.
      const next = root.current?.nextElementSibling;
      if (!next) return;
      const st = { trigger: next, start: "top bottom", end: "top top", scrub: 0.8 } as const;
      gsap.to(".hero__video", { scale: 0.94, yPercent: -4, ease: "none", scrollTrigger: st });
      gsap.to(".hero__veil", { opacity: 0.55, ease: "none", scrollTrigger: st });
      gsap.to(".hero__copy", { yPercent: -18, opacity: 0, ease: "none", scrollTrigger: { ...st, end: "top 45%" } });
      ScrollTrigger.create({
        trigger: next, start: "top top",
        onEnter: () => video?.pause(), onLeaveBack: () => void video?.play().catch(() => {}),
      });
    },
    { scope: root },
  );

  return (
    <section className="hero" ref={root} aria-labelledby="hero-title">
      <div className="hero__video">
        <video autoPlay muted loop playsInline preload="auto" poster={videos.heroPoster} aria-hidden="true">
          <VideoSources video={videos.hero} />
        </video>
      </div>
      <div className="hero__veil" aria-hidden="true" />
      <div className="hero__copy">
        <h1 className="h-display hero__title" id="hero-title" aria-label={lines.join(" ")}>
          {lines.map((l) => (
            <span className="line" key={l} aria-hidden="true"><span>{l}</span></span>
          ))}
        </h1>
        <div className="hero__side">
          <p>{text}</p>
          <div className="hero__actions">
            {cta === "a" ? (
              <>
                <Link href="/wycena" className="btn">Bezpłatna wycena <Arrow /></Link>
                <Link href="/realizacje" className="ulink">Zobacz realizacje</Link>
              </>
            ) : (
              <>
                <Link href="/realizacje" className="btn">Zobacz realizacje <Arrow /></Link>
                <Link href="/dla-firm" className="ulink">Dla firm</Link>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
