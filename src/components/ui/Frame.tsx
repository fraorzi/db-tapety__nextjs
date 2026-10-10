import { cn } from "@/lib/cn";

/**
 * Podwójna ramka tonalna: jasna, ciemna, obraz w środku (po 5 px).
 * Tylko jako wyróżnik (zdjęcie główne realizacji, wideo procesu). className ustawia position i rozmiar.
 */
export function Frame({ className, children }: { className: string; children: React.ReactNode }) {
  return (
    <div className={cn("bg-frame-out", className)}>
      <div className="absolute inset-frame bg-frame-in *:absolute *:inset-frame">{children}</div>
    </div>
  );
}
