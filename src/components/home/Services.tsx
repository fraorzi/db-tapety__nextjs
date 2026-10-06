import Image from "next/image";
import { services } from "@/data/home";
import { site } from "@/data/site";

export function Services() {
  return (
    <section className="surface spec wrap bands-t" aria-labelledby="spec-title">
      <div className="spec__head">
        <h2 className="h2" id="spec-title">Jedna osoba. Od pomiaru do ostatniego docięcia.</h2>
        <p>Nie podzlecam. Ten sam człowiek mierzy, przygotowuje ścianę, kładzie i sprząta, więc nikt nie zwala winy na „poprzednią ekipę”.</p>
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
      <div className="spec__foot">
        <span>Zasięg: {site.region}. {site.regionNote}</span>
        <span>Materiał Twój albo zamówiony przeze mnie.</span>
      </div>
    </section>
  );
}
