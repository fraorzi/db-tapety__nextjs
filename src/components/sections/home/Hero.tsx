"use client";

import { useRef } from "react";
import { preload } from "react-dom";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { videos } from "@/data/site";
import { Arrow } from "@/components/ui/Arrow";
import { Button } from "@/components/ui/Button";
import { TextLink } from "@/components/ui/TextLink";
import { VideoSources } from "@/components/ui/VideoSources";

const lines = ["Tapety kładzione", "tak, że szwu", "nie widać."];

/**
 * Fold strony głównej: przyklejone wideo na cały ekran, tekst jako adnotacja w dolnej części.
 * Następna sekcja nasuwa się na hero; wideo cofa się i ciemnieje (tylko transform i opacity).
 */
export function Hero() {
  const root = useRef<HTMLElement>(null);
  const media = useRef<HTMLDivElement>(null);
  const veil = useRef<HTMLDivElement>(null);
  const copy = useRef<HTMLDivElement>(null);
  const side = useRef<HTMLDivElement>(null);
  preload(videos.heroPoster, { as: "image", fetchPriority: "high" });

  useGSAP(
    () => {
      const video = media.current?.querySelector("video");
      gsap.timeline({ defaults: { ease: "expo.out" } })
        .from(video ?? [], { scale: 1.1, duration: 2.4, ease: "power2.out" }, 0)
        .from("[data-hero-line]", { yPercent: 110, duration: 1.3, stagger: 0.1 }, 0.3)
        .from(side.current?.children ?? [], { opacity: 0, y: 12, duration: 1, stagger: 0.08 }, 0.8);

      // Następna sekcja nasuwa się na przyklejony hero; wideo cofa się i ciemnieje.
      const next = root.current?.nextElementSibling;
      if (!next) return;
      const st = { trigger: next, start: "top bottom", end: "top top", scrub: 0.8 } as const;
      gsap.to(media.current, { scale: 0.94, yPercent: -4, ease: "none", scrollTrigger: st });
      gsap.to(veil.current, { opacity: 0.55, ease: "none", scrollTrigger: st });
      gsap.to(copy.current, { yPercent: -18, opacity: 0, ease: "none", scrollTrigger: { ...st, end: "top 45%" } });
      ScrollTrigger.create({
        trigger: next, start: "top top",
        onEnter: () => video?.pause(), onLeaveBack: () => void video?.play().catch(() => {}),
      });
    },
    { scope: root },
  );

  return (
    <section className="sticky top-0 z-0 h-svh overflow-hidden tone-deep" ref={root} aria-labelledby="hero-title">
      <div ref={media} className="absolute inset-0 will-change-transform after:absolute after:inset-0 after:bg-hero-scrim">
        <video autoPlay muted loop playsInline preload="auto" poster={videos.heroPoster} aria-hidden="true">
          <VideoSources video={videos.hero} />
        </video>
      </div>
      <div ref={veil} className="pointer-events-none absolute inset-0 bg-scrim opacity-0" aria-hidden="true" />
      <div
        ref={copy}
        className="absolute inset-x-0 bottom-0 grid grid-cols-12 items-end gap-x-gutter gap-y-6 px-page pb-[clamp(1.75rem,5vh,3.5rem)] max-md:grid-cols-1 max-md:gap-y-5"
      >
        <h1
          className="col-span-8 text-display max-md:col-span-full max-md:text-[clamp(2.2rem,10.5vw,4rem)]"
          id="hero-title"
          aria-label={lines.join(" ")}
        >
          {lines.map((l) => (
            <span className="-mb-[0.08em] block overflow-hidden pb-[0.08em]" key={l} aria-hidden="true">
              <span className="block whitespace-nowrap" data-hero-line>{l}</span>
            </span>
          ))}
        </h1>
        <div ref={side} className="col-span-4 col-start-9 grid justify-items-start gap-[1.4rem] max-md:col-span-full">
          <p className="max-w-[30ch] text-on-media">
            Tapetuję i przygotowuję ściany w mieszkaniach, domach i lokalach usługowych. Pomagam też dobrać i zamówić tapetę.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <Button href="/realizacje">Zobacz realizacje <Arrow /></Button>
            <TextLink href="/dla-firm">Dla firm</TextLink>
          </div>
        </div>
      </div>
    </section>
  );
}
