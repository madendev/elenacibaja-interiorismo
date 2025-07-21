// @ts-check
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import { defineConfig } from "astro/config";
// https://astro.build/config
export default defineConfig({
	site: "https://elenacibaja-interiorismo.com",
	integrations: [sitemap(), icon()],
	output: "server",
	vite: {
		plugins: [tailwindcss()],
	},
});
