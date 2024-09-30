import Typography from "typography"

// https://kyleamathews.github.io/typography.js/
const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  googleFonts: [
    {
      name: 'Sigmar',
      styles: ['400'],
    },
    {
      name: 'Onest',
      styles: ['400', '700'],
    },
  ],
  headerFontFamily: ['Sigmar', 'sans-serif'],
  bodyFontFamily: ['Onest', 'sans-serif'],
})

export default typography