"use client";

import { Fragment, useLayoutEffect, useRef } from "react";

type Props = {
  /** [nazwa, liczba realizacji]; pierwsza pozycja („Wszystkie”) oddzielona kreską. */
  rooms: readonly (readonly [string, number])[];
  value: string;
  onChange: (room: string) => void;
  /** id panelu, który taby filtrują. */
  controls: string;
};

type TabProps = { label: string; count: number; selected: boolean; controls: string; onSelect: () => void };

/** Tab z licznikiem w indeksie górnym. */
function RoomTab({ label, count, selected, controls, onSelect }: TabProps) {
  return (
    <button
      type="button"
      role="tab"
      className="pt-4 pb-[0.9rem] font-medium text-muted transition-colors duration-250 hover:text-ink aria-selected:text-ink"
      aria-selected={selected}
      aria-controls={controls}
      onClick={onSelect}
    >
      {label}<span className="ml-1 align-super text-[0.7em] text-muted tabular-nums">{count}</span>
    </button>
  );
}

/** Taby filtrujące: tekst z licznikiem, podkreślenie 3 px przejeżdża do aktywnego (pozycja liczona tutaj). */
export function RoomTabs({ rooms, value, onChange, controls }: Props) {
  const tabs = useRef<HTMLDivElement>(null);
  const bar = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const place = () => {
      const on = tabs.current?.querySelector<HTMLElement>('[aria-selected="true"]');
      if (!on || !bar.current) return;
      bar.current.style.transform = `translate(${on.offsetLeft}px, ${on.offsetTop + on.offsetHeight}px) scaleX(${on.offsetWidth})`;
    };
    place();
    window.addEventListener("resize", place);
    return () => window.removeEventListener("resize", place);
  }, [value]);

  return (
    <div className="relative mt-8 flex flex-wrap items-baseline gap-x-[1.9rem] border-b border-rule" role="tablist" aria-label="Filtruj po pomieszczeniu" ref={tabs}>
      {rooms.map(([r, c], i) => (
        <Fragment key={r}>
          <RoomTab label={r} count={c} selected={value === r} controls={controls} onSelect={() => onChange(r)} />
          {i === 0 && <span className="-mx-2 h-[0.72em] w-px bg-muted" aria-hidden="true" />}
        </Fragment>
      ))}
      <span
        className="pointer-events-none absolute -top-[3px] left-0 h-[3px] w-px origin-top-left bg-accent transition-transform duration-600"
        ref={bar}
        aria-hidden="true"
      />
    </div>
  );
}
