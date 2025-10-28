// Static output on Vercel (no serverless functions)
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/static"; // <-- static adapter

export default defineConfig({
  site: "https://little-sparrow-site.vercel.app", // update later
  integrations: [tailwind()],
  output: "static",
  adapter: vercel(),
});
