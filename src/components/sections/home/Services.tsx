import Image from "next/image";
import { services } from "@/data/home";

/** Usługi jako duże wiersze; przy hoverze zdjęcie wjeżdża z lewej jak przyklejany pas (ramka i obraz jadą w przeciwne strony). */
export function Services() {
  return (
    <section className="relative z-1 bg-paper bands-t px-page pt-[clamp(4rem,10vh,7rem)]" aria-labelledby="spec-title">
      <div className="grid grid-cols-12 items-end gap-x-gutter gap-y-6">
        <h2 className="col-span-7 max-w-[16ch] text-h2 max-md:col-span-full max-md:max-w-none" id="spec-title">
          Wszystko robię sam, od pomiaru do sprzątania.
        </h2>
        <p className="col-span-4 col-start-9 max-w-[32ch] text-muted max-md:col-span-full">
          Nie podzlecam pracy innym ekipom. Ta sama osoba mierzy, przygotowuje ścianę, kładzie tapetę i sprząta, więc wiesz, kto odpowiada za efekt.
        </p>
      </div>
      <ul className="mt-[clamp(2.5rem,7vh,4.5rem)] border-t border-rule">
        {services.map((s) => (
          <li
            className="group grid grid-cols-[minmax(0,6fr)_minmax(0,4fr)_minmax(0,2.6fr)] items-center gap-x-gutter border-b border-rule py-5 max-md:grid-cols-[minmax(0,1fr)_6.5rem] max-md:gap-y-2"
            key={s.t}
          >
            <h3 className="text-[clamp(2rem,4.4vw,4.6rem)] transition-transform duration-650 group-hover:translate-x-3 max-md:text-[clamp(1.7rem,8vw,2.4rem)]">
              {s.t}
            </h3>
            <p className="max-w-[34ch] text-muted max-md:col-start-1">{s.d}</p>
            <div className="relative aspect-[16/10] overflow-hidden max-md:col-start-2 max-md:row-span-2 max-md:row-start-1" aria-hidden="true">
              <div className="absolute inset-0 -translate-x-[101%] overflow-hidden transition-transform duration-800 group-hover:translate-x-0 max-md:translate-x-0 no-hover:translate-x-0">
                <Image
                  src={s.img}
                  alt=""
                  fill
                  sizes="(max-width: 900px) 40vw, 20vw"
                  className="translate-x-[101%] transition-transform duration-800 group-hover:translate-x-0 max-md:translate-x-0 no-hover:translate-x-0"
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
