/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    container: {
      center: true,  // Center the container (optional)
      padding: '2rem',  // Add padding inside the container (optional)
      screens: {
        sm: '100%',  // Full width on small screens
        md: '100%',  // Full width on medium screens
        lg: '1024px',  // Max-width for large screens
        xl: '1320px',  // Max-width for extra-large screens
      },
    },
  },
  plugins: [],
};
