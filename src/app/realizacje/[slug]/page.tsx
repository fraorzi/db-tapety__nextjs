import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { getProject, projects } from "@/data/projects";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const p = getProject((await params).slug);
  return p ? { title: p.title, description: p.statement } : {};
}

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) notFound();
  const idx = projects.indexOf(p);
  const next = projects[(idx + 1) % projects.length];

  return (
    <>
      <main className="surface">
        <article className="phero">
          <div className="grid12 phero__top">
            <h1 className="h-display">{p.title}</h1>
            <p>{p.room} · {p.category}</p>
          </div>
          <figure className="phero__media" data-reveal="clip">
            <div className="media"><Image src={p.cover} alt={p.alt} fill priority sizes="100vw" /></div>
          </figure>

          <dl className="pmeta">
            <div><dt>Zakres</dt><dd>{p.scope}</dd></div>
            <div><dt>Materiał</dt><dd>{p.material}</dd></div>
            <div><dt>Pomieszczenie</dt><dd>{p.room}</dd></div>
            <div><dt>Miejsce</dt><dd>{p.place}</dd></div>
            <div><dt>Czas pracy</dt><dd>Do uzupełnienia</dd></div>
          </dl>

          <div className="grid12 pbody">
            <h2 className="h2">{p.statement}</h2>
            <div className="ptext">{p.body.map((t) => <p key={t}>{t}</p>)}</div>
          </div>

          <div className="grid12 pgal">
            {p.gallery.map((src, i) => (
              <figure key={src} className={`proj g${i + 1}`} data-reveal="clip">
                <div className="media"><Image src={src} alt="" fill sizes="(max-width: 900px) 100vw, 60vw" /></div>
              </figure>
            ))}
          </div>

          <nav className="pnext" aria-label="Kolejna realizacja">
            <span className="muted">Następna realizacja</span>
            <Link href={`/realizacje/${next.slug}`}>{next.title} →</Link>
          </nav>
        </article>
        <div style={{ height: "clamp(4rem, 10vh, 7rem)" }} />
      </main>
      <Footer title="Chcesz podobną ścianę u siebie?" />
    </>
  );
}
