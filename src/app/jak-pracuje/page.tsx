import Link from "next/link";
import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { ProcessPinned } from "@/components/ProcessPinned";
import { WallLayers } from "@/components/WallLayers";
import { processSteps } from "@/data/process";
import { videos } from "@/data/site";
import { Arrow } from "@/components/Arrow";

export const metadata: Metadata = {
  title: "Jak pracuję",
  description: "Pięć etapów tapetowania: oględziny i pomiar, dobór wzoru, przygotowanie ściany, montaż, odbiór. Co przygotować przed przyjazdem wykonawcy.",
};

const checklist = [
  { t: "Dostęp do ściany", d: "Odsuń meble na około metr od ściany albo daj znać, że mam to zrobić. Doliczę czas." },
  { t: "Zdjęte obrazy, półki, karnisze", d: "Co da się zdjąć, warto zdjąć wcześniej. Gniazdka i włączniki zostawiam sobie." },
  { t: "Tapeta na miejscu", d: "Jeśli kupujesz sam, sprawdź numer partii na każdej rolce. Muszą być takie same." },
  { t: "Prąd i światło dzienne", d: "Pracuję przy świetle dziennym, bo w nim widać łączenia. Potrzebuję też jednego gniazdka." },
  { t: "Temperatura w pokoju", d: "Klej schnie dobrze w temperaturze pokojowej, bez przeciągów i grzejnika na pełnej mocy." },
];

export default function JakPracujePage() {
  return (
    <>
      <main className="surface">
        <section className="phero" style={{ paddingBottom: "clamp(3rem, 8vh, 5rem)" }}>
          <div className="grid12 phero__top">
            <h1 className="h-display">Pięć etapów. Każdy kończy się czymś, co możesz sprawdzić.</h1>
            <p>Wycena, policzone rolki, gładka ściana, gotowy pokój, zapas tapety. Tak wygląda praca od pierwszego telefonu do odbioru.</p>
          </div>
          <WallLayers />
        </section>

        <ProcessPinned
          variant="full"
          title="Krok po kroku"
          intro="Dobrze położona tapeta to w większości ściana, której nie widać. Reszta to pion, raport i cierpliwość przy docinaniu."
          steps={processSteps}
          videos={[videos.process[0], videos.process[1], videos.process[2], videos.process[3], videos.process[0]]}
          cta={{ href: "/wycena", label: "Umów oględziny" }}
          id="kroki"
        />

        <section className="section wrap" style={{ paddingTop: 0 }}>
          <div className="sec-head">
            <h2 className="h2">Co przygotować przed moim przyjazdem</h2>
          </div>
          <div className="grid12 check">
            <p className="check__intro">Pięć rzeczy, które skracają pracę o kilka godzin. Jeśli czegoś nie da się zrobić, po prostu daj znać.</p>
            <ul className="check__list">
              {checklist.map((c) => (
                <li key={c.t}>
                  <h3>{c.t}</h3>
                  <p>{c.d}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid12" style={{ marginTop: "clamp(3rem, 8vh, 5rem)" }}>
            <div style={{ gridColumn: "6 / span 7" }}>
              <Link href="/wycena" className="btn btn--lg">Bezpłatna wycena <Arrow /></Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
