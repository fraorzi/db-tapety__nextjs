export function Frame({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={`frame ${className}`}>
      <div className="frame__in">{children}</div>
    </div>
  );
}
