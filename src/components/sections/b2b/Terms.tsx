import { get, need } from "@/data/b2b";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";

type Item = { readonly t: string; readonly d: string };

function TermsList({ items }: { items: readonly Item[] }) {
  return (
    <ul className="border-t border-rule">
      {items.map((it) => (
        <li key={it.t} className="border-b border-rule py-[0.9rem]">
          <Heading level={4} as="h3" className="leading-[1.2] tracking-[-0.015em]">{it.t}</Heading>
          <p className="mt-[0.2rem] text-md text-muted">{it.d}</p>
        </li>
      ))}
    </ul>
  );
}

/** Zasady współpracy w dwóch kolumnach: czego potrzebuję od firmy i co dostaje. */
export function Terms() {
  return (
    <Section grid className="gap-y-10" aria-label="Zasady współpracy">
      <div className="col-span-5 grid content-start gap-5 max-md:col-span-full">
        <Heading level={2}>Czego potrzebuję od Was</Heading>
        <TermsList items={need} />
      </div>
      <div className="col-span-6 col-start-7 grid content-start gap-5 max-md:col-span-full">
        <Heading level={2}>Co dostajecie</Heading>
        <TermsList items={get} />
      </div>
    </Section>
  );
}
