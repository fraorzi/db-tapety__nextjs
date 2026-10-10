"use client";

import { useState } from "react";
import { TextLink } from "@/components/ui/TextLink";

/** Pole na zdjęcia: kliknięcie albo przeciągnięcie plików; pod spodem lista wybranych nazw. */
export function PhotoDrop({ id, name }: { id: string; name: string }) {
  const [files, setFiles] = useState<string[]>([]);
  const [over, setOver] = useState(false);

  return (
    <div
      className="relative grid cursor-pointer justify-items-start gap-2 bg-paper-2 p-7 transition-colors duration-250 hover:bg-paper-3 data-over:bg-paper-3"
      data-over={over || undefined}
      onDragOver={(e) => { e.preventDefault(); setOver(true); }}
      onDragLeave={() => setOver(false)}
      onDrop={(e) => { e.preventDefault(); setOver(false); setFiles(Array.from(e.dataTransfer.files).map((f) => f.name)); }}
    >
      <input
        id={id}
        type="file"
        name={name}
        accept="image/*"
        multiple
        className="absolute inset-0 cursor-pointer opacity-0"
        onChange={(e) => setFiles(Array.from(e.target.files ?? []).map((f) => f.name))}
      />
      <TextLink>Dodaj zdjęcia</TextLink>
      <p className="text-md text-muted">Przeciągnij tutaj albo kliknij. Najlepiej w dziennym świetle, z widoczną całą ścianą.</p>
      {files.length > 0 && (
        <ul className="mt-2 flex flex-wrap gap-2" aria-label="Wybrane pliki">
          {files.map((f) => <li key={f} className="bg-paper px-[0.7rem] py-[0.3rem] text-xs">{f}</li>)}
        </ul>
      )}
    </div>
  );
}
