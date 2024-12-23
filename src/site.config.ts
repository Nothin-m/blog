import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
	// Used as both a meta property (src/components/BaseHead.astro L:31 + L:49) & the generated satori png (src/pages/og-image/[slug].png.ts)
	author: "Nothin-m",
	// Meta property used to construct the meta title property, found in src/components/BaseHead.astro L:11
	title: "How are you",
	// Meta property used as the default description meta property
	description:
		"passion!",
	// HTML lang property, found in src/layouts/Base.astro L:18
	lang: "en-GB",
	// Meta property, found in src/components/BaseHead.astro L:42
	ogLocale: "en_GB",
	// Date.prototype.toLocaleDateString() parameters, found in src/utils/date.ts.
	date: {
		locale: "en-GB",
		options: {
			day: "numeric",
			month: "short",
			year: "numeric",
		},
	},
	comments: {
		giscus: {
			repo: "Nothin-m/Nothin-m.github.io",
			repoId: "R_kgDONQpVXA",
			category: "General",
			categoryId: "DIC_kwDONQpVXM4Cldod",
			mapping: "pathname",
			strict: "0",
			reactionsEnabled: "1",
			emitMetadata: "0",
			inputPosition: "top",
			theme: "preferred_color_scheme",
			lang: "zh-CN",
			loading: "lazy",
		},
	},
};

// Used to generate links in both the Header & Footer.
export const menuLinks: Array<{ title: string; path: string }> = [
	{
		title: "Home",
		path: "/",
	},
	{
		title: "About",
		path: "/about/",
	},
	{
		title: "Blog",
		path: "/posts/",
	},
];
