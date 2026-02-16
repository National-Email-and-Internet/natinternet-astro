/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#071423',
          900: '#081628',
          800: '#0B1F36',
          700: '#0F2745',
          600: '#143255'
        },
        blue: {
          600: '#2F80ED',
          700: '#1F6FE0'
        },
        teal: {
          500: '#35C9C2'
        }
      }
    }
  }
}