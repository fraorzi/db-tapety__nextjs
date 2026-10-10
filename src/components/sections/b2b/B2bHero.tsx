import { site, videos } from "@/data/site";
import { Arrow } from "@/components/ui/Arrow";
import { Button } from "@/components/ui/Button";
import { TextLink } from "@/components/ui/TextLink";
import { VideoSources } from "@/components/ui/VideoSources";

/** Dyptyk na wejście /dla-firm: tekst z CTA po lewej, wideo z pracy po prawej. */
export function B2bHero() {
  return (
    <section className="grid grid-cols-12 items-center gap-x-gutter gap-y-10 px-page pt-page-top pb-section">
      <div className="col-span-6 grid content-center gap-6 max-md:col-span-full">
        <h1 className="text-[clamp(2.6rem,4.4vw_+_0.5rem,4.8rem)] leading-[0.96]">Tapetowanie dla firm bez zamykania lokalu.</h1>
        <p className="max-w-[40ch] text-lead text-muted">
          Lokale usługowe, biura, apartamenty na wynajem i mieszkania pod klucz. Pracuję po godzinach, wyceniam całe zlecenie naraz, a terminy ustalamy na piśmie.
        </p>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
          <Button href="/wycena">Zapytaj o wycenę <Arrow /></Button>
          <TextLink href={site.phoneHref}>{site.phone}</TextLink>
        </div>
      </div>
      <div className="relative col-span-5 col-start-8 aspect-[4/5] max-md:col-span-full max-md:aspect-[4/3]">
        <video className="absolute inset-0 overflow-hidden bg-paper-2" autoPlay muted loop playsInline preload="metadata" aria-hidden="true">
          <VideoSources video={videos.process[1]} />
        </video>
      </div>
    </section>
  );
}
