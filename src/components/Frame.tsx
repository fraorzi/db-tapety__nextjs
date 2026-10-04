import { Squircle } from "./Squircle";

export function Frame({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return (
    <Squircle radius={34} className={`frame ${className}`}>
      <Squircle radius={26} className="frame__in">{children}</Squircle>
    </Squircle>
  );
}
