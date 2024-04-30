/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {
		  'sm': '320px',
		  'md': '375px',
		  'lg': '425px',
		  'tablet': '768px',
		  'laptop': '1024px',
		  'desktop': '1280px',
		},
		extend: {
		  fontFamily: {
			poppins: 'Poppins'
		  },
		  colors: {
			baseBg: '#FFF5E7',
			main: '#ECBF1C',
			alternative: '#337150',
			second: '#5A8840',
			accent: '#AA9680',
			desc: '#17371E',
			dark: '#343535'
		  },
		},
	  },
	  plugins: [],
}
