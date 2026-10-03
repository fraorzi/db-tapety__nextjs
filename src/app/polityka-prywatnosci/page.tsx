import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Polityka prywatności",
  description: "Informacja o przetwarzaniu danych osobowych przesyłanych przez formularz wyceny.",
  robots: { index: false },
};

// Szkic do uzupełnienia przez klienta (pola w <mark>). Przed publikacją warto skonsultować z prawnikiem.
export default function PolitykaPage() {
  return (
    <>
      <main className="surface">
        <article className="doc">
          <h1 className="h-display">Polityka prywatności</h1>
          <p className="doc__meta">Obowiązuje od <mark>dd.mm.rrrr</mark></p>
          <div className="doc__body">
            <h2>1. Administrator danych</h2>
            <p>Administratorem danych jest <mark>{site.name}, nazwa firmy, adres, NIP</mark>. Kontakt: <mark>{site.email}</mark>, <mark>{site.phone}</mark>.</p>

            <h2>2. Jakie dane zbieram i po co</h2>
            <p>Przez formularz wyceny i kontakt telefoniczny lub mailowy otrzymuję: imię, numer telefonu lub adres e-mail, miejscowość, opis prac oraz zdjęcia ścian, jeśli je dołączysz. Używam ich wyłącznie do przygotowania wyceny i kontaktu w sprawie zlecenia (art. 6 ust. 1 lit. b RODO — działania przed zawarciem umowy) oraz, po jego realizacji, do rozliczenia i ewentualnych reklamacji (art. 6 ust. 1 lit. c i f RODO).</p>

            <h2>3. Jak długo przechowuję dane</h2>
            <p>Dane z zapytań, które nie zakończyły się zleceniem, usuwam po <mark>12 miesiącach</mark>. Dane dotyczące wykonanych prac przechowuję przez okres wymagany przepisami podatkowymi i okres rękojmi.</p>

            <h2>4. Komu przekazuję dane</h2>
            <p>Dostawcom usług, z których korzystam przy obsłudze strony i poczty: <mark>hosting strony, dostawca poczty e-mail, narzędzie formularza</mark>. Nie sprzedaję danych ani nie przekazuję ich do celów marketingowych.</p>

            <h2>5. Pliki cookies i statystyki</h2>
            <p>Strona <mark>nie używa / używa</mark> plików cookies do statystyk odwiedzin. <mark>Jeśli używa: nazwa narzędzia, zakres danych, podstawa prawna, sposób wyrażenia zgody.</mark> Treści multimedialne mogą być ładowane z serwerów zewnętrznych (zdjęcia, wideo), które widzą Twój adres IP.</p>

            <h2>6. Twoje prawa</h2>
            <ul>
              <li>dostęp do danych i ich kopii,</li>
              <li>sprostowanie, usunięcie lub ograniczenie przetwarzania,</li>
              <li>sprzeciw wobec przetwarzania opartego na uzasadnionym interesie,</li>
              <li>przeniesienie danych,</li>
              <li>skarga do Prezesa Urzędu Ochrony Danych Osobowych.</li>
            </ul>
            <p>Żeby skorzystać z tych praw, napisz na <mark>{site.email}</mark>.</p>

            <h2>7. Zmiany</h2>
            <p>Jeśli zmienię sposób przetwarzania danych, zaktualizuję ten dokument i datę na górze strony.</p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
