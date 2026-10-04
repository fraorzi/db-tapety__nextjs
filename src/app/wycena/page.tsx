import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { site } from "@/data/site";
import { QuoteForm } from "./QuoteForm";

export const metadata: Metadata = {
  title: "Wycena",
  description: "Wyślij zdjęcie ściany, przybliżone wymiary i wzór, który Ci się podoba. Odpiszę z orientacyjnym kosztem i terminem.",
};

type Props = { searchParams: Promise<{ tel?: string }> };

export default async function WycenaPage({ searchParams }: Props) {
  const { tel } = await searchParams;
  return (
    <>
      <main className="wrap surface">
        <section className="grid12 quote">
          <aside className="quote__aside">
            <h1 className="h-display">Bezpłatna wycena</h1>
            <p className="lead">Wypełnienie zajmuje dwie minuty. Odpisuję z orientacyjnym kosztem i terminem, ostateczna cena po oględzinach.</p>
            <dl>
              <div><dt>Co dołączyć</dt><dd>Zdjęcie ściany w dziennym świetle, przybliżone wymiary, wzór lub link do tapety.</dd></div>
              <div><dt>Wolisz zadzwonić?</dt><dd><a href={site.phoneHref} className="ulink">{site.phone}</a></dd></div>
              <div><dt>Albo napisać</dt><dd><a href={site.emailHref} className="ulink">{site.email}</a></dd></div>
            </dl>
          </aside>
          <QuoteForm defaultContact={tel} />
        </section>
        <div style={{ height: "clamp(6rem, 16vh, 10rem)" }} />
      </main>
      <Footer title="Wolisz najpierw zobaczyć, co robię?" text="Sześć realizacji z opisem materiału i zakresu prac." cta={{ href: "/realizacje", label: "Zobacz realizacje" }} />
    </>
  );
}
