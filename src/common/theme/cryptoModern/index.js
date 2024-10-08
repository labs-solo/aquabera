import colors from './colors';

export const theme = {
  breakpoints: ['576px', '768px', '991px', '1220px'],
  space: [0, 5, 8, 10, 15, 20, 25, 30, 33, 35, 40, 50, 60, 70, 80, 85, 90, 100],
  fontSizes: [10, 12, 14, 15, 16, 18, 20, 22, 24, 36, 48, 80, 96],
  fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  lineHeights: {
    solid: 1,
    title: 1.25,
    copy: 1.5,
  },
  letterSpacings: {
    normal: 'normal',
    tracked: '0.1em',
    tight: '-0.05em',
    mega: '0.25em',
  },
  borders: [
    0,
    '1px solid',
    '2px solid',
    '3px solid',
    '4px solid',
    '5px solid',
    '6px solid',
  ],
  radius: [3, 4, 5, 10, 20, 30, 60, 120, '50%'],
  widths: [36, 40, 44, 48, 54, 70, 81, 128, 256],
  heights: [36, 40, 44, 46, 48, 54, 70, 81, 128],
  maxWidths: [16, 32, 64, 128, 256, 512, 768, 1024, 1536],
  colors,
  colorStyles: {
    primary: {
      color: colors.primary,
      border: '1px solid',
      borderColor: colors.primary,
      bgColor: colors.transparent,
      '&:hover': {
        color: colors.white,
        bgColor: colors.primaryHover,
        borderColor: colors.primaryHover,
        boxShadow: colors.primaryBoxShadow,
      },
    },
    secondary: {
      color: colors.secondary,
      borderColor: colors.secondary,
      '&:hover': {
        color: colors.secondaryHover,
        borderColor: colors.secondaryHover,
      },
    },
    warning: {
      color: colors.yellow,
      borderColor: colors.yellow,
      '&:hover': {
        color: colors.yellowHover,
        borderColor: colors.yellowHover,
      },
    },
    error: {
      color: colors.secondaryHover,
      borderColor: colors.secondaryHover,
      '&:hover': {
        color: colors.secondary,
        borderColor: colors.secondary,
      },
    },
    primaryWithBg: {
      color: colors.white,
      bgColor: colors.primary,
      borderColor: colors.primary,
      '&:hover': {
        bgColor: colors.primaryHover,
        borderColor: colors.primaryHover,
        boxShadow: colors.primaryBoxShadow,
      },
    },
    secondaryWithBg: {
      color: colors.white,
      bgColor: colors.secondary,
      borderColor: colors.secondary,
      '&:hover': {
        bgColor: colors.secondaryHover,
        borderColor: colors.secondaryHover,
      },
    },
    warningWithBg: {
      color: colors.white,
      bgColor: colors.yellow,
      borderColor: colors.yellow,
      '&:hover': {
        bgColor: colors.yellowHover,
        borderColor: colors.yellowHover,
      },
    },
    errorWithBg: {
      color: colors.white,
      bgColor: colors.secondaryHover,
      borderColor: colors.secondaryHover,
      '&:hover': {
        bgColor: colors.secondary,
        borderColor: colors.secondary,
      },
    },
    transparentBg: {
      bgColor: colors.white,
      '&:hover': {
        bgColor: colors.white,
      },
    },
  },
  buttonStyles: {
    textButton: {
      border: 0,
      color: colors.primary,
      padding: 0,
      height: 'auto',
      bgColor: colors.transparent,
    },
    outlined: {
      borderWidth: '1px',
      borderStyle: 'solid',
      bgColor: colors.transparent,
    },
    fab: {
      border: '0',
      width: '40px',
      height: '40px',
      padding: 0,
      borderRadius: '50%',
      justifyContent: 'center',
      'span.btn-icon': {
        paddingLeft: 0,
      },
    },
    extendedFab: {
      border: '0',
      minWidth: '50px',
      height: '40px',
      borderRadius: '50px',
      justifyContent: 'center',
    },
  },
  // FlexBox: {
  //   bgColor: 'green'
  // }
};
