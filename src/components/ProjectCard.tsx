import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

type Props = { project: Project; className?: string; sizes?: string; priority?: boolean; detail?: boolean; look?: "a" | "b" | "c" | "d" };

export function ProjectCard({ project, className = "", sizes = "(max-width: 900px) 100vw, 50vw", priority, detail, look = "a" }: Props) {
  return (
    <Link href={`/realizacje/${project.slug}`} className={`proj proj--${look} ${className}`} data-reveal="clip">
      <figure>
        <div className="media">
          <Image src={project.cover} alt={project.alt} fill sizes={sizes} priority={priority} />
        </div>
        {look === "c" ? (
          <figcaption>
            <span className="proj__title">{project.title}</span>
            <dl className="proj__spec">
              <div><dt>Pomieszczenie</dt><dd>{project.room}</dd></div>
              <div><dt>Materiał</dt><dd>{project.material}</dd></div>
            </dl>
          </figcaption>
        ) : (
          <figcaption>
            <span>{project.title}</span>
            <span>{project.room}</span>
            {detail && <small>{project.material} · {project.scope}</small>}
          </figcaption>
        )}
      </figure>
    </Link>
  );
}
