/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-light": "#3B82F6", // Primary color for light mode
        "secondary-light": "#10B981", // Secondary color for light mode
        "accent-light": "#EC4899", // Accent color for light mode
        "background-light": "#d3d3d3", // Background color for light mode
        "text-light": "#1F2937", // Text color for light mode
        "navbar-bg-light": "#F9FAFB", // Background color for the navbar in light mode
        "navbar-text-light": "#1F2937", // Text color for the navbar in light mode
        "navbar-brand-light": "#3B82F6", // Brand color for the navbar in light mode

        "primary-dark": "#3B82F6", // Primary color for dark mode (same as light for consistency)
        "secondary-dark": "#10B981", // Secondary color for dark mode (same as light for consistency)
        "accent-dark": "#EC4899", // Accent color for dark mode (same as light for consistency)
        "background-dark": "#282A36", // Background color for dark mode
        "text-dark": "#E5E7EB", // Text color for dark mode
        "navbar-bg-dark": "#1F2937", // Background color for the navbar in dark mode
        "navbar-text-dark": "#E5E7EB", // Text color for the navbar in dark mode
        "navbar-brand-dark": "#3B82F6", // Brand color for the navbar in dark mode
      },
    },
  },
  plugins: [],
};
