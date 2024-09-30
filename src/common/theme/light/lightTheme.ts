// import IconEth from 'common/assets/image/ichi/icons/light/eth_black.svg';
// import IconPreferencesActive from 'common/assets/image/ichi/icons/light/icon_active_settings.svg';
// import IconClose from 'common/assets/image/ichi/icons/light/icon_close.svg';
// import IconIchiOwned from 'common/assets/image/ichi/icons/light/icon_ichi_blue.svg';
// import IconIchiApy from 'common/assets/image/ichi/icons/light/icon_ichi_percentage.svg';
// import IconIchiWhite from 'common/assets/image/ichi/icons/light/icon_ichi_white.svg';
// import IconXIchiIchiRatio from 'common/assets/image/ichi/icons/light/icon_ichi_xichi.svg';
// import IconHelp from 'common/assets/image/ichi/icons/light/icon_info.svg';
// import IconLp from 'common/assets/image/ichi/icons/light/icon_lp.svg';
// import IconNewWindow from 'common/assets/image/ichi/icons/light/icon_new_window.svg';
// import IconWBTC from 'common/assets/image/ichi/icons/light/icon_wbtc.svg';
// import IconXIchiOwned from 'common/assets/image/ichi/icons/light/icon_xichi_green.svg';
// import IconSidebar from 'common/assets/image/ichi/logo_horizontal_light/ichi_logo_horizontal_light.svg';
// import IconTheme from 'common/assets/image/ichi/theme/light_mode.svg';
import ImageBanner from 'common/assets/image/light/bg_hero.jpg';
import ImageTopWaves from 'common/assets/image/light/bg_top_waves_light.svg';
import ImageMainSection from 'common/assets/image/dark/bg_main_section.png';
import ImageAngelVaultsSection from 'common/assets/image/dark/bg_angel_vaults.png';
import ImageBrandedDollarsSection from 'common/assets/image/dark/bg_branded_dollars.png';
import ImageForm from 'common/assets/image/dark/bg_form.png';
import ImageCommunityBubbles from 'common/assets/image/light/img_bubbles_community_light.svg';
import ImageOneTokenBubbles from 'common/assets/image/light/img_bubbles_onetokens.svg';
import ImageHowItWorks from 'common/assets/image/light/img_howitworks.svg';
import ImageTheme from 'common/assets/image/light/darkModeIcon.svg';
import IconClose from 'common/assets/image/light/icon_close.svg';
import ImageLeftArrow from 'common/assets/image/dark/img_left_arrow.png';
import ImageRightArrow from 'common/assets/image/dark/img_right_arrow.png';
import ImageBgPopover from 'common/assets/image/ichi/background_blue.png';
import { ColorsKey, AquaberaTheme, Theme } from 'common/models/theme';
import { css } from 'styled-components';
import lightColors from './lightColors';

import BlackAquaberaLogo from 'common/assets/image/aquabera/aquaberaTextLogoBlack.svg';
import ImageAquaberaBear from 'common/assets/image/aquabera/aquaberaBear.svg';


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

export const lightTheme: AquaberaTheme = {
  name: Theme.LIGHT, // media queries
  mediaWidth: mediaWidthTemplates,
  images: {
    bear: ImageAquaberaBear,
    aquaberaLogo: BlackAquaberaLogo,
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
  colors: lightColors,
  // Styles
  colorStyles: {
    primaryText: {
      color: lightColors.black as ColorsKey,
    },
    primary: {
      color: lightColors.primary as ColorsKey,
      borderColor: lightColors.transparent as ColorsKey,
      bgColor: lightColors.transparent as ColorsKey,
      '&:hover': {
        color: lightColors.primary as ColorsKey,
        bgColor: lightColors.transparent as ColorsKey,
      },
    },
    secondary: {
      color: lightColors.secondary as ColorsKey,
      borderColor: lightColors.transparent as ColorsKey,
      bgColor: lightColors.transparent as ColorsKey,
      '&:hover': {
        color: lightColors.secondaryHover as ColorsKey,
        borderColor: lightColors.transparent as ColorsKey,
        bgColor: lightColors.transparent as ColorsKey,
      },
    },
    warning: {
      color: lightColors.yellow as ColorsKey,
      borderColor: lightColors.yellow as ColorsKey,
      '&:hover': {
        color: lightColors.yellowHover as ColorsKey,
        borderColor: lightColors.yellowHover as ColorsKey,
      },
    },
    error: {
      color: lightColors.secondaryHover as ColorsKey,
      borderColor: lightColors.secondaryHover as ColorsKey,
      '&:hover': {
        color: lightColors.secondary as ColorsKey,
        borderColor: lightColors.secondary as ColorsKey,
      },
    },
    primaryWithBg: {
      color: lightColors.white as ColorsKey,
      bgColor: lightColors.primary as ColorsKey,
      borderColor: lightColors.primary as ColorsKey,
      border: '1px solid',
      '&:hover': {
        color: lightColors.white as ColorsKey,
        bgColor: lightColors.primaryHover as ColorsKey,
        borderColor: lightColors.primaryHover as ColorsKey,
        boxShadow: lightColors.primaryBoxShadow as ColorsKey,
      },
    },
    secondaryWithBg: {
      color: lightColors.black as ColorsKey,
      bgColor: lightColors.secondary as ColorsKey,
      borderColor: lightColors.secondary as ColorsKey,
      '&:hover': {
        color: lightColors.black as ColorsKey,
        bgColor: lightColors.secondaryHover as ColorsKey,
        borderColor: lightColors.secondaryHover as ColorsKey,
        boxShadow: lightColors.secondaryBoxShadow as ColorsKey,
      },
    },
    warningWithBg: {
      color: lightColors.white as ColorsKey,
      bgColor: lightColors.yellow as ColorsKey,
      borderColor: lightColors.yellow as ColorsKey,
      '&:hover': {
        bgColor: lightColors.yellowHover as ColorsKey,
        borderColor: lightColors.yellowHover as ColorsKey,
      },
    },
    errorWithBg: {
      color: lightColors.white as ColorsKey,
      bgColor: lightColors.secondaryHover as ColorsKey,
      borderColor: lightColors.secondaryHover as ColorsKey,
      '&:hover': {
        bgColor: lightColors.secondary as ColorsKey,
        borderColor: lightColors.secondary as ColorsKey,
      },
    },
    transparentBg: {
      bgColor: lightColors.white as ColorsKey,
      '&:hover': {
        bgColor: lightColors.white as ColorsKey,
      },
    },
  },
  buttonStyles: {
    primaryButton: {
      border: 'none',
      borderRadius: '20px',
      color: lightColors.primaryButtonColor as ColorsKey,
      bgColor: lightColors.primaryButtonBgColor as ColorsKey,
      height: 'auto',
      padding: '10px',
      '&:hover': {
        cursor: 'pointer',
        textDecoration: 'underline',
      },
    },
    textButton: {
      border: 0,
      color: lightColors.primary as ColorsKey,
      padding: 0,
      height: 'auto',
      bgColor: lightColors.transparent as ColorsKey,
    },
    outlined: {
      borderWidth: '1px',
      borderStyle: 'solid',
      bgColor: lightColors.transparent as ColorsKey,
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
