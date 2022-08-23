import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
	markdown: {
		shikiConfig: {
			theme: "dracula",
			wrap: true,
		},
	},
	site: "https://roaring-duckanoo-2331b6.netlify.app/",
	// base: "/engineering-blog",
	integrations: [
		mdx({}),
		tailwind({
			config: { applyBaseStyles: false },
		}),
		image(),
		sitemap(),
	],
});
