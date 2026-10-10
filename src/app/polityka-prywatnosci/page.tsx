import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Polityka prywatności",
  description: "Informacja o przetwarzaniu danych osobowych przesyłanych przez formularz wyceny.",
  robots: { index: false },
};

/** Nagłówek punktu dokumentu. */
function DocHeading({ children }: { children: React.ReactNode }) {
  return <Heading level={3} as="h2" className="mt-6">{children}</Heading>;
}

// Szkic do uzupełnienia przez klienta (pola w <mark>). Przed publikacją warto skonsultować z prawnikiem.
export default function PolitykaPage() {
  return (
    <>
      <Section as="main" tone="paper" bleed spacing="none">
        {/* luki do uzupełnienia jako <mark> */}
        <Section as="article" grid spacing="top" className="gap-y-8 pb-section-lg [&_mark]:bg-paper-2 [&_mark]:px-[0.3rem] [&_mark]:text-ink">
          <Heading level={1} className="col-span-8 max-md:col-span-full">Polityka prywatności</Heading>
          <p className="col-span-3 col-start-10 text-md text-muted max-md:col-span-full">Obowiązuje od <mark>dd.mm.rrrr</mark></p>
          <div className="col-span-7 col-start-3 grid gap-5 max-md:col-span-full [&_li]:max-w-[65ch] [&_li]:text-muted [&_p]:max-w-[65ch] [&_p]:text-muted [&_ul]:grid [&_ul]:list-disc [&_ul]:gap-[0.4rem] [&_ul]:pl-[1.2rem]">
            <DocHeading>1. Administrator danych</DocHeading>
            <p>Administratorem danych jest <mark>{site.name}, nazwa firmy, adres, NIP</mark>. Kontakt: <mark>{site.email}</mark>, <mark>{site.phone}</mark>.</p>

            <DocHeading>2. Jakie dane zbieram i po co</DocHeading>
            <p>Przez formularz wyceny i kontakt telefoniczny lub mailowy otrzymuję: imię, numer telefonu lub adres e-mail, miejscowość, opis prac oraz zdjęcia ścian, jeśli je dołączysz. Używam ich wyłącznie do przygotowania wyceny i kontaktu w sprawie zlecenia (art. 6 ust. 1 lit. b RODO — działania przed zawarciem umowy) oraz, po jego realizacji, do rozliczenia i ewentualnych reklamacji (art. 6 ust. 1 lit. c i f RODO).</p>

            <DocHeading>3. Jak długo przechowuję dane</DocHeading>
            <p>Dane z zapytań, które nie zakończyły się zleceniem, usuwam po <mark>12 miesiącach</mark>. Dane dotyczące wykonanych prac przechowuję przez okres wymagany przepisami podatkowymi i okres rękojmi.</p>

            <DocHeading>4. Komu przekazuję dane</DocHeading>
            <p>Dostawcom usług, z których korzystam przy obsłudze strony i poczty: <mark>hosting strony, dostawca poczty e-mail, narzędzie formularza</mark>. Nie sprzedaję danych ani nie przekazuję ich do celów marketingowych.</p>

            <DocHeading>5. Pliki cookies i statystyki</DocHeading>
            <p>Strona <mark>nie używa / używa</mark> plików cookies do statystyk odwiedzin. <mark>Jeśli używa: nazwa narzędzia, zakres danych, podstawa prawna, sposób wyrażenia zgody.</mark> Treści multimedialne mogą być ładowane z serwerów zewnętrznych (zdjęcia, wideo), które widzą Twój adres IP.</p>

            <DocHeading>6. Twoje prawa</DocHeading>
            <ul>
              <li>dostęp do danych i ich kopii,</li>
              <li>sprostowanie, usunięcie lub ograniczenie przetwarzania,</li>
              <li>sprzeciw wobec przetwarzania opartego na uzasadnionym interesie,</li>
              <li>przeniesienie danych,</li>
              <li>skarga do Prezesa Urzędu Ochrony Danych Osobowych.</li>
            </ul>
            <p>Żeby skorzystać z tych praw, napisz na <mark>{site.email}</mark>.</p>

            <DocHeading>7. Zmiany</DocHeading>
            <p>Jeśli zmienię sposób przetwarzania danych, zaktualizuję ten dokument i datę na górze strony.</p>
          </div>
        </Section>
      </Section>
      <Footer />
    </>
  );
}
