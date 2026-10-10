import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { projects } from "@/data/projects";
import { WorkGrid } from "./WorkGrid";

export const metadata: Metadata = {
  title: "Realizacje",
  description: "Tapetowanie salonów, sypialni, łazienek, kuchni i lokali. Zobacz, jak wyglądają ściany po skończonej pracy.",
};

export default function RealizacjePage() {
  return (
    <>
      <main className="surface">
        <section className="phero">
          <div className="grid12 phero__top">
            <h1 className="h-display">Gotowe ściany.</h1>
            <p>Mieszkania, domy i lokale. Przy każdej realizacji opis materiału i tego, co trzeba było zrobić ze ścianą.</p>
          </div>
          <div className="wrap" style={{ paddingInline: 0 }}>
            <WorkGrid projects={projects} />
          </div>
        </section>
      </main>
      <Footer title="Chcesz podobną ścianę?" text="Napisz, jaki wzór Ci się podoba. Policzę rolki, sprawdzę podłoże i podam termin." />
    </>
  );
}
