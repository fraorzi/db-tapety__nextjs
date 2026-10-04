import Link from "next/link";
import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import { Audiences } from "@/components/home/Audiences";
import { ProcessPinned } from "@/components/ProcessPinned";
import { ProjectCard } from "@/components/ProjectCard";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { projects } from "@/data/projects";
import { processShort } from "@/data/process";
import { videos } from "@/data/site";

const picks = [projects[0], projects[3], projects[1], projects[4]];
const pos = ["wp1", "wp2", "wp3", "wp4"];

export default function HomePage() {
  return (
    <>
      <main>
        <Hero />
        <Services />

        <section className="surface work wrap" aria-labelledby="work-title">
          <div className="sec-row">
            <div className="sec-head">
              <h2 className="h2" id="work-title">Wybrane realizacje</h2>
              <p>Zdjęcia zastępcze ze stocku. Docelowo tu trafią realizacje klienta.</p>
            </div>
            <Link href="/realizacje" className="ulink">Wszystkie realizacje</Link>
          </div>
          <div className="grid12 work__list">
            {picks.map((p, i) => (
              <ProjectCard key={p.slug} project={p} className={pos[i]} sizes={i === 0 ? "(max-width: 900px) 100vw, 58vw" : "(max-width: 900px) 100vw, 40vw"} />
            ))}
            <div className="work__more">
              <Link href="/realizacje" className="btn btn--soft">Wszystkie realizacje <span className="arr" aria-hidden="true">→</span></Link>
            </div>
          </div>
        </section>

        <Audiences />

        <ProcessPinned
          variant="compact"
          title="Jak pracuję"
          intro="Cztery etapy, które decydują o tym, czy tapeta wygląda dobrze po pięciu latach."
          steps={processShort}
          videos={videos.process}
          cta={{ href: "/jak-pracuje", label: "Cały proces krok po kroku" }}
        />

        <Faq />
      </main>
      <Footer />
    </>
  );
}
