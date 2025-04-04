import type { MetadataRoute } from "next"

export const dynamic = "force-static"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Flashcards",
    short_name: "Flashcards",
    description: "Flashcards",
    start_url: "/",

    display:
      "fullscreen" /* Could be "fullscreen", "standalone", "minimal-ui", or "browser" */,
    orientation: "landscape" /* Could be "landscape" or "portrait" */,

    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  }
}
