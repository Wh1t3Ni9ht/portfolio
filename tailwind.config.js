module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', './components/**/*.{html,js, jsx}'],
  theme: {
    extend: {
      colors: {
        navbar: '#242526',
      },
      fontFamily: { code: ['"Source Code Pro"', 'sans-serif'] },
    },
  },
  plugins: [],
};
