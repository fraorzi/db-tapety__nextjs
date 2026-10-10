import { get, need } from "@/data/b2b";

type Item = { readonly t: string; readonly d: string };

function TermsList({ items }: { items: readonly Item[] }) {
  return (
    <ul className="border-t border-rule">
      {items.map((it) => (
        <li key={it.t} className="border-b border-rule py-[0.9rem]">
          <h3 className="text-[1.15rem] leading-[1.2] tracking-[-0.015em]">{it.t}</h3>
          <p className="mt-[0.2rem] text-md text-muted">{it.d}</p>
        </li>
      ))}
    </ul>
  );
}

/** Zasady współpracy w dwóch kolumnach: czego potrzebuję od firmy i co dostaje. */
export function Terms() {
  return (
    <section className="grid grid-cols-12 gap-x-gutter gap-y-10 px-page py-section" aria-label="Zasady współpracy">
      <div className="col-span-5 grid content-start gap-5 max-md:col-span-full">
        <h2 className="text-h2">Czego potrzebuję od Was</h2>
        <TermsList items={need} />
      </div>
      <div className="col-span-6 col-start-7 grid content-start gap-5 max-md:col-span-full">
        <h2 className="text-h2">Co dostajecie</h2>
        <TermsList items={get} />
      </div>
    </section>
  );
}
