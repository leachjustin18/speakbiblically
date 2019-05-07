import Typography from 'typography';

const typography = new Typography({
  googleFonts: [
    {
      name: 'Montserrat',
      styles: ['300', '400', '600', '700'],
    },
  ],
  baseFontSize: '18px',
  baseLineHeight: 1.45,
  headerFontFamily: ['Montserrat', 'Arial'],
  bodyFontFamily: ['Montserrat', 'Arial'],
  headerWeight: 600,
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    html: {
      overflowY: 'auto',
    },
    body: {
      fontWeight: 400,
    },
  }),
});

typography.injectStyles();

export default typography;
