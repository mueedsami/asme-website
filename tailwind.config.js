/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        fg: "var(--fg)",
        card: "var(--card)",
        "card-fg": "var(--card-fg)",
        muted: "var(--muted)",
        "muted-fg": "var(--muted-fg)",
        border: "var(--border)",

        primary: "var(--primary)",
        "primary-fg": "var(--primary-fg)",

        accent: "var(--accent)",
        "accent-fg": "var(--accent-fg)",

        "header-bg": "var(--header-bg)",
        "glass-10": "var(--glass-10)",
        "glass-15": "var(--glass-15)",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
        "3xl": "1.75rem",
      },
    },
  },
  plugins: [],
};
