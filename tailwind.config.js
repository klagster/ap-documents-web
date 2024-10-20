module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // Scan all files in src folder
    './src/app/**/*.{js,ts,jsx,tsx}', // Specific paths for app directory (Next.js)
    './src/components/**/*.{js,ts,jsx,tsx}' // Scan component directory
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};