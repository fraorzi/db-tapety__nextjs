import Image from "next/image";
import { services } from "@/data/home";
import { site } from "@/data/site";
import { Frame } from "@/components/Frame";
import { Variant } from "@/preview/store";

const title = "Jedna osoba. Od pomiaru do ostatniego docięcia.";
const lead = "Nie podzlecam. Ten sam człowiek mierzy, przygotowuje ścianę, kładzie i sprząta, więc nikt nie zwala winy na „poprzednią ekipę”.";

const head = (
  <div className="spec__head">
    <h2 className="h2" id="spec-title">{title}</h2>
    <p>{lead}</p>
  </div>
);

const foot = (
  <div className="spec__foot">
    <span>Zasięg: {site.region}. {site.regionNote}</span>
    <span>Materiał Twój albo zamówiony przeze mnie.</span>
  </div>
);

const rows = (
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
);

export function Services() {
  return (
    <section className="surface spec wrap bands-t" aria-labelledby="spec-title">
      <Variant
        group="spec"
        options={{
          a: (
            <>
              {head}
              {rows}
              {foot}
            </>
          ),
          b: (
            <div className="spec2">
              <div className="spec2__aside">
                <h2 className="h2" id="spec-title">{title}</h2>
                <p>{lead}</p>
                <Frame className="spec2__frame">
                  <div className="spec2__pics" aria-hidden="true">
                    {services.map((s) => (
                      <div className="spec2__pic" key={s.t}><Image src={s.img} alt="" fill sizes="(max-width: 900px) 100vw, 40vw" /></div>
                    ))}
                  </div>
                </Frame>
              </div>
              <div className="spec2__main">
                <ul className="spec2__list">
                  {services.map((s) => (
                    <li className="spec2__row" key={s.t}>
                      <h3>{s.t}</h3>
                      <p>{s.d}</p>
                    </li>
                  ))}
                </ul>
                {foot}
              </div>
            </div>
          ),
          c: (
            <>
              {head}
              <ul className="spec3">
                {services.map((s) => (
                  <li key={s.t}>
                    <Frame className="spec3__frame">
                      <div className="media"><Image src={s.img} alt="" fill sizes="(max-width: 900px) 100vw, 50vw" /></div>
                    </Frame>
                    <h3>{s.t}</h3>
                    <p>{s.d}</p>
                  </li>
                ))}
              </ul>
              {foot}
            </>
          ),
          d: (
            <>
              {head}
              {rows}
              {foot}
            </>
          ),
        }}
      />
    </section>
  );
}
