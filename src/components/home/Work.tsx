import Image from "next/image";
import Link from "next/link";
import { Arrow } from "@/components/Arrow";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { Variant } from "@/preview/store";
import { WorkColumns, WorkTrack } from "./WorkMotion";

const picks = [projects[0], projects[3], projects[1], projects[4]];
const pos = ["wp1", "wp2", "wp3", "wp4"];

const head = (
  <div className="sec-row">
    <div className="sec-head">
      <h2 className="h2" id="work-title">Wybrane realizacje</h2>
      <p>Zdjęcia zastępcze ze stocku. Docelowo tu trafią realizacje klienta.</p>
    </div>
    <Link href="/realizacje" className="ulink">Wszystkie realizacje</Link>
  </div>
);

function WorkScatter() {
  return (
    <section className="surface work wrap work--tight" aria-labelledby="work-title">
      {head}
      <div className="grid12 work__list">
        {picks.map((p, i) => (
          <ProjectCard key={p.slug} project={p} className={pos[i]} sizes={i === 0 ? "(max-width: 900px) 100vw, 58vw" : "(max-width: 900px) 100vw, 40vw"} />
        ))}
        <div className="work__more">
          <Link href="/realizacje" className="btn btn--soft">Wszystkie realizacje <Arrow /></Link>
        </div>
      </div>
    </section>
  );
}

function WorkMosaic() {
  return (
    <section className="surface work wrap" aria-labelledby="work-title">
      {head}
      <div className="wm">
        {picks.map((p, i) => (
          <Link key={p.slug} href={`/realizacje/${p.slug}`} className={`proj wm__item wm${i + 1}`} data-reveal="clip">
            <div className="media"><Image src={p.cover} alt={p.alt} fill sizes={i === 0 ? "(max-width: 900px) 100vw, 58vw" : "(max-width: 900px) 100vw, 42vw"} /></div>
            <span className="wm__label"><b>{p.title}</b><span>{p.room}</span></span>
          </Link>
        ))}
        <Link href="/realizacje" className="wm__more">
          <span>Wszystkie realizacje</span>
          <Arrow />
        </Link>
      </div>
    </section>
  );
}

export function Work() {
  return (
    <Variant
      group="work"
      options={{
        a: <WorkScatter />,
        b: <WorkMosaic />,
        c: <WorkTrack head={head} projects={picks} />,
        d: <WorkColumns head={head} projects={picks} />,
      }}
    />
  );
}
