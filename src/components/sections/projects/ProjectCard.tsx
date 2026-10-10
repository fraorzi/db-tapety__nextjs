import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";
import { Arrow } from "@/components/ui/Arrow";
import { Media, MediaZoom } from "@/components/ui/Media";
import { Separator } from "@/components/ui/Separator";

type Props = { project: Project; sizes?: string; priority?: boolean };

const caption = "font-display font-semibold font-stretch-78%";

/**
 * Karta w siatce /realizacje: pomieszczenie pionowo przy lewej krawędzi zdjęcia, tytuł i materiał pod spodem.
 * Wejście (WorkGrid): nakładka `data-card-cover` zjeżdża w bok, potem pojawia się podpis (`data-card-reveal`).
 * Hover: lekki zoom i strzałka przy tytule, która po wydłużeniu kończy się na krawędzi zdjęcia.
 */
export function ProjectCard({ project, sizes = "(max-width: 900px) 100vw, 50vw", priority }: Props) {
  return (
    <Link href={`/realizacje/${project.slug}`} className="group group/arrow block" data-card>
      <figure className="grid grid-cols-[auto_minmax(0,1fr)] gap-x-[0.85rem]">
        <Media className="col-start-2 row-start-1 aspect-[4/3]">
          <MediaZoom subtle>
            <Image src={project.cover} alt={project.alt} fill sizes={sizes} priority={priority} />
          </MediaZoom>
          <span data-card-cover className="pointer-events-none absolute inset-0 z-1 origin-right bg-paper" aria-hidden="true" />
        </Media>
        <figcaption className="contents">
          <span data-card-reveal className={`${caption} col-start-2 row-start-2 pt-3 pr-10 text-[clamp(1.35rem,1.8vw,1.6rem)] tracking-[-0.01em] opacity-0`}>
            {project.title}
          </span>
          <span data-card-reveal className={`${caption} col-start-1 row-start-1 rotate-180 self-end text-base tracking-[0.01em] text-muted opacity-0 [writing-mode:vertical-rl]`}>
            {project.room}
          </span>
          <small data-card-reveal className="col-start-2 row-start-3 pt-[0.2rem] text-sm text-muted opacity-0">
            {project.material}<Separator />{project.scope}
          </small>
          <span
            className="col-start-2 row-start-2 mt-3 mr-[6.5px] hidden -translate-x-[0.6rem] self-center justify-self-end text-[1.15rem] leading-0 opacity-0 transition-[opacity,translate] duration-[400ms,500ms] can-hover:block group-hover:translate-x-0 group-hover:opacity-100"
            aria-hidden="true"
          >
            <Arrow />
          </span>
        </figcaption>
      </figure>
    </Link>
  );
}
