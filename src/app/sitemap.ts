import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { site } from "@/data/site";

const paths = [
  "/",
  "/realizacje",
  "/dla-firm",
  "/jak-pracuje",
  "/wycena",
  "/polityka-prywatnosci",
  ...projects.map((project) => `/realizacje/${project.slug}`),
];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({
    url: new URL(path, site.url).href,
  }));
}
