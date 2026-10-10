import type { Video } from "@/data/site";

export function VideoSources({ video }: { video: Video }) {
  return (
    <>
      <source src={video.webm} type='video/webm; codecs="av01.0.12M.10"' />
      <source src={video.mp4} type="video/mp4" />
    </>
  );
}
