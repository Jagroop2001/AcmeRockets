/** @type {import('tailwindcss').Config} */
// import defaultTheme from "tailwindcss/defaultTheme";
module.exports = {
	darkMode: "class",
	content: ["./build/**/*.{html,js}"],
	theme: {
		extend: {
			screens: {
				widescreen: { raw: "(min-aspect-ratio: 3/2)" },
				tallscreen: { raw: "(min-aspect-ratio: 13/20)" },
			},
			fontFamily: {
				// raleway:['Raleway', ...defaultTheme.fontFamily.sans],
				raleway: ["Raleway"],
			},
			keyframes: {
				"open-menu": {
					"0%": { transform: "scaleY(0)" },
					"80%": { transform: "scaleY(1.2)" },
					"100%": { transform: "scaleY(1)" },
				},
			},
			animation: {
				"open-menu": "open-menu 0.5s ease-in-out forwards",
			},
		},
	},
	plugins: [],
};
