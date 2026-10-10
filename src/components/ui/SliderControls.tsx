import { Button } from "./Button";
import { Chevron } from "./Chevron";
import { cn } from "@/lib/cn";

type Props = {
  onPrev: () => void;
  onNext: () => void;
  prevLabel: string;
  nextLabel: string;
  className?: string;
};

/** Para kwadratowych przycisków z szewronami do sliderów. */
export function SliderControls({ onPrev, onNext, prevLabel, nextLabel, className }: Props) {
  return (
    <div className={cn("flex gap-2", className)}>
      <Button variant="soft" size="icon" aria-label={prevLabel} onClick={onPrev}><Chevron dir="left" /></Button>
      <Button variant="soft" size="icon" aria-label={nextLabel} onClick={onNext}><Chevron dir="right" /></Button>
    </div>
  );
}
