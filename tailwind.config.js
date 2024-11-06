import aspectRatio from '@tailwindcss/aspect-ratio';
import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		fontFamily: {
			sans: ['Abhaya Libre'],
			display: ['Tinos'],
			body: ['Abhaya Libre']
		},
		extend: {}
	},
	plugins: [require('daisyui'), typography, forms, containerQueries, aspectRatio],
	daisyui: {
		themes: ['retro'],
		logs: false
	}
};
