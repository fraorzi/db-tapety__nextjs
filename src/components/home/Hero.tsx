"use client";

import Link from "next/link";
import { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { site, videos } from "@/data/site";
import { SquircleLink } from "@/components/Squircle";

const lines = ["Tapety kładzione", "tak, że szwu", "nie widać."];

export function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const video = root.current?.querySelector("video");
      gsap.timeline({ defaults: { ease: "expo.out" } })
        .from(".hero__video video", { scale: 1.1, duration: 2.4, ease: "power2.out" }, 0)
        .from(".line > span", { yPercent: 110, duration: 1.3, stagger: 0.1 }, 0.3)
        .from(".hero__side > *, .hero__tag", { opacity: 0, y: 12, duration: 1, stagger: 0.08 }, 0.8);

      // Następna sekcja nasuwa się na przyklejony hero; wideo cofa się i ciemnieje.
      const next = root.current?.nextElementSibling;
      if (!next) return;
      const st = { trigger: next, start: "top bottom", end: "top top", scrub: 0.8 } as const;
      gsap.to(".hero__video", { scale: 0.94, yPercent: -4, ease: "none", scrollTrigger: st });
      gsap.to(".hero__veil", { opacity: 0.55, ease: "none", scrollTrigger: st });
      gsap.to(".hero__copy, .hero__tag", { yPercent: -18, opacity: 0, ease: "none", scrollTrigger: { ...st, end: "top 45%" } });
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
          <source src={videos.hero} type="video/mp4" />
        </video>
      </div>
      <div className="hero__veil" aria-hidden="true" />
      <p className="hero__tag"><span>{site.tagline}</span><span>{site.region}</span></p>
      <div className="hero__copy">
        <h1 className="h-display hero__title" id="hero-title" aria-label={lines.join(" ")}>
          {lines.map((l) => (
            <span className="line" key={l} aria-hidden="true"><span>{l}</span></span>
          ))}
        </h1>
        <div className="hero__side">
          <p>Tapetowanie i przygotowanie ścian w mieszkaniach, domach i lokalach. Od pomiaru po ostatnie docięcie przy listwie.</p>
          <div className="hero__actions">
            <SquircleLink href="/wycena" className="btn">Bezpłatna wycena <span className="arr" aria-hidden="true">→</span></SquircleLink>
            <Link href="/realizacje" className="ulink">Zobacz realizacje</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
