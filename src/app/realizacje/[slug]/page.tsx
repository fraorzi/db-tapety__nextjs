import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/layout/Footer";
import { PageIntro } from "@/components/layout/PageIntro";
import { Arrow } from "@/components/ui/Arrow";
import { Frame } from "@/components/ui/Frame";
import { Grid } from "@/components/ui/Grid";
import { Heading } from "@/components/ui/Heading";
import { Media, MediaZoom } from "@/components/ui/Media";
import { Section } from "@/components/ui/Section";
import { Separator } from "@/components/ui/Separator";
import { getProject, projects } from "@/data/projects";
import { cn } from "@/lib/cn";

type Params = { params: Promise<{ slug: string }> };

/** Galeria: trzy kadry w rytmie lewo, prawo niżej, środek. */
const gallery = [
  { figure: "col-span-5", media: "aspect-[4/5]" },
  { figure: "col-span-7 col-start-6 mt-[12vh]", media: "aspect-[5/4]" },
  { figure: "col-span-8 col-start-3", media: "aspect-video" },
];

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
      <Section as="main" tone="paper" bleed spacing="none">
        <Section as="article" spacing="top">
          <PageIntro title={p.title}>
            {p.room}<Separator />{p.category}
          </PageIntro>
          <figure className="relative mt-stack aspect-[21/9] max-md:aspect-[4/5]" data-reveal="clip">
            <Frame className="absolute inset-0">
              <Media><Image src={p.cover} alt={p.alt} fill priority sizes="100vw" /></Media>
            </Frame>
          </figure>

          <dl className="mt-[clamp(3rem,8vh,5rem)] border-t border-rule">
            {[["Zakres", p.scope], ["Materiał", p.material], ["Pomieszczenie", p.room]].map(([k, v]) => (
              <div key={k} className="grid grid-cols-[minmax(0,4fr)_minmax(0,8fr)] gap-x-gutter border-b border-rule py-4 text-md">
                <dt className="text-muted">{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>

          <Grid className="mt-stack-lg gap-y-6">
            <Heading level={2} className="col-span-7 max-w-[22ch] max-md:col-span-full">{p.statement}</Heading>
            <div className="col-span-4 col-start-9 grid content-start gap-5 text-muted max-md:col-span-full">
              {p.body.map((t) => <p key={t}>{t}</p>)}
            </div>
          </Grid>

          <Grid className="mt-stack-lg gap-y-gutter">
            {p.gallery.map((src, i) => (
              <figure key={src} className={cn("group", gallery[i].figure, "max-md:col-span-full max-md:mt-0")} data-reveal="clip">
                <Media className={gallery[i].media}>
                  <MediaZoom><Image src={src} alt="" fill sizes="(max-width: 900px) 100vw, 60vw" /></MediaZoom>
                </Media>
              </figure>
            ))}
          </Grid>

          <nav className="mt-section-lg flex flex-wrap items-baseline justify-between gap-8 border-t border-rule pt-5" aria-label="Kolejna realizacja">
            <span className="text-muted">Następna realizacja</span>
            <Heading as={Link} level={2} href={`/realizacje/${next.slug}`} className="font-stretch-normal tracking-[-0.035em]">
              {next.title} <Arrow />
            </Heading>
          </nav>
        </Section>
        <div className="h-[clamp(4rem,10vh,7rem)]" />
      </Section>
      <Footer title="Chcesz podobną ścianę u siebie?" />
    </>
  );
}
