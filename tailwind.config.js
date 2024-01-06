/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./pages/**/*.{html,js}",
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				"primary-color": "rgb(74 222 128)",
			},
		},
	},
	plugins: [],
}
