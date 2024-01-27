import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import { SITE_URL } from "./src/data/config";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
	integrations: [mdx(), tailwind(), sitemap()],
	site: SITE_URL,
	markdown: {
		syntaxHighlight: "shiki",
		shikiConfig: {
			theme: "rose-pine",
			wrap: false,
		},
	},
});
