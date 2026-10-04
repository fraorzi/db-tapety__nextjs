"use client";

import { useEffect, useSyncExternalStore } from "react";
import { ScrollTrigger } from "@/lib/gsap";
import { defaults, groups, type Choices, type GroupKey } from "./options";

const KEY = "db-preview";
const listeners = new Set<() => void>();
let state: Choices = defaults;
let loaded = false;

function parse(raw: string | null): Choices {
  if (!raw) return defaults;
  try {
    const saved: unknown = JSON.parse(raw);
    if (typeof saved !== "object" || saved === null) return defaults;
    const next: Record<string, string> = { ...defaults };
    for (const g of groups) {
      const v = (saved as Record<string, unknown>)[g.key];
      if (g.options.some((o) => o.id === v)) next[g.key] = v as string;
    }
    return next as Choices;
  } catch {
    return defaults;
  }
}

function subscribe(fn: () => void) {
  if (!loaded) {
    loaded = true;
    state = parse(localStorage.getItem(KEY));
    panelOpen = localStorage.getItem(`${KEY}-open`) !== "false";
  }
  listeners.add(fn);
  return () => listeners.delete(fn);
}

export function choose<K extends GroupKey>(key: K, id: Choices[K]) {
  state = { ...state, [key]: id };
  localStorage.setItem(KEY, JSON.stringify(state));
  listeners.forEach((fn) => fn());
}

let panelOpen = true;
export function setPanelOpen(open: boolean) {
  panelOpen = open;
  localStorage.setItem(`${KEY}-open`, String(open));
  listeners.forEach((fn) => fn());
}
export function usePanelOpen() {
  return useSyncExternalStore(subscribe, () => panelOpen, () => true);
}

export function useChoices(): Choices {
  return useSyncExternalStore(subscribe, () => state, () => defaults);
}

export function usePreview<K extends GroupKey>(key: K): Choices[K] {
  return useChoices()[key];
}

/** Zapisuje wybory jako `data-pv-*` na <html> (warianty czysto CSS-owe) i odświeża ScrollTrigger po zmianie układu. */
export function PreviewSync() {
  const choices = useChoices();
  useEffect(() => {
    for (const g of groups) document.documentElement.dataset[`pv${g.key[0].toUpperCase()}${g.key.slice(1)}`] = choices[g.key];
    const id = window.setTimeout(() => {
      ScrollTrigger.sort();
      ScrollTrigger.refresh();
    }, 150);
    return () => window.clearTimeout(id);
  }, [choices]);
  return null;
}

export function Variant<K extends GroupKey>({ group, options }: { group: K; options: Record<Choices[K], React.ReactNode> }) {
  return <>{options[usePreview(group)]}</>;
}
