/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./dist/*.{html,js}"],
	darkMode: "class",
	theme: {
		extend: {
			maxWidth: {
				readable: "65ch",
			},
		},
		colors: {
			transparent: "transparent",
			current: "currentColor",
			black: "#000",
			white: "#fff",
			text: "hsl(210, 4%, 9%)",
			red: "hsl(0, 100%, 63%)",
			background: "hsl(240, 7%, 97%)",
			primary: "hsl(219, 39%, 46%)",
			secondary: "hsl(220, 5%, 88%)",
			accent: "hsl(353, 77%, 46%)",
			"text-dark": "hsl(0, 0%, 96%)",
			"background-dark": "hsl(0, 0%, 9%)",
			"secondary-dark": "hsl(0, 0%, 5%)",
			mockup: "#0f172a",
			grey: "#9ca3af",
			orange: "#d97706",
			green: "#65a30d",
			yellow: "#fbbf24",
		},
		boxShadow: {
			sm: "0 35px 60px -15px rgba(11, 10, 55, 0.15)",
			lg: "0 35px 60px -15px rgba(18, 16, 99, 0.06)",
			"shadow-none": "none",
		},
		fontSize: {
			xs: ["14px", { lineHeight: "24px", letterSpacing: "-0.03em" }],
			sm: ["16px", { lineHeight: "28px", letterSpacing: "-0.03em" }],
			lg: ["18px", { lineHeight: "28px", letterSpacing: "-0.03em" }],
			xl: ["24px", { lineHeight: "36px", letterSpacing: "-0.03em" }],
			"2xl": ["36px", { lineHeight: "48px", letterSpacing: "-0.032em" }],
			"3xl": ["48px", { lineHeight: "56px", letterSpacing: "-0.032em" }],
			"4xl": ["56px", { lineHeight: "64px", letterSpacing: "-0.032em" }],
			"5xl": ["80px", { lineHeight: "80px", letterSpacing: "-0.032em" }],
		},
		fontFamily: {
			Josefin: ['"Josefin Sans"', "sans-serif"],
			Yeseva: ['"Yeseva One"', "cursive"],
		},
	},
	variants: {
		extend: {
			border: ["active", "focus"],
		},
	},
	plugins: [],
};
