import Link from "next/link";
import { faq } from "@/data/process";

export function Faq() {
  return (
    <section className="surface section wrap faq" aria-labelledby="faq-title">
      <div className="grid12" style={{ rowGap: "2.5rem" }}>
        <div className="faq__aside">
          <h2 className="h2" id="faq-title">Zanim napiszesz</h2>
          <p>Najczęstsze pytania o tapetowanie. Jeśli nie ma tu Twojego, napisz.</p>
          <Link href="/wycena" className="ulink">Zadaj pytanie</Link>
        </div>
        <div className="faq__list">
          {faq.map((f, i) => (
            <details key={f.q} name="faq" open={i === 0}>
              <summary>{f.q}</summary>
              <div><p>{f.a}</p></div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
