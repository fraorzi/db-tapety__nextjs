import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";

type FieldProps = {
  label: string;
  /** Dopisek w nawiasie przy etykiecie, szarym. */
  hint?: string;
  /** id kontrolki; bez niego etykieta nie jest powiązana (grupy chipów). */
  htmlFor?: string;
  error?: string;
  errorId?: string;
  children: ReactNode;
};

/** Etykieta, kontrolka i komunikat błędu. `data-invalid` służy też do fokusu pierwszego błędnego pola. */
export function Field({ label, hint, htmlFor, error, errorId, children }: FieldProps) {
  return (
    <div className="grid gap-2" data-invalid={!!error}>
      <label htmlFor={htmlFor} className="text-md font-medium">
        {hint ? `${label} ` : label}
        {hint && <small className="font-normal text-muted">{hint}</small>}
      </label>
      {children}
      {error && <p className="text-xs text-accent-ink" id={errorId}>{error}</p>}
    </div>
  );
}

/** Wspólny wygląd pól tekstowych; błędne pole ma obrys w kolorze akcentu (też przy fokusie). */
function controlClass(invalid?: boolean, className?: string) {
  return cn(
    "w-full bg-paper-2 px-[1.05rem] py-[0.9rem] transition-[background-color] duration-250 hover:bg-paper-3 focus-visible:outline-none",
    invalid ? "shadow-inset-accent" : "focus-visible:shadow-inset-ink",
    className,
  );
}

type Invalid = { invalid?: boolean };

export function TextInput({ invalid, className, ...rest }: ComponentProps<"input"> & Invalid) {
  return <input className={controlClass(invalid, className)} {...rest} />;
}

export function TextArea({ invalid, className, ...rest }: ComponentProps<"textarea"> & Invalid) {
  return <textarea className={controlClass(invalid, cn("min-h-28 resize-y", className))} {...rest} />;
}

type ChipsProps = {
  type: "radio" | "checkbox";
  name: string;
  options: readonly string[];
} & Omit<ComponentProps<"div">, "children">;

/** Wybór jako kwadratowe chipy: prawdziwe radio/checkbox ukryte pod spodem, zaznaczony chip ciemny. */
export function Chips({ type, name, options, className, ...rest }: ChipsProps) {
  return (
    <div className={cn("flex flex-wrap gap-2", className)} {...rest}>
      {options.map((o) => (
        <label key={o} className="group relative text-md font-medium">
          <input type={type} name={name} value={o} className="peer absolute inset-0 m-0 cursor-pointer opacity-0" />
          <span className="inline-flex bg-paper-2 px-4 py-[0.7rem] text-md transition-[background-color,color] duration-250 group-hover:bg-paper-3 peer-checked:bg-ink peer-checked:text-paper peer-focus-visible:shadow-inset-accent">
            {o}
          </span>
        </label>
      ))}
    </div>
  );
}
