import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";
import { Squircle } from "./Squircle";

type Props = { project: Project; className?: string; sizes?: string; priority?: boolean; detail?: boolean };

export function ProjectCard({ project, className = "", sizes = "(max-width: 900px) 100vw, 50vw", priority, detail }: Props) {
  return (
    <Link href={`/realizacje/${project.slug}`} className={`proj ${className}`} data-reveal="clip">
      <Squircle as="span" radius={18} className="proj__fill" aria-hidden="true" />
      <figure>
        <div className="media">
          <Image src={project.cover} alt={project.alt} fill sizes={sizes} priority={priority} />
        </div>
        <figcaption>
          <span>{project.title}</span>
          <span>{project.room}</span>
          {detail && <small>{project.material} · {project.scope}</small>}
        </figcaption>
      </figure>
    </Link>
  );
}
