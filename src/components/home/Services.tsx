import Image from "next/image";
import { services } from "@/data/home";

export function Services() {
  return (
    <section className="surface spec wrap bands-t" aria-labelledby="spec-title">
      <div className="spec__head">
        <h2 className="h2" id="spec-title">Wszystko robię sam, od pomiaru do sprzątania.</h2>
        <p>Nie podzlecam pracy innym ekipom. Ta sama osoba mierzy, przygotowuje ścianę, kładzie tapetę i sprząta, więc wiesz, kto odpowiada za efekt.</p>
      </div>
      <ul className="spec__list">
        {services.map((s) => (
          <li className="spec__row" key={s.t}>
            <h3>{s.t}</h3>
            <p>{s.d}</p>
            <div className="spec__img" aria-hidden="true">
              <div><Image src={s.img} alt="" fill sizes="(max-width: 900px) 40vw, 20vw" /></div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
