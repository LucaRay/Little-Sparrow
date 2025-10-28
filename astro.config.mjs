// Static adapter only. No server output.
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/static";

export default defineConfig({
  site: "https://little-sparrow-site.vercel.app",
  integrations: [tailwind()],
  output: "static",
  adapter: vercel(),
});
