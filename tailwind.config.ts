import type { Config } from "tailwindcss";
import flowbite from "flowbite-react/tailwind";

export default {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		flowbite.content(),
	],
	darkMode: "class",
	theme: {
		extend: {
			fontFamily: {
				sans: ["Space Grotesk", "sans-serif"],
			},
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
			},
		},
	},
	plugins: [flowbite.plugin()],
} satisfies Config;
