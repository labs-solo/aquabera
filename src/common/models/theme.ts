import darkColors from 'common/theme/dark/darkColors';

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

export type Colors = {
  bgColor: string;
  transparent: string;
  primaryTextColor: string;
  black: string;
  white: string;
  headingColor: string;
  subHeadingColor: string;
  textColor: string;
  subTextColor: string;
  labelColor: string;
  inactiveField: string;
  inactiveButton: string;
  inactiveIcon: string;
  primary: string;
  primaryDisabled: string;
  primaryHover: string;
  secondary: string;
  secondaryHover: string;
  yellow: string;
  yellowHover: string;
  // General
  primaryButtonBgColor: string;
  primaryButtonColor: string;
  hrBgColor: string;
  footerBgColor: string;
  primaryBoxShadow: string;
  secondaryBoxShadow: string;
  sidebarBackgroundColor: string;
  contentBgColor: string;
  contentInnerBgColor: string;
  contentInnerInnerBgColor: string;
  borderColor: string;
  // General Table
  tableBorderBottom: string;
  // General Input
  inputBorder: string;
  inputBorderColor: string;
  inputLabelColor: string;
  inputBgColor: string;
  inputPlaceholderColor: string;
  // Modal
  modalBgColor: string;
};

export type ColorsKey = keyof typeof darkColors;

export type IchiTheme = {
  name: Theme;
  // TODO: type this later, looks complicated
  mediaWidth: any,
  images: {
    ichiLogo: string;
    ichi: string;
    banner: string;
    oneTokenBubbles: string;
    howItWorks: string;
    communityBubbles: string;
    topWaves: string;
    theme: string;
  },
  breakpoints: string[];
  space: number[];
  fontSizes: number[];
  fontWeights: number[];
  lineHeights: {
    solid: number;
    title: number;
    copy: number;
  },
  letterSpacings: {
    normal: string;
    tracked: string;
    tight: string;
    mega: string;
  },
  borders: any[];
  radius: any[];
  widths: number[],
  heights: number[];
  maxWidths: number[];
  colors: Colors;

  colorStyles: {
    primaryText: {
      color: ColorsKey;
    },
    primary: {
      color: ColorsKey;
      borderColor: ColorsKey;
      bgColor: ColorsKey;
      '&:hover': {
        color: ColorsKey;
        bgColor: ColorsKey;
      },
    },
    secondary: {
      color: ColorsKey;
      borderColor: ColorsKey;
      bgColor: ColorsKey;
      '&:hover': {
        color: ColorsKey;
        borderColor: ColorsKey;
        bgColor: ColorsKey;
      },
    },
    warning: {
      color: ColorsKey;
      borderColor: ColorsKey;
      '&:hover': {
        color: ColorsKey;
        borderColor: ColorsKey;
      },
    },
    error: {
      color: ColorsKey;
      borderColor: ColorsKey;
      '&:hover': {
        color: ColorsKey;
        borderColor: ColorsKey;
      },
    },
    primaryWithBg: {
      color: ColorsKey;
      bgColor: ColorsKey;
      borderColor: ColorsKey;
      border: '1px solid',
      '&:hover': {
        color: ColorsKey;
        bgColor: ColorsKey;
        borderColor: ColorsKey;
        boxShadow: ColorsKey;
      },
    },
    secondaryWithBg: {
      color: ColorsKey;
      bgColor: ColorsKey;
      borderColor: ColorsKey;
      '&:hover': {
        color: ColorsKey;
        bgColor: ColorsKey;
        borderColor: ColorsKey;
        boxShadow: ColorsKey;
      },
    },
    warningWithBg: {
      color: ColorsKey;
      bgColor: ColorsKey;
      borderColor: ColorsKey;
      '&:hover': {
        bgColor: ColorsKey;
        borderColor: ColorsKey;
      },
    },
    errorWithBg: {
      color: ColorsKey;
      bgColor: ColorsKey;
      borderColor: ColorsKey;
      '&:hover': {
        bgColor: ColorsKey;
        borderColor: ColorsKey;
      },
    },
    transparentBg: {
      bgColor: ColorsKey;
      '&:hover': {
        bgColor: ColorsKey;
      },
    },
  },
  buttonStyles: {
    primaryButton: {
      border: string;
      borderRadius: string;
      color: ColorsKey;
      bgColor: ColorsKey;
      padding: string;
      height: string;
      '&:hover': {
        cursor: string;
        textDecoration: string;
      },
    },
    textButton: {
      border: number,
      color: ColorsKey;
      padding: number,
      height: string;
      bgColor: ColorsKey;
    },
    outlined: {
      borderWidth: string;
      borderStyle: string;
      bgColor: ColorsKey;
    },
    fab: {
      border: string;
      width: string;
      height: string;
      padding: number;
      borderRadius: string;
      justifyContent: string;
      'span.btn-icon': {
        paddingLeft: 0,
      },
    },
    extendedFab: {
      border: string;
      minWidth: string;
      height: string;
      borderRadius: string;
      justifyContent: string;
    },
  },
};
