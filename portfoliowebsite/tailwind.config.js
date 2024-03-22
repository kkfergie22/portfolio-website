/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './templates/**/*.html',
    // Templates in other apps
    './../templates/**/*.html',
    // Ignore files in node_modules
    '!./../**/node_modules',
    // Include JavaScript files that might contain Tailwind CSS classes
    './../**/*.js',
    // Include Python files that might contain Tailwind CSS classes
    './../**/*.py',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
