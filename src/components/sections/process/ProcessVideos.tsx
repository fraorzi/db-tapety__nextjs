import type { Video } from "@/data/site";
import { VideoSources } from "@/components/ui/VideoSources";

/** Wideo etapów nałożone na siebie; widoczne to z `data-on` (przełącza useProcessSteps). */
export function ProcessVideos({ videos }: { videos: readonly Video[] }) {
  return videos.map((video, i) => (
    <video
      key={i}
      data-step-video
      data-on={i === 0 || undefined}
      muted
      loop
      playsInline
      preload={i === 0 ? "auto" : "metadata"}
      className="absolute inset-0 opacity-0 transition-opacity duration-700 data-on:opacity-100"
    >
      <VideoSources video={video} />
    </video>
  ));
}
