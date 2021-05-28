import { themeGet } from '@styled-system/theme-get';
import { darkTheme } from 'common/theme/dark/darkTheme';
import { lightTheme } from 'common/theme/light/lightTheme';
import styled, { createGlobalStyle } from 'styled-components';
import IconCertikDark from '../common/assets/image/dark/icon_certik_dark.svg';
import IconQuantstampLight from '../common/assets/image/dark/icon_quantstamp_light.svg';
import IconSolidifiedDark from '../common/assets/image/dark/icon_solidified_dark.svg';
import IconOneBtc from '../common/assets/image/ichi/oneTokens/logo_256_bitcoin.svg';
import IconBnt from '../common/assets/image/ichi/oneTokens/logo_256_bnt.svg';
import IconOneLink from '../common/assets/image/ichi/oneTokens/logo_256_chainlink.svg';
import IconOneEth from '../common/assets/image/ichi/oneTokens/logo_256_eth.svg';
import IconOneTokens from '../common/assets/image/ichi/oneTokens/logo_256_oneTokens.svg';
import IconOneVBTC from '../common/assets/image/ichi/oneTokens/logo_256_vBTC.svg';
import IconOneWing from '../common/assets/image/ichi/oneTokens/logo_256_wing.svg';
import IconLink from '../common/assets/image/ichi/tokens/chainlink.svg';
import IconUsdc from '../common/assets/image/ichi/tokens/usdc.svg';
import Icon1Inch from '../common/assets/image/icons/icon_1inch.svg';
import IconBalance from '../common/assets/image/icons/icon_balance.svg';
import IconLoopring from '../common/assets/image/icons/icon_loopring.svg';
import IconMoon from '../common/assets/image/icons/icon_moon.svg';
import IconMoonbeam from '../common/assets/image/icons/icon_moonbeam.svg';
import IconSolana from '../common/assets/image/icons/icon_solana.svg';
import IconSushiSwap from '../common/assets/image/icons/icon_sushiswap.svg';
import IconTelegram from '../common/assets/image/icons/icon_telegram.svg';
import IconCertikLight from '../common/assets/image/light/icon_certik_light.svg';
import IconQuantstampDark from '../common/assets/image/light/icon_quantstamp_dark.svg';
import IconSolidifiedLight from '../common/assets/image/light/icon_solidified_light.svg';

const GlobalStyle = createGlobalStyle`
  html {
    /* With Typography this is critical for the site to look correct otherwise there is a double scroll bar */
    /* and the sticky get messed up */
    /* https://stackoverflow.com/questions/13028584/browsers-scrollbar-is-under-my-fixed-div */
    /* https://www.gatsbyjs.com/plugins/gatsby-plugin-typography/ */
    overflow:auto;
    overflow:initial;

  }

  body {
    font-family: Montserrat;

    -ms-overflow-style: none;  /* Internet Explorer 10+ */
    scrollbar-width: none;  /* Firefox */

    /* Margin top */
    & .mt-5 {
      margin-top: 5px;
    }
    & .mt-10 {
      margin-top: 10px;
    }
    & .mt-20 {
      margin-top: 20px;
    }
    & .mt-40 {
      margin-top: 40px;
    }
    /* Margin bottom */
    & .mb-40 {
      margin-bottom: 40px;
    }
    /* Margin left */
    & .ml-10 {
      margin-left: 10px;
    }
    & .ml-20 {
      margin-left: 20px;
    }
    & .ml-40 {
      margin-left: 40px;
    }

    & .mlr-auto {
      margin-left: auto;
      margin-right: auto;
    }

    .ui.menu .text.item > *,
    .ui.menu .item > a:not(.ui),
    .ui.menu .item > p:only-child {
      -webkit-user-select: text;
      -moz-user-select: text;
      -ms-user-select: text;
      user-select: text;
      line-height: 1.3;
    }

    
    & .primary-button {
      width: 130px;
      border-radius: 25px;
      background: linear-gradient(139.74deg, #00C9FF 0%, #0676FF 100%);
      font-size: 16px;
      font-weight: 600;
      letter-spacing: 0;
      line-height: 19px;
    }

    & .secondary-button {
      width: 130px;
      border-radius: 25px;
      background-color: #4D8BC9;
      font-size: 16px;
      font-weight: 600;
      letter-spacing: 0;
      line-height: 19px;
    }

    & .color-white {
      color: #ffffff
    }

    & .text-align-left {
      text-align: left;
    }

    & .text-align-center {
      text-align: center;
    }

    /* ------------------------------------- */
    /* Icons  */
    /* ------------------------------------- */
    & .icon-telegram {
      content: url(${IconTelegram})
    }
    & .icon-oneETH {
      content: url(${IconOneEth})
    }
    & .icon-oneBTC {
      content: url(${IconOneBtc})
    }
    & .icon-1inch {
      content: url(${Icon1Inch})
    }
    & .icon-LINK {
      content: url(${IconLink})
    }
    & .icon-link {
      content: url(${IconLink})
    }
    & .icon-oneLINK {
      content: url(${IconOneLink})
    }
    & .icon-oneWING {
      content: url(${IconOneWing})
    }
    & .icon-oneVBTC {
      content: url(${IconOneVBTC})
    }
    & .icon-USDC {
      content: url(${IconUsdc})
    }
    & .icon-BNT {
      content: url(${IconBnt})
    }
    & .icon-bpt {
      content: url(${IconOneTokens})
    }
    & .icon-Balancer {
      content: url(${IconBalance})
    }
    & .icon-Loopring {
      content: url(${IconLoopring})
    }
    & .icon-Moonbeam {
      content: url(${IconMoonbeam})
    }
    & .icon-Solana {
      content: url(${IconSolana})
    }
    & .icon-Sushiswap {
      content: url(${IconSushiSwap})
    }
    & .icon-Moon {
      content: url(${IconMoon})
    }

    &.dark-mode {

      background-color: ${darkTheme.colors.bgColor};

      & .bg-color {
        background-color: ${darkTheme.colors.bgColor}
      }

      & .section-header-color {
        color: ${darkTheme.colors.headingColor}
      }

      & .sub-heading-color {
        color: ${darkTheme.colors.subHeadingColor}
      }

      & .primary-text-color {
        color: ${darkTheme.colors.primaryTextColor}
      }

      & .primary-color {
        color: ${darkTheme.colors.primary}
      }

      /* ------------------------------------- */
      /* Images  */
      /* ------------------------------------- */
      & .image-ichi-logo {
        margin-top: auto;
        margin-bottom: auto;
        content: url(${darkTheme.images.ichiLogo})
      }
      & .image-ichi {
        content: url(${lightTheme.images.ichi})
      }
      & .image-banner {
        content: url(${darkTheme.images.banner})
      }
      & .image-banner-bg {
        background-image: url(${darkTheme.images.banner});
      }
      & .image-one-token-bubbles {
        content: url(${darkTheme.images.oneTokenBubbles})
      }
      & .image-how-it-works {
        content: url(${darkTheme.images.howItWorks})
      }
      & .image-community-bubbles {
        content: url(${darkTheme.images.communityBubbles})
      }
      & .icon-theme-switcher {
        margin-top: auto;
        margin-bottom: auto;
        content: url(${darkTheme.images.theme})
      }

      /* ------------------------------------- */
      /* Icons  */
      /* ------------------------------------- */
      & .icon-Quantstamp {
        content: url(${IconQuantstampLight})
      }
      & .icon-Certik {
        content: url(${IconCertikDark})
      }
      & .icon-Solidified {
        content: url(${IconSolidifiedDark})
      }

      /* ------------------------------------- */
      /* How it work section  */
      /* ------------------------------------- */
      & .how-it-works {
        background: linear-gradient(180deg, ${darkTheme.colors.bgColor} 0%, #071426 25%, #071426 75%, ${darkTheme.colors.bgColor} 100%);
      }

      /* ------------------------------------- */
      /* Join the community */
      /* ------------------------------------- */
      & .top-waves-bg {
        background: url(${darkTheme.images.topWaves});
        background-repeat: no-repeat;
        background-color: ${darkTheme.colors.contentInnerBgColor};
      }
    }

    &.light-mode {

      background-color: ${lightTheme.colors.bgColor};

      & .bg-color {
        background-color: ${lightTheme.colors.bgColor}
      }

      & .section-header-color {
        color: ${lightTheme.colors.headingColor}
      }

      & .sub-heading-color {
        color: ${lightTheme.colors.subHeadingColor}
      }

      & .primary-text-color {
        color: ${lightTheme.colors.primaryTextColor}
      }

      & .primary-color {
        color: ${lightTheme.colors.primary}
      }

      /* ------------------------------------- */
      /* Images  */
      /* ------------------------------------- */
      & .image-ichi-logo {
        margin-top: auto;
        margin-bottom: auto;
        content: url(${lightTheme.images.ichiLogo})
      }
      & .image-ichi {
        content: url(${lightTheme.images.ichi})
      }
      & .image-banner {
        content: url(${lightTheme.images.banner})
      }
      & .image-banner-bg {
        background-image: url(${lightTheme.images.banner})
      }
      & .image-one-token-bubbles {
        content: url(${lightTheme.images.oneTokenBubbles})
      }
      & .image-how-it-works {
        content: url(${lightTheme.images.howItWorks})
      }
      & .image-community-bubbles {
        content: url(${lightTheme.images.communityBubbles})
      }
      & .icon-theme-switcher {
        margin-top: auto;
        margin-bottom: auto;
        content: url(${lightTheme.images.theme})
      }

      /* ------------------------------------- */
      /* Icons  */
      /* ------------------------------------- */
      & .icon-Quantstamp {
        content: url(${IconQuantstampDark})
      }
      & .icon-Certik {
        content: url(${IconCertikLight})
      }
      & .icon-Solidified {
        content: url(${IconSolidifiedLight})
      }

      /* ------------------------------------- */
      /* How it work section  */
      /* ------------------------------------- */
      & .how-it-works {
        background: linear-gradient(180deg, #FFFFFF 0%, ${lightTheme.colors.contentInnerBgColor} 25%, ${lightTheme.colors.contentInnerBgColor} 75%, #FFFFFF 100%);
      }

      /* ------------------------------------- */
      /* Join the community */
      /* ------------------------------------- */
      & .top-waves-bg {
        background: url(${lightTheme.images.topWaves});
        background-repeat: no-repeat;
        background-color: ${lightTheme.colors.contentInnerBgColor};
        /* background-color: linear-gradient(180deg, #EDF5FF 100%, #FFFFFF 0%); */
      }
    }
  }

  body::-webkit-scrollbar {
    display: none;  /* Safari and Chrome */
  }


  .reuseModalParentWrapper,
  .reuseModalOverlay {
    z-index: 99999;
    .reuseModalHolder{
      border: 0;
    }
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Montserrat SemiBold'
  }
  p {
    font-family: 'Montserrat'
  }
  section {
    position: relative;
  }
  .reusecore__button {
    font-weight: 500;
  }
  @media only screen and (max-width: 667px) {
    .container {
      width: 100%;
    }
  }
  @media only screen and (max-width: 667px) {
    .container {
      padding-left: 20px;
      padding-right: 20px;
    }
  }
  @media only screen and (width: 320px) {
    .container {
      padding-left: 15px;
      padding-right: 15px;
    }
  }
`;

export const StyledContainer = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  .sticky-active {
    .navbar {
      padding: 20px 0 21px;
      background-color: ${themeGet('colors.white', '#ffffff')};
      background-image: none;
      box-shadow: 0px 3px 8px 0px rgba(43, 83, 135, 0.08);
      @media only screen and (max-width: 1366px) {
        padding: 15px 0 16px;
      }
      .main-logo {
        display: none;
      }
      .logo-alt {
        display: block;
      }
      .mobile-menu {
        top: 72px;
      }
      ul {
        li {
          a {
            font-size: 16px;
            font-weight: 400;
            transition: all 0.3s ease;
            &:hover {
              color: ${themeGet('colors.menuHoverColor', '#03103b')};
            }
          }
          /* &.is-current {
            a {
              color: ${themeGet('colors.menuHoverColor', '#03103b')};
            }
          } */
        }
      }
      .reusecore__button {
        &.menubar {
          color: ${themeGet('colors.secondary', '#000')};
        }
        &.text {
          color: ${themeGet('colors.secondary', '#000')};
          .btn-icon {
            svg {
              stroke: ${themeGet('colors.secondary', '#000')};
            }
          }
          @media only screen and (max-width: 991px) {
          }
        }
      }
    }
  }
`;

export const ContentWrapper = styled.div`
  flex: 1 0 auto;
  width: 100%;
`;

export const SectionHeader = styled.header`
  max-width: 352px;
  width: 100%;
  margin: 0 auto 58px;
  text-align: center;
  @media only screen and (max-width: 991px) {
    margin-bottom: 50px;
  }
  h5 {
    font-size: 14px;
    font-weight: 700;
    line-height: 24px;
    margin-bottom: 12px;
    letter-spacing: 1.5px;
    color: ${themeGet('colors.primary', '#2563FF')};
    text-transform: uppercase;
    @media only screen and (max-width: 991px) {
      font-size: 13px;
      margin-bottom: 10px;
    }
  }
  h2 {
    font-size: 30px;
    line-height: 36px;
    font-weight: 700;
    color: ${themeGet('colors.headingColor', '#0F2137')};
    margin: 0;
    letter-spacing: -1px;
    @media only screen and (max-width: 1366px) {
      font-size: 28px;
      letter-spacing: -0.7px;
    }
    @media only screen and (max-width: 991px) {
      font-size: 26px;
      line-height: 38px;
      letter-spacing: -0.5px;
    }
  }

  .mb-10px {
    margin-bottom: 10px;
  }
`;

export default GlobalStyle;
