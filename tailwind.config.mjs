/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#E07A5F',
        secondary: '#F4A261',
      },
      fontFamily: {
        serif: ['Crimson Pro', 'serif'],
      },
    },
  },
  plugins: [],
}
