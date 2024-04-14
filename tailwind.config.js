/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'violet' : '#6366f1',
      'black' : '#020617',
      'cyan' : '#0891b2',
      'li-white' : '#f1f5f9',
      'gray-600' : '#4b5563',
      'gray-400' : '#9ca3af',
      'gray-300' : '#d1d5db',
      'gray-800' : '#1f2937',
      'gray-100' : '#f3f4f6',
      'gray-900' : '#111827',
      'slate-700' : '#334155',
    }
  },
  plugins: [require("daisyui")],
}