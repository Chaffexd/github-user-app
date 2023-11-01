/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{jsx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-blue": "var(--light-blue)",
        "light-gray": "var(--light-gray)",
        "light-darker-blue": "var(--light-darker-blue)",
        "light-navy": "var(--light-navy)",
        "light-off-white": "var(--light-off-white)",
        "light-white": "var(--light-white)",
        "heading-one-size": "var(--heading-one-size)",
        "heading-one-line-height": "var(-heading-one-line-height)",
        "heading-two-size": "var(--heading-two-size)",
        "heading-two-line-height": "var(--heading-two-line-height)",
        "heading-three-size": "var(--heading-three-size)",
        "heading-three-line-height": "var(--heading-three-line-height)",
        "heading-four-size": "var(--heading-four-size)",
        "heading-four-line-height": "var(--heading-four-line-height)",
      },
    },
  },
  plugins: [],
};
