import Image from "next/image";
import { services } from "@/data/home";
import { site } from "@/data/site";
import { Variant } from "@/preview/store";

const head = (
  <div className="spec__head">
    <h2 className="h2" id="spec-title">Jedna osoba. Od pomiaru do ostatniego docięcia.</h2>
    <p>Nie podzlecam. Ten sam człowiek mierzy, przygotowuje ścianę, kładzie i sprząta, więc nikt nie zwala winy na „poprzednią ekipę”.</p>
  </div>
);

const foot = (
  <div className="spec__foot">
    <span>Zasięg: {site.region}. {site.regionNote}</span>
    <span>Materiał Twój albo zamówiony przeze mnie.</span>
  </div>
);

function SpecSheet() {
  return (
    <section className="surface spec wrap bands-t" aria-labelledby="spec-title">
      {head}
      <ul className="spec__list">
        {services.map((s) => (
          <li className="spec__row" key={s.t}>
            <h3>{s.t}</h3>
            <p>{s.d}</p>
            <div className="spec__thumb">
              <Image src={s.img} alt="" fill sizes="112px" />
            </div>
          </li>
        ))}
      </ul>
      {foot}
    </section>
  );
}

function SpecStrips() {
  return (
    <section className="surface spec wrap bands-t" aria-labelledby="spec-title">
      {head}
      <ul className="sb">
        {services.map((s) => (
          <li className="sb__strip" key={s.t}>
            <figure className="proj" data-reveal="clip">
              <div className="media"><Image src={s.img} alt="" fill sizes="(max-width: 900px) 50vw, 25vw" /></div>
            </figure>
            <h3>{s.t}</h3>
            <p>{s.d}</p>
          </li>
        ))}
      </ul>
      {foot}
    </section>
  );
}

function SpecStack() {
  return (
    <section className="surface spec wrap bands-t sk" aria-labelledby="spec-title">
      <div className="sk__aside">
        {head}
        {foot}
      </div>
      <ul className="sk__list">
        {services.map((s, i) => (
          <li className="sk__card" key={s.t} style={{ "--i": i } as React.CSSProperties}>
            <div className="sk__img"><Image src={s.img} alt="" fill sizes="(max-width: 900px) 100vw, 26vw" /></div>
            <div className="sk__text">
              <h3>{s.t}</h3>
              <p>{s.d}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

function SpecRows() {
  return (
    <section className="surface spec wrap bands-t" aria-labelledby="spec-title">
      {head}
      <ul className="sr">
        {services.map((s) => (
          <li className="sr__row" key={s.t}>
            <h3>{s.t}</h3>
            <p>{s.d}</p>
            <div className="sr__img" aria-hidden="true">
              <div><Image src={s.img} alt="" fill sizes="(max-width: 900px) 40vw, 20vw" /></div>
            </div>
          </li>
        ))}
      </ul>
      {foot}
    </section>
  );
}

export function Services() {
  return <Variant group="spec" options={{ a: <SpecSheet />, b: <SpecStrips />, c: <SpecStack />, d: <SpecRows /> }} />;
}
