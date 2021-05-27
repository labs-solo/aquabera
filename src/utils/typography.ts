import Typography from "typography"

// https://kyleamathews.github.io/typography.js/
const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  googleFonts: [
    {
      name: 'Montserrat',
      styles: [
        '700',
      ],
    },
  ],
  headerFontFamily: ["Montserrat", "sans-serif"],
  bodyFontFamily: ["Montserrat", "sans-serif"],
})

export default typography