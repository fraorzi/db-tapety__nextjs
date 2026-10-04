"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { scrollTo } from "@/components/SmoothScroll";
import { Chevron } from "@/components/Chevron";
import { groups, type Choices, type GroupKey } from "./options";
import { choose, setPanelOpen, useChoices, usePanelOpen } from "./store";

export function PreviewPanel() {
  const open = usePanelOpen();
  const pathname = usePathname();
  const choices = useChoices();
  const shown = groups.filter((g) => !("path" in g) || g.path === pathname);

  const jump = (anchor: string) => {
    const el = document.getElementById(anchor)?.closest<HTMLElement>("section, footer");
    if (el) scrollTo(el);
  };

  return (
    <aside className="pv" data-open={open} aria-label="Podgląd wariantów">
      <button type="button" className="pv__toggle" aria-expanded={open} onClick={() => setPanelOpen(!open)}>
        Warianty <span className="pv__pm" aria-hidden="true" />
      </button>
      {open && (
        <div className="pv__body" data-lenis-prevent>
          {shown.map((g) => (
            <fieldset className="pv__group" key={g.key}>
              <legend>
                <button type="button" onClick={() => jump(g.anchor)}>{g.label} <Chevron dir="right" /></button>
              </legend>
              {g.options.map((o) => (
                <label key={o.id} className="pv__opt">
                  <input
                    type="radio"
                    name={`pv-${g.key}`}
                    checked={choices[g.key] === o.id}
                    onChange={() => choose(g.key as GroupKey, o.id as Choices[GroupKey])}
                  />
                  <span><b>{o.id.toUpperCase()}</b> {o.label}</span>
                </label>
              ))}
            </fieldset>
          ))}
          {pathname !== "/" && <p className="pv__hint">Sekcje strony głównej przełączasz na <Link href="/">/</Link>.</p>}
        </div>
      )}
    </aside>
  );
}
