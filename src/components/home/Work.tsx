import Image from "next/image";
import Link from "next/link";
import { Arrow } from "@/components/Arrow";
import { projects } from "@/data/projects";
import { WorkMotion } from "./WorkMotion";

const picks = [projects[0], projects[3], projects[1], projects[4]];

export function Work() {
  return (
    <section className="surface work wrap" aria-labelledby="work-title">
      <div className="sec-row">
        <div className="sec-head">
          <h2 className="h2" id="work-title">Wybrane realizacje</h2>
          <p>Zdjęcia zastępcze ze stocku. Docelowo tu trafią realizacje klienta.</p>
        </div>
        <Link href="/realizacje" className="ulink">Wszystkie realizacje</Link>
      </div>
      <div className="wm">
        {picks.map((p, i) => (
          <Link key={p.slug} href={`/realizacje/${p.slug}`} className={`proj wm__item wm${i + 1}`}>
            <div className="media"><span className="media__zoom"><Image src={p.cover} alt={p.alt} fill sizes={i === 0 ? "(max-width: 900px) 100vw, 58vw" : "(max-width: 900px) 100vw, 42vw"} /></span></div>
            <span className="wm__label"><b>{p.title}</b><span>{p.room}</span></span>
            <span className="wm__cover" aria-hidden="true" />
          </Link>
        ))}
        <Link href="/realizacje" className="wm__more">
          <span>Wszystkie realizacje</span>
          <Arrow />
        </Link>
      </div>
      <WorkMotion />
    </section>
  );
}
