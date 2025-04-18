/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./client/components/**/*.{js,ts,jsx,tsx}', './index.html'],
  theme: {
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
