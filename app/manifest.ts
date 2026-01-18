import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ryan Tan Wen Ter | Software Engineer",
    short_name: "Ryan Tan Wen Ter",
    description:
      "Ryan Tan Wen Ter - A software engineer working at the intersection of real-time applications, distributed systems and cloud infrastructure.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "64x64",
        type: "image/png",
      },
      {
        src: "/favicon.ico",
        sizes: "64x64",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    categories: [
      "portfolio",
      "real-time applications",
      "software engineering",
      "distributed systems",
      "cloud infrastructure",
      "developer",
      "game engines",
    ],
    lang: "en",
    dir: "ltr",
    scope: "/",
  };
}
