import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import { cn } from "@/lib/cn";
import { Arrow } from "@/components/ui/Arrow";
import { Media, MediaZoom } from "@/components/ui/Media";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TextLink } from "@/components/ui/TextLink";
import { WorkMotion } from "./WorkMotion";

const picks = [projects[0], projects[3], projects[1], projects[4]];

/** Miejsce kafla w mozaice 12 kolumn (desktop) / 2 kolumn (mobile). */
const tiles = [
  "col-span-7 row-span-2 max-md:col-span-full max-md:row-auto max-md:aspect-[4/3]",
  "col-span-5 col-start-8 max-md:col-auto max-md:aspect-[4/5]",
  "col-span-5 col-start-8 max-md:col-auto max-md:aspect-[4/5]",
  "col-span-9 col-start-4 max-md:col-span-full max-md:aspect-[4/3]",
];

/** Wybrane realizacje w mozaice ze szwem jak między pasami; podpis jako etykieta wcięta w róg. Wejście i paralaksa w WorkMotion. */
export function Work() {
  return (
    <section className="relative z-1 bg-paper px-page py-section-lg" aria-labelledby="work-title">
      <div className="flex items-end justify-between gap-8 max-md:flex-col max-md:items-start max-md:gap-4">
        <SectionHeading id="work-title" title="Wybrane realizacje" />
        <TextLink href="/realizacje">Wszystkie realizacje</TextLink>
      </div>
      <div
        data-mosaic
        className="group/wm mt-stack grid auto-rows-[clamp(13rem,20vw,19rem)] grid-cols-12 gap-2 max-md:auto-rows-auto max-md:grid-cols-2"
      >
        {picks.map((p, i) => (
          <Link
            key={p.slug}
            href={`/realizacje/${p.slug}`}
            data-tile
            className={cn(
              "group relative block overflow-hidden transition-opacity duration-500",
              // przy hoverze jednego kafla pozostałe przygasają
              "can-hover:group-has-[[data-tile]:hover]/wm:[&:not(:hover)]:opacity-45",
              tiles[i],
            )}
          >
            <Media fill>
              <MediaZoom>
                <Image src={p.cover} alt={p.alt} fill sizes={i === 0 ? "(max-width: 900px) 100vw, 58vw" : "(max-width: 900px) 100vw, 42vw"} />
              </MediaZoom>
            </Media>
            <span data-tile-label className="absolute bottom-0 left-0 z-1 grid gap-[0.15rem] bg-paper px-[1.1rem] pt-3 pb-[0.7rem] text-md max-md:px-3 max-md:py-[0.55rem] max-md:text-sm">
              <b className="font-display text-[1.05rem] font-semibold font-stretch-78%">{p.title}</b>
              <span className="text-muted">{p.room}</span>
            </span>
            {/* nakładka w kolorze papieru: zjeżdża w bok przy wejściu (WorkMotion), jak odklejany pas */}
            <span data-tile-cover className="pointer-events-none absolute inset-0 z-2 origin-right bg-paper transform-[scaleX(0)]" aria-hidden="true" />
          </Link>
        ))}
        <Link
          href="/realizacje"
          className="col-span-3 col-start-1 row-start-3 flex flex-col justify-between bg-deep p-[clamp(1.2rem,2vw,1.8rem)] font-display text-[clamp(1.2rem,1.8vw,1.7rem)] leading-[1.05] font-semibold font-stretch-78% text-on-deep transition-colors duration-300 hover:bg-deep-2 max-md:col-span-full max-md:row-auto max-md:min-h-20 max-md:flex-row max-md:items-center"
        >
          <span>Wszystkie realizacje</span>
          <Arrow className="self-start text-[1.6em] max-md:self-center" />
        </Link>
      </div>
      <WorkMotion />
    </section>
  );
}
