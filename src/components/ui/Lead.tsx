import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

/** Akapit wstępny pod nagłówkiem strony: większy, szary. */
export function Lead({ className, ...rest }: ComponentProps<"p">) {
  return <p className={cn("text-lead text-muted", className)} {...rest} />;
}
