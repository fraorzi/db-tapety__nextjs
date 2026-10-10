import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { QuoteForm } from "@/components/sections/quote/QuoteForm";
import { TextLink } from "@/components/ui/TextLink";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Wycena",
  description: "Wyślij zdjęcie ściany, przybliżone wymiary i wzór, który Ci się podoba. Odpiszę z orientacyjnym kosztem i terminem.",
};

type Props = { searchParams: Promise<{ tel?: string }> };

export default async function WycenaPage({ searchParams }: Props) {
  const { tel } = await searchParams;
  return (
    <>
      <main className="relative z-1 bg-paper px-page">
        <section className="grid grid-cols-12 gap-x-gutter gap-y-12 pt-page-top">
          <aside className="sticky top-[6.5rem] col-span-4 grid gap-7 self-start max-md:static max-md:col-span-full">
            <h1 className="text-[clamp(2.6rem,5vw,5rem)] leading-[0.96] wrap-normal">Bezpłatna wycena</h1>
            <p className="max-w-[30ch] text-lead text-muted">
              Wypełnienie zajmuje dwie minuty. Odpisuję z orientacyjnym kosztem i terminem, ostateczna cena po oględzinach.
            </p>
            <dl className="grid gap-4 border-t border-rule pt-5 text-md">
              <div><dt className="text-muted">Co dołączyć</dt><dd>Zdjęcie ściany w dziennym świetle, przybliżone wymiary, wzór lub link do tapety.</dd></div>
              <div><dt className="text-muted">Wolisz zadzwonić?</dt><dd><TextLink href={site.phoneHref}>{site.phone}</TextLink></dd></div>
              <div><dt className="text-muted">Albo napisać</dt><dd><TextLink href={site.emailHref}>{site.email}</TextLink></dd></div>
            </dl>
          </aside>
          <QuoteForm defaultContact={tel} />
        </section>
        <div className="h-[clamp(6rem,16vh,10rem)]" />
      </main>
      <Footer title="Wolisz najpierw zobaczyć, co robię?" text="Każda z opisem materiału i zakresu prac." cta={{ href: "/realizacje", label: "Zobacz realizacje" }} />
    </>
  );
}
