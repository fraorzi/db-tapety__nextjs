import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { B2bHero } from "@/components/sections/b2b/B2bHero";
import { CallbackSection } from "@/components/sections/b2b/CallbackSection";
import { Flow } from "@/components/sections/b2b/Flow";
import { LokalSlider } from "@/components/sections/b2b/LokalSlider";
import { SegmentPicker } from "@/components/sections/b2b/SegmentPicker";
import { Terms } from "@/components/sections/b2b/Terms";
import { Section } from "@/components/ui/Section";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Dla firm",
  description: "Tapetowanie lokali, biur, apartamentów na wynajem i mieszkań deweloperskich. Praca poza godzinami, jedna wycena na całość, faktura VAT.",
};

const slides = [...projects].sort((a, b) => Number(b.category === "Lokal") - Number(a.category === "Lokal"));

export default function DlaFirmPage() {
  return (
    <>
      <Section as="main" tone="paper" bleed spacing="none">
        <B2bHero />
        <SegmentPicker />
        <Flow />
        <Terms />
        <LokalSlider slides={slides} />
        <CallbackSection />
      </Section>
      <Footer title="Macie lokal do zrobienia?" text="Wyślijcie rzuty albo zdjęcia, odpiszę z wyceną i harmonogramem." cta={{ href: "/wycena", label: "Zapytaj o wycenę" }} />
    </>
  );
}
