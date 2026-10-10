import type { ReactNode } from "react";
import { Grid } from "@/components/ui/Grid";
import { Heading } from "@/components/ui/Heading";

/** Góra podstrony: duży h1 po lewej, krótki opis po prawej (na mobile jedno pod drugim). */
export function PageIntro({ title, children }: { title: ReactNode; children: ReactNode }) {
  return (
    <Grid className="items-end gap-y-6">
      <Heading level={1} className="col-span-8 max-w-[13ch] max-md:col-span-full max-md:max-w-none">{title}</Heading>
      <p className="col-span-4 col-start-9 max-w-[30ch] text-muted max-md:col-span-full">{children}</p>
    </Grid>
  );
}
