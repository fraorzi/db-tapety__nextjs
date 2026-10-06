import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";
import { Arrow } from "@/components/Arrow";

type Props = { project: Project; sizes?: string; priority?: boolean };

export function ProjectCard({ project, sizes = "(max-width: 900px) 100vw, 50vw", priority }: Props) {
  return (
    <Link href={`/realizacje/${project.slug}`} className="proj">
      <figure>
        <div className="media">
          <span className="media__zoom">
            <Image src={project.cover} alt={project.alt} fill sizes={sizes} priority={priority} />
          </span>
          <span className="pcover" aria-hidden="true" />
        </div>
        <figcaption>
          <span>{project.title}</span>
          <span>{project.room}</span>
          <small>{project.material}<span className="sep" aria-hidden="true" />{project.scope}</small>
          <span className="proj__go" aria-hidden="true"><Arrow /></span>
        </figcaption>
      </figure>
    </Link>
  );
}
