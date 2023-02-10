/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {},
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: "#2563eb",

					secondary: "#60a5fa",

					accent: "#d1d5db",

					neutral: "#d1d5db",

					"base-100": "#EDECF4",

					info: "#28A7E2",

					success: "#1BBB78",

					warning: "#EECD59",

					error: "#E31C41",
				},
			},
		],
	},
};
