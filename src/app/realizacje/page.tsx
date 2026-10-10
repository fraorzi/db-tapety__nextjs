import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { PageIntro } from "@/components/layout/PageIntro";
import { WorkGrid } from "@/components/sections/projects/WorkGrid";
import { Section } from "@/components/ui/Section";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Realizacje",
  description: "Tapetowanie salonów, sypialni, łazienek, kuchni i lokali. Zobacz, jak wyglądają ściany po skończonej pracy.",
};

export default function RealizacjePage() {
  return (
    <>
      <Section as="main" tone="paper" bleed spacing="none">
        <Section spacing="top">
          <PageIntro title="Gotowe ściany.">
            Mieszkania, domy i lokale. Przy każdej realizacji opis materiału i tego, co trzeba było zrobić ze ścianą.
          </PageIntro>
          <WorkGrid projects={projects} />
        </Section>
      </Section>
      <Footer title="Chcesz podobną ścianę?" text="Napisz, jaki wzór Ci się podoba. Policzę rolki, sprawdzę podłoże i podam termin." />
    </>
  );
}
