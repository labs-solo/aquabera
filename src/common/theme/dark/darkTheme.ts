// import PreferencesIconActive from 'common/assets/image/ichi/icons/dark/icon_preferences_active.svg';
// import IconClose from 'common/assets/image/ichi/icons/dark/icon_close.svg';
// import IconIchiOwned from 'common/assets/image/ichi/icons/dark/icon_ichi_blue.svg';
// import IconIchiWhite from 'common/assets/image/ichi/icons/dark/icon_ichi_white.svg';
// import IconHelp from 'common/assets/image/ichi/icons/dark/icon_info.svg';
// import IconLp from 'common/assets/image/ichi/icons/dark/icon_lp.svg';
// import IconPreferencesInactive from 'common/assets/image/ichi/icons/dark/icon_preferences_inactive.svg';
// import IconXIchiOwned from 'common/assets/image/ichi/icons/dark/icon_xichi_green.svg';
// import IconEth from 'common/assets/image/ichi/icons/light/eth_black.svg';
// import IconIchiApy from 'common/assets/image/ichi/icons/light/icon_ichi_percentage.svg';
// import IconXIchiIchiRatio from 'common/assets/image/ichi/icons/light/icon_ichi_xichi.svg';
// import IconNewWindow from 'common/assets/image/ichi/icons/light/icon_new_window.svg';
// import IconWBTC from 'common/assets/image/ichi/icons/light/icon_wbtc.svg';
// import IconSidebar from 'common/assets/image/ichi/logo_horizontal_dark/ichi_logo_horizontal_dark.svg';
// import IconTheme from 'common/assets/image/ichi/theme/dark_mode.svg';
import ImageBanner from 'common/assets/image/dark/bg_hero.jpg';
import ImageTopWaves from 'common/assets/image/dark/bg_top_waves_dark.svg';
import ImageMainSection from 'common/assets/image/dark/bg_main_section.png';
import ImageAngelVaultsSection from 'common/assets/image/dark/bg_angel_vaults.png';
import ImageBrandedDollarsSection from 'common/assets/image/dark/bg_branded_dollars.png';
import ImageForm from 'common/assets/image/dark/bg_form.png';
import ImageCommunityBubbles from 'common/assets/image/dark/img_bubbles_community_dark.svg';
import ImageOneTokenBubbles from 'common/assets/image/dark/img_bubbles_onetokens.svg';
import ImageIchi from 'common/assets/image/dark/img_logo_ichi_symbol.svg';
import ImageIchiLogo from 'common/assets/image/dark/img_logo_ichi_white.svg';
import ImageTheme from 'common/assets/image/dark/img_theme.svg';
import ImageHowItWorks from 'common/assets/image/light/img_howitworks.svg';
import IconClose from 'common/assets/image/dark/icon_close.svg';
import ImageLeftArrow from 'common/assets/image/dark/img_left_arrow.png';
import ImageRightArrow from 'common/assets/image/dark/img_right_arrow.png';
import ImageBgPopover from 'common/assets/image/ichi/background_blue.png';
import { ColorsKey, AquaberaTheme, Theme } from 'common/models/theme';
import { css } from 'styled-components';
import darkColors from './darkColors';

import WhiteAquaberaLogo from 'common/assets/image/aquabera/logoWhiteTransparent.svg';
import ImageAquaberaHero from 'common/assets/image/aquabera/aquaberaHero.jpg';

const MEDIA_WIDTHS = {
  upToExtraSmall: 500,
  upToSmall: 720,
  upToMedium: 960,
  upToLarge: 1280,
};

const mediaWidthTemplates: { [width in keyof typeof MEDIA_WIDTHS]: typeof css } = Object.keys(MEDIA_WIDTHS).reduce((accumulator, size) => {
  (accumulator as any)[size] = (a: any, b: any, c: any) => css`
    @media (max-width: ${(MEDIA_WIDTHS as any)[size]}px) {
      ${css(a, b, c)}
    }
  `;
  return accumulator;
}, {}) as any;

export const darkTheme: AquaberaTheme = {
  name: Theme.DARK,
  mediaWidth: mediaWidthTemplates,
  images: {
    hero: ImageAquaberaHero,
    aquaberaLogo: WhiteAquaberaLogo,
    banner: ImageBanner,
    oneTokenBubbles: ImageOneTokenBubbles,
    howItWorks: ImageHowItWorks,
    communityBubbles: ImageCommunityBubbles,
    topWaves: ImageTopWaves,
    theme: ImageTheme,
    bgPopover: ImageBgPopover,
    leftArrow: ImageLeftArrow,
    rightArrow: ImageRightArrow,
    mainSection: ImageMainSection,
    angelVaults: ImageAngelVaultsSection,
    brandedDollars: ImageBrandedDollarsSection,
    form: ImageForm
},
  icons:{
    close: IconClose
  },
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
  borders: [0, '1px solid', '2px solid', '3px solid', '4px solid', '5px solid', '6px solid'],
  radius: [3, 4, 5, 10, 20, 30, 60, 120, '50%'],
  widths: [36, 40, 44, 48, 54, 70, 81, 128, 256],
  heights: [36, 40, 44, 46, 48, 54, 70, 81, 128],
  maxWidths: [16, 32, 64, 128, 256, 512, 768, 1024, 1536],
  colors: darkColors,
  colorStyles: {
    primaryText: {
      color: darkColors.white as ColorsKey,
    },
    primary: {
      color: darkColors.primary as ColorsKey,
      borderColor: darkColors.transparent as ColorsKey,
      bgColor: darkColors.transparent as ColorsKey,
      '&:hover': {
        color: darkColors.primary as ColorsKey,
        bgColor: darkColors.transparent as ColorsKey,
      },
    },
    secondary: {
      color: darkColors.secondary as ColorsKey,
      borderColor: darkColors.transparent as ColorsKey,
      bgColor: darkColors.transparent as ColorsKey,
      '&:hover': {
        color: darkColors.secondaryHover as ColorsKey,
        borderColor: darkColors.transparent as ColorsKey,
        bgColor: darkColors.transparent as ColorsKey,
      },
    },
    warning: {
      color: darkColors.yellow as ColorsKey,
      borderColor: darkColors.yellow as ColorsKey,
      '&:hover': {
        color: darkColors.yellowHover as ColorsKey,
        borderColor: darkColors.yellowHover as ColorsKey,
      },
    },
    error: {
      color: darkColors.secondaryHover as ColorsKey,
      borderColor: darkColors.secondaryHover as ColorsKey,
      '&:hover': {
        color: darkColors.secondary as ColorsKey,
        borderColor: darkColors.secondary as ColorsKey,
      },
    },
    primaryWithBg: {
      color: darkColors.white as ColorsKey,
      bgColor: darkColors.primary as ColorsKey,
      borderColor: darkColors.primary as ColorsKey,
      border: '1px solid',
      '&:hover': {
        color: darkColors.white as ColorsKey,
        bgColor: darkColors.primaryHover as ColorsKey,
        borderColor: darkColors.primaryHover as ColorsKey,
        boxShadow: darkColors.primaryBoxShadow as ColorsKey,
      },
    },
    secondaryWithBg: {
      color: darkColors.black as ColorsKey,
      bgColor: darkColors.secondary as ColorsKey,
      borderColor: darkColors.secondary as ColorsKey,
      '&:hover': {
        color: darkColors.black as ColorsKey,
        bgColor: darkColors.secondaryHover as ColorsKey,
        borderColor: darkColors.secondaryHover as ColorsKey,
        boxShadow: darkColors.secondaryBoxShadow as ColorsKey,
      },
    },
    warningWithBg: {
      color: darkColors.white as ColorsKey,
      bgColor: darkColors.yellow as ColorsKey,
      borderColor: darkColors.yellow as ColorsKey,
      '&:hover': {
        bgColor: darkColors.yellowHover as ColorsKey,
        borderColor: darkColors.yellowHover as ColorsKey,
      },
    },
    errorWithBg: {
      color: darkColors.white as ColorsKey,
      bgColor: darkColors.secondaryHover as ColorsKey,
      borderColor: darkColors.secondaryHover as ColorsKey,
      '&:hover': {
        bgColor: darkColors.secondary as ColorsKey,
        borderColor: darkColors.secondary as ColorsKey,
      },
    },
    transparentBg: {
      bgColor: darkColors.white as ColorsKey,
      '&:hover': {
        bgColor: darkColors.white as ColorsKey,
      },
    },
  },
  buttonStyles: {
    primaryButton: {
      border: 'none',
      borderRadius: '20px',
      color: darkColors.primaryButtonColor as ColorsKey,
      bgColor: darkColors.primaryButtonBgColor as ColorsKey,
      padding: '10px',
      height: 'auto',
      '&:hover': {
        cursor: 'pointer',
        textDecoration: 'underline',
      },
    },
    textButton: {
      border: 0,
      color: darkColors.primary as ColorsKey,
      padding: 0,
      height: 'auto',
      bgColor: darkColors.transparent as ColorsKey,
    },
    outlined: {
      borderWidth: '1px',
      borderStyle: 'solid',
      bgColor: darkColors.transparent as ColorsKey,
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
