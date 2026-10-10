import { faq } from "@/data/process";
import { Grid } from "@/components/ui/Grid";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { TextLink } from "@/components/ui/TextLink";

/** FAQ jako <details name="faq">: otwiera się jedno naraz, wysokość animowana (interpolate-size, w starszych przeglądarkach fade). */
export function Faq() {
  return (
    <Section tone="paper" className="supports-[interpolate-size:allow-keywords]:[interpolate-size:allow-keywords]" aria-labelledby="faq-title">
      <Grid className="gap-y-10">
        <div className="col-span-4 grid content-start gap-5 max-md:col-span-full">
          <Heading level={2} id="faq-title">Zanim napiszesz</Heading>
          <p className="max-w-[30ch] text-muted">Najczęstsze pytania o tapetowanie. Jeśli nie ma tu Twojego, napisz.</p>
          <TextLink href="/wycena">Zadaj pytanie</TextLink>
        </div>
        <div className="col-span-7 col-start-6 border-t border-rule max-md:col-span-full">
          {faq.map((f, i) => (
            <details
              key={f.q}
              name="faq"
              open={i === 0}
              className="group border-b border-rule details-content:overflow-clip details-content:transition-[block-size,content-visibility] details-content:duration-450 details-content:[block-size:0] details-content:[transition-behavior:allow-discrete] open:details-content:[block-size:auto]"
            >
              <summary className="relative block cursor-pointer py-[1.3rem] pr-[2.4rem] font-display text-[clamp(1.1rem,1.5vw,1.4rem)] font-semibold tracking-[-0.015em]">
                {f.q}
                {/* plus → minus: pionowa kreska znika od końców do środka */}
                <span className="absolute top-[round(1.3rem_+_0.5lh_-_7px,_1px)] right-1.5 h-3.5 w-0.5 bg-ink transition-transform duration-400 group-open:scale-y-0" aria-hidden="true" />
                <span className="absolute top-[round(1.3rem_+_0.5lh_-_1px,_1px)] right-0 h-0.5 w-3.5 bg-ink" aria-hidden="true" />
              </summary>
              <div className="max-w-[56ch] pb-6 text-muted not-supports-[interpolate-size:allow-keywords]:group-open:animate-faq-in">
                <p>{f.a}</p>
              </div>
            </details>
          ))}
        </div>
      </Grid>
    </Section>
  );
}
