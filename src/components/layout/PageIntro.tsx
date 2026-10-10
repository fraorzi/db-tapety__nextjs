import type { ReactNode } from "react";

/** Góra podstrony: duży h1 po lewej, krótki opis po prawej (na mobile jedno pod drugim). */
export function PageIntro({ title, children }: { title: ReactNode; children: ReactNode }) {
  return (
    <div className="grid grid-cols-12 items-end gap-x-gutter gap-y-6">
      <h1 className="col-span-8 max-w-[13ch] text-display max-md:col-span-full max-md:max-w-none">{title}</h1>
      <p className="col-span-4 col-start-9 max-w-[30ch] text-muted max-md:col-span-full">{children}</p>
    </div>
  );
}
