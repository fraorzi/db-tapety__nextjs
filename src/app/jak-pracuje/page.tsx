import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { PageIntro } from "@/components/layout/PageIntro";
import { ProcessFull } from "@/components/sections/process/ProcessFull";
import { WallLayers } from "@/components/sections/process/WallLayers";
import { Arrow } from "@/components/ui/Arrow";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { processSteps } from "@/data/process";
import { videos } from "@/data/site";

export const metadata: Metadata = {
  title: "Jak pracuję",
  description: "Pięć etapów tapetowania: oględziny i pomiar, dobór wzoru, przygotowanie ściany, montaż, odbiór. Co przygotować przed przyjazdem wykonawcy.",
};

const checklist = [
  { t: "Dostęp do ściany", d: "Odsuń meble na około metr od ściany albo daj znać, że mam to zrobić. Wtedy doliczę ten czas." },
  { t: "Zdjęte obrazy, półki, karnisze", d: "Co da się zdjąć, warto zdjąć wcześniej. Gniazdka i włączniki zdejmuję sam." },
  { t: "Tapeta na miejscu", d: "Jeśli kupujesz sam, sprawdź numer partii na każdej rolce. Muszą być takie same." },
  { t: "Prąd i światło dzienne", d: "Pracuję przy świetle dziennym, bo w nim widać łączenia. Potrzebuję też jednego gniazdka." },
  { t: "Temperatura w pokoju", d: "Klej schnie dobrze w temperaturze pokojowej, bez przeciągów i grzejnika na pełnej mocy." },
];

export default function JakPracujePage() {
  return (
    <>
      <main className="relative z-1 bg-paper">
        <section className="px-page pt-page-top pb-[clamp(3rem,8vh,5rem)]">
          <PageIntro title="Od pomiaru do odbioru.">
            Pięć etapów pracy, od pierwszego telefonu do sprzątania. Przy każdym piszę, co dostajesz i ile to trwa.
          </PageIntro>
          <WallLayers />
        </section>

        <ProcessFull
          title="Krok po kroku"
          intro="Większość pracy to przygotowanie ściany. Potem liczy się pion, dopasowanie wzoru i dokładne docinanie."
          steps={processSteps}
          videos={[videos.process[0], videos.process[1], videos.process[2], videos.process[3], videos.process[0]]}
          cta={{ href: "/wycena", label: "Umów oględziny" }}
          id="kroki"
        />

        <section className="px-page pb-section">
          <SectionHeading title="Co przygotować przed moim przyjazdem" />
          <div className="mt-stack grid grid-cols-12 gap-x-gutter gap-y-8">
            <p className="col-span-4 max-w-[30ch] text-muted max-md:col-span-full">
              Dzięki temu mogę zacząć od razu po przyjeździe. Jeśli czegoś nie da się zrobić, daj znać wcześniej.
            </p>
            <ul className="col-span-7 col-start-6 border-t border-rule max-md:col-span-full">
              {checklist.map((c) => (
                <li key={c.t} className="border-b border-rule py-[1.2rem]">
                  <h3 className="text-[1.15rem]">{c.t}</h3>
                  <p className="mt-[0.35rem] max-w-[50ch] text-md text-muted">{c.d}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-[clamp(3rem,8vh,5rem)] grid grid-cols-12 gap-x-gutter">
            <div className="col-span-7 col-start-6">
              <Button href="/wycena" size="lg">Bezpłatna wycena <Arrow /></Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
