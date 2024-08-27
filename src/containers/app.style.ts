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
import IconGoldinLight from '../common/assets/image/light/icon_goldin_light.svg';
import IconGoldinDark from '../common/assets/image/dark/icon_goldin_dark.svg';
import IconAccompliceBlockchainLight from '../common/assets/image/light/icon_accomplice_blockchain_light.svg';
import IconAccompliceBlockchainDark from '../common/assets/image/dark/icon_accomplice_blockchain_dark.svg';
import IconColliderVenturesLight from '../common/assets/image/light/icon_collider_ventures_light.svg';
import IconColliderVenturesDark from '../common/assets/image/dark/icon_collider_ventures_dark.svg';
import IconFirstMileVenturesLight from '../common/assets/image/light/icon_first_mile_ventures_light.svg';
import IconFirstMileVenturesDark from '../common/assets/image/dark/icon_first_mile_ventures_dark.svg';
import Icon1Inch from '../common/assets/image/icons/icon_1inch.svg';
import IconBalance from '../common/assets/image/icons/icon_balance.svg';
import IconDeFiPulse from '../common/assets/image/icons/icon_defipulse.svg';
import IconLoopring from '../common/assets/image/icons/icon_loopring.svg';
import IconMoon from '../common/assets/image/icons/icon_moon.svg';
import IconMoonbeam from '../common/assets/image/icons/icon_moonbeam.svg';
import IconOneFil from '../common/assets/image/icons/icon_onefil.svg';
import IconOneFuse from '../common/assets/image/icons/icon_onefuse.svg';
import IconOneMph from '../common/assets/image/icons/icon_onemph.svg';
import IconOnePerl from '../common/assets/image/icons/icon_oneperl.svg';
import IconOneUni from '../common/assets/image/icons/icon_oneuni.svg';
import IconOne1Inch from '../common/assets/image/icons/icon_one1inch.svg';
import IconOneDodo from '../common/assets/image/icons/icon_onedodo.svg';
import IconSolana from '../common/assets/image/icons/icon_solana.svg';
import IconSushiSwap from '../common/assets/image/icons/icon_sushiswap.svg';
import IconTelegram from '../common/assets/image/icons/icon_telegram.svg';
import IconCertikLight from '../common/assets/image/light/icon_certik_light.svg';
import IconQuantstampDark from '../common/assets/image/light/icon_quantstamp_dark.svg';
import IconSolidifiedLight from '../common/assets/image/light/icon_solidified_light.svg';
import ImageLogoV2 from '../common/assets/image/ichi/image_ichi_v2.svg';
import ImageCoinTelegraph from '../common/assets/image/ichi/media/cointelegraph.png';
import ImageDefiant from '../common/assets/image/ichi/media/defiant.png';
import ImageDefiyield from '../common/assets/image/ichi/media/defiyield.png';
import ImageDecrypt from '../common/assets/image/ichi/media/decrypt.png';
import ImageCoinTribune from '../common/assets/image/ichi/media/cointribune.png';
import ImageInsideTrack from '../common/assets/image/ichi/media/inside-track.jpg';
import { badgeSrc } from 'common/constants/constants';
const IconCryptoholics = 'https://ichi-images.s3.amazonaws.com/logos/cryptoholics.png';


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
    font-family: Lato;

    -ms-overflow-style: none;  /* Internet Explorer 10+ */
    scrollbar-width: none;  /* Firefox */

    & .font-primary{
      font-size: 24px;
      line-height: 28.8px;
      font-weight: 300;    
    }

    & .font-secondary{
      font-size: 16px;
      font-weight: 300;
    }

    .pro-sidebar{
      height: 100%;
      width: 100%;
      min-width: 270px;
      text-align: left;
      transition: width,left,right,.3s;
      position: fixed;
      z-index: 1009;
      left: -100%;
    }
    .pro-sidebar .pro-sidebar-inner .pro-menu-item{
        font-size: 24px;
    }

    .show{
      position: fixed;
      left: 0px;
      @media only screen and (min-width: 1130px) {
        display: none;
      }
    }

    .close-menu-icon{
      height: 26px;
      margin: 20px;

    }

    .no-side-gutters{
      padding-left: 0;
      padding-right: 0;
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
      // width: 160px;
      border-radius: 10px;
      background-color: #287884;
      font-size: 16px;
      font-weight: 600;
      letter-spacing: 0;
      line-height: 19px;
      transition: box-shadow 0.1s ease; /* Smooth transition for the shadow */
    }

    & .primary-button:hover {
      box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.3); /* Shadow effect on hover */
    }

    & .secondary-button {
      // width: 130px;
      border-radius: 10px;
      background-color: #9AD7C6;
      font-size: 16px;
      font-weight: 600;
      letter-spacing: 0;
      line-height: 19px;
      color: #000000;
      transition: box-shadow 0.1s ease; /* Smooth transition for the shadow */
    }

    & .secondary-button:hover {
      box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.3); /* Shadow effect on hover */
    }

    {/* <div className='border-2 border-[#287884] text-md font-bold text-[#287884] bg-transparent rounded-xl px-6 py-2 mt-8 flex justify-center items-center hover:bg-[#287884] hover:text-white transition-colors duration-100'> */}

    & .ghost-button {
      // width: 130px;
      border-radius: 10px;
      border-width: 2px;
      border-color: #287884;
      border-style: solid;
      background-color: transparent;
      font-size: 16px;
      font-weight: 600;
      letter-spacing: 0;
      line-height: 19px;
      color: #287884;
      transition: box-shadow 0.1s ease; /* Smooth transition for the shadow */
    }

    & .ghost-button:hover {
      box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.3); /* Shadow effect on hover */
      background-color: #287884;
      color: #ffffff;
    }

    & .small-button {
      width: 130px;
      border-radius: 25px;
      background: linear-gradient(139.74deg, #00C9FF 0%, #0676FF 100%);
      min-height: 40px;
      height: 40px;
      font-size: 14px;
      line-height: 18px;
      font-weight: 300;
      }

    & .long-button {
      width: 250px;      
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
    & .font-italic {
      font-style: italic;
    }
    & .theme-switcher{
      display: none;
      visibility: hidden;
    }
    & .theme-switcher-icon{
      display: block;
      visibility: visible;
    }
    @media only screen and (max-width: 990px) {
      .theme-switcher{
        display: block;
        visibility: visible;
      }
      & .theme-switcher-icon{
        display: none;
        visibility: hidden;
        }
    }
  
    /* for YouTube videos */
    iframe{
      border: none;
      margin-bottom: 0 !important;
      height: 528px;
      @media (max-width: 900px) {
        height: 400px;
      }
      @media (max-width: 700px) {
        height: 360px;
      }
      @media (max-width: 540px) {
        height: 280px;
      }
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
    & .icon-oneFIL {
      content: url(${IconOneFil})
    }
    & .icon-oneFUSE {
      content: url(${IconOneFuse})
    }
    & .icon-oneMPH {
      content: url(${IconOneMph})
    }
    & .icon-onePERL {
      content: url(${IconOnePerl})
    }
    & .icon-oneUNI {
      content: url(${IconOneUni})
    }
    & .icon-one1INCH {
      content: url(${IconOne1Inch})
    }
    & .icon-oneDODO {
      content: url(${IconOneDodo})
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
    & .icon-balancer {
      content: url(${IconBalance})
    }
    & .icon-cryptoholics {
      content: url(${IconCryptoholics})
    }
    & .icon-loopring {
      content: url(${IconLoopring})
    }
    & .icon-moonbeam {
      content: url(${IconMoonbeam})
    }
    & .icon-solana {
      content: url(${IconSolana})
    }
    & .icon-sushiswap {
      content: url(${IconSushiSwap})
    }
    & .icon-moon {
      content: url(${IconMoon})
    }
    & .image-logo-v2 {
      content: url(${ImageLogoV2})
    }
    /* ------------------------------------- */
    /* Media logos  */
    /* ------------------------------------- */
    & .image-cointelegraph {
      content: url(${ImageCoinTelegraph})
    }
    & .image-defiant {
      content: url(${ImageDefiant})
    }
    & .image-defiyield {
      content: url(${ImageDefiyield})
    }
    & .image-decrypt {
      content: url(${ImageDecrypt})
    }
    & .image-cointribune {
      content: url(${ImageCoinTribune})
    }
    & .image-insidetrack {
      content: url(${ImageInsideTrack})
    }

    & .font-primary{
      font-size: 24px;
      line-height: 28.8px;
      font-weight: 300;
    }
    & .font-primary-title{
      font-size: 18px;
      font-weight: 600;  
      font-family: "lato";  
      text-transform: uppercase;
    }
    & .font-secondary-title{
      font-size: 18px;
      font-weight: 700;    
    }
    & .font-secondary{
      font-size: 20px;
      font-weight: 300;
      color: rgba(0, 0, 0, 0.7);
    }

    &.dark-mode {

      background-color: ${darkTheme.colors.bgColor};

      & .main-container{
        background-color: #1f2c53;
        background-image: url("../images/bg-top.jpg");
        background-repeat: no-repeat;
        background-size: 100% auto;
        background-position: center top;
        @media only screen and (max-width: 1024px) {
          background-size: 1440px auto;
        }
      }

      & .ghost-button {
        border-color: rgba(255, 255, 255, 0.8); /* White with 70% opacity */
        color: rgba(255, 255, 255, 0.8); /* White with 70% opacity */

        &:hover {
          background-color: rgba(255, 255, 255, 0.8); /* White with 70% opacity */
          border-color: rgba(255, 255, 255, 0.8); /* White with 70% opacity */
          color: rgba(0, 0, 0, 0.9);
        }
      }

      & .font-secondary{
        font-size: 20px;
        font-weight: 300;
        color: rgba(255, 255, 255, 0.7);
      }
    
      & .home-page-container{
        background-image: url('../images/bg-top.jpg'), url('../images/bg-bottom.svg');
        background-position: center top 0px, center bottom 120px;
        background-size: 100% auto, 100% auto;
        background-repeat: no-repeat, no-repeat;
        @media only screen and (max-width: 1024px) {
          background-size: 1440px auto, 1440px auto;
        }
        @media (min-width: 2100px) {
          background-image: url('../images/bg-top.jpg');
          background-position: center top;
        }
      }

      & .angel-vaults-section{
        background-image: url('../images/triangle bg.png');
        background-position: center 4px;
        background-repeat: no-repeat;
        background-size: 100% auto;
      
        @media (max-width: 900px) {
          background-position: center 30px;
        }
        @media (max-width: 700px) {
          background-position: center 44px;
          background-size: 130% auto;
        }
      }
      
      & .bg-color {
        background-color: ${darkTheme.colors.bgColor}
      }

      & .secondary-bg-color{
        background-color: #141826;
      }

      & .section-header-color {
        color: ${darkTheme.colors.headingColor}
      }

      & .secondary-header-color {
        color: ${darkTheme.colors.secondaryHeaderColor}
      }

      & .sub-heading-color {
        color: ${darkTheme.colors.subHeadingColor}
      }

      .pro-sidebar .pro-sidebar-inner{
        background-color: #1f2c53;
        color: #ffffff;
      }

      & .media-section-bg-color {
        padding: 60px 0 40px 0;
        margin-top: 40px;
        background: #cccccc;
      }

      & .primary-text-color {
        color: ${darkTheme.colors.primaryTextColor}
      }

      & .secondary-text-color {
        color: ${darkTheme.colors.secondaryTextColor}
      }

      & .primary-color {
        color: ${darkTheme.colors.primary}
      }

      & .secondary-color {
        color: white;
      }

      & .header-link-color {
        color: ${darkTheme.colors.headerLinkColor}     
      }
      & .header-link-color:hover,  .header-link-color:hover a{
        color: #787E91;
      }


      & .link-color {
        color: ${darkTheme.colors.linkColor}
      }

      & .quote-carousel-left-arrow{
        background-image: url(${darkTheme.images.leftArrow})
      }

      & .quote-carousel-right-arrow{
        background-image: url(${darkTheme.images.rightArrow})
      }

      & .navbar {
        padding: 20px 0 21px;
        background-image: none;
        // box-shadow: 0px 3px 8px 0px rgba(43, 83, 135, 0.08);
        .collasible-nav-dropdown a{
          color: ${themeGet('colors.menuHoverColor', '#ffffff')} !important;
        }
        .dropdown-menu{
          padding: 20px 0 21px;
          background-color: ${darkTheme.colors.bgColor};
          box-shadow: 0 0 2px #333333;
        }
      }
      & .navbar-light .navbar-toggler{
        color: '#0676FF' !important;
        background-color: rgba(255,255,255,.2);
        border-color: rgba(255,255,255,.4);
      }
      & .navbar-light .navbar-toggler:hover{
        background-color: rgba(255,255,255,.8);
      }
      & .nav-item, .dropdown-item{
        padding: 8px;
        font-weight: 400;
        transition: all 0.3s ease;
      }
      & .nav-item{
        color: #0676FF !important;
        padding: 8px;
      }
      & .footer{
        background-color: #141826;
      }

      & hr{
        margin-top: 40px;
        margin-bottom: 40px;
        border: none;
        border-top: 1px solid #3C455E;
        height: 0px;
        background-color: #3C455E;
        width: 100%;
      
      }

      & h1{
        color: #ffffff;
      }

      & .input-partnership-form{
        background-color: #0C0F18;
        border: 1px solid #293048;
        color: #ffffff;

        ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
          color: #787E91;
          opacity: 1; /* Firefox */
        }
        
        :-ms-input-placeholder { /* Internet Explorer 10-11 */
          color: #787E91;
        }
        
        ::-ms-input-placeholder { /* Microsoft Edge */
          color: #787E91;
        }
      }
      .input-partnership-form:focus {
        border: 1px solid #ffffff;
      }
      .label{
        background-color: #1D2439;
        color: #ffffff;    
      }



      /* ------------------------------------- */
      /* Images  */
      /* ------------------------------------- */
      & .image-aquabera-logo {
        margin-top: auto;
        margin-bottom: auto;
        content: url(${darkTheme.images.aquaberaLogo})
      }
      & .ichi-black-white {
        content: url('../images/ichi-icon-black.svg');
      }
      & .image-ichi {
        content: url(${darkTheme.images.aquaberaLogo});
        @media (max-width: 1024px) {
          content: url(${darkTheme.images.hero});
        }
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
      & .image-bg-popover {
        content: url(${darkTheme.images.bgPopover})
      }
      & .yield-iq-logo{
        content:url('${badgeSrc}Yield-IQ-Inverted-Color.png');
      }
      & .yield-iq-div{
        background-color: #ffffff;
      }
    
      /* ------------------------------------- */
      /* Icons  */
      /* ------------------------------------- */
      & .chevron-down {
        content: url('../images/arrow.png');
        margin: 120px auto;
      }
      & .angled-arrow {
        content: url('../images/angled arrow.svg');
      }
      & .menu-icon {
        content: url('../images/sandwich-menu-icon.svg');
        height: 20px; 
        margin-right: 20px;
        cursor: pointer;
      }
      & .close-menu-icon {
        content: url('../images/close-menu-icon.svg');
      }
      & .icon-quantstamp {
        content: url(${IconQuantstampLight})
      }
      & .icon-certik {
        content: url(${IconCertikDark})
      }
      & .icon-solidified {
        content: url(${IconSolidifiedDark})
      }
      & .icon-goldin {
        content: url(${IconGoldinDark})
      }
      & .icon-accomplice-blockchain {
        content: url(${IconAccompliceBlockchainDark})
      }
      & .icon-collider-ventures {
        content: url(${IconColliderVenturesDark})
      }
      & .icon-first-mile-ventures {
        content: url(${IconFirstMileVenturesDark})
      }
      & .image-github {
        content: url('../images/github.svg');
      }
      & .icon-medium {
        content: url('../images/medium.png');
      }
      & .icon-twitter {
        content: url('../images/twitter.svg');
      }
      
      /* ------------------------------------- */
      /* Logos  */
      /* ------------------------------------- */
      & .oneinch {
        content: url('../images/partners/1inch.svg');
      }
      & .accomplice {
        content: url('../images/partners/accomplice.svg');
      }
      & .asbury {
        content: url('../images/partners/Asbury_logo.png');
      }
      & .balancer {
        content: url('../images/partners/balancer.svg');
      }
      & .baller {
        content: url('../images/partners/baller.png');
      }
      & .certik {
        content: url('../images/partners/certik.svg');
      }
      & .collider {
        content: url('../images/partners/collider.svg');
      }
      & .cosimo {
        content: url('../images/partners/Cosimo-Ventures-Grey-1.svg');
      }
      & .cryptoholics {
        content: url(${IconCryptoholics})
      }
      & .defipulse {
        content: url(${IconDeFiPulse})
      }
      & .elliptic {
        content: url('../images/partners/Elliptic_Logo.png');
      }
      & .efficientfrontier {
        content: url('../images/partners/efficient-frontier-white.png');
      }
      & .first-mile {
        content: url('../images/partners/first mile.svg');
      }
      & .fundamental-labs {
        content: url('../images/partners/fundamental labs.svg');
      }
      & .goldin {
        content: url('../images/partners/goldin.svg');
      }
      & .gsr {
        content: url('../images/partners/gsr.png');
      }
      & .lattice {
        content: url('../images/partners/lattice capital.svg');
      }
      & .ld-capital {
        content: url('../images/partners/ld-capital.png');
      }
      & .lightshift {
        content: url('../images/partners/lightshift captial.svg');
      }
      & .loopring {
        content: url('../images/partners/loopring.svg');
      }
      & .moonbeam {
        content: url('../images/partners/moonbeam.svg');
      }
      & .quantstamp {
        content: url('../images/partners/quantstamp.svg');
      }
      & .solana {
        content: url('../images/partners/solana.svg');
      }
      & .solidified {
        content: url('../images/partners/solidified.svg');
      }
      & .sushi {
        content: url('../images/partners/sushi.svg');
      }
      & .trgc {
        content: url('../images/partners/trgc.svg');
      }
      & .woodstock {
        content: url('../images/partners/woodstock.png');
      }

      /* ------------------------------------- */
      /* Main section */
      /* ------------------------------------- */
      & .bg-main-section {
        background: url(${darkTheme.images.mainSection});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center top;
        background-color: ${darkTheme.colors.contentInnerBgColor};
      }

      /* ------------------------------------- */
      /* Angel Vaults section */
      /* ------------------------------------- */
      & .bg-angel-vaults {
        background: url(${darkTheme.images.angelVaults});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center top;
        background-color: ${darkTheme.colors.contentInnerBgColor};
      }

      /* ------------------------------------- */
      /* Branded Dollars section */
      /* ------------------------------------- */
      & .bg-branded-dollars {
        background: url(${darkTheme.images.brandedDollars});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center top;
        background-color: ${darkTheme.colors.contentInnerBgColor};
      }

      /* ------------------------------------- */
      /* Partnership Request Form */
      /* ------------------------------------- */
      & .bg-form {
        background: url(${darkTheme.images.form});
        background-repeat: no-repeat;
        background-size: 100% auto;
        background-position: center 90px;
      }
      & .form {
        background-color: #1D2439;
        padding: 90px 100px 75px 100px;
        border-radius: 20px;
        width: 700px;
      }
      @media only screen and (max-width: 700px) {
        .form {
          width: 100%;
          padding: 40px 15px;
        }
      }
    
      input[type="text"], input[type="email"], textarea {
        display: block;
        width: 100%;
        padding: 12px 15px;
        border-radius: 6px;
        margin: 16px auto 0px auto;
        font-size: 20px;
        font-weight: 300;
    
      }
    
      textarea {
        height: 180px;
        border-radius: 10px;
      }
    
      .form-button{
        width: 100% !important;
        margin-top: 40px;
      }
      .disabled-form-button {
        background-color: #47516a;
        border-radius: 10px;
        margin-top: 40px;
        width: 100% !important;
        color: #787E91;
        cursor: not-allowed !important;
      }
    
      .field{
        position: relative;
      }
      .label{
        position: absolute;
        left: 15px;
        top: -8px;
        font-size: 14px; 
        line-height: 14px;  
        padding: 0 3px;
        border-radius: 3px; 
      }
      .label-hidden{
        display: none;
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

      /* ------------------------------------- */
      /* Popover */
      /* ------------------------------------- */
      & .inner-box-bg-color {
        background-color: ${darkTheme.colors.contentInnerBgColor};
      }


    }

    &.light-mode {

      background-color: ${lightTheme.colors.bgColor};

      & .main-container{
        background-color: #fffff;
        background-image: url('../images/bg-top-light.png');
        background-repeat: no-repeat;
        background-size: 100% auto;
        background-position: center top;
        @media only screen and (max-width: 1024px) {
          background-size: 1440px auto;
        }
      }

      & .home-page-container{
        background-image: url('../images/bg-top-light.png'), url('../images/bg-bottom-light.png');
        background-position: center top 0px, center bottom 120px;
        background-size: 100% auto, 100% auto;
        background-repeat: no-repeat, no-repeat;
        @media only screen and (max-width: 1024px) {
          background-size: 1440px auto, 1440px auto;
        }
        @media (min-width: 2100px) {
          background-image: url('../images/bg-top-light.png');
          background-position: center top;
        }
      }

      & .angel-vaults-section{
        background-image: none;
      }
      
      & .bg-color {
        background-color: ${lightTheme.colors.bgColor}
      }

      & .secondary-bg-color{
        background-color: #ffffff;
        border: 1px solid #e0e0e0;
      }

      & .section-header-color {
        color: ${lightTheme.colors.headingColor};
        font-weight: 600;
      }

      & .secondary-header-color {
        color: ${lightTheme.colors.secondaryHeaderColor}
      }

      & .sub-heading-color {
        color: ${lightTheme.colors.subHeadingColor}
      }

      .pro-sidebar .pro-sidebar-inner{
        background-color: #ffffff;
        color: #333333;
      }

      & .media-section-bg-color {
        background-image: linear-gradient(${lightTheme.colors.bgColor}, #efefef)
      }

      & .primary-text-color {
        color: ${lightTheme.colors.primaryTextColor}
      }

      & .secondary-text-color {
        color: ${lightTheme.colors.secondaryTextColor}
      }

      & .primary-color {
        color: ${lightTheme.colors.primary};
        font-weight: 600;
      }
      
      & .secondary-color {
        color: white;
        @media (max-width: 700px) {
          color: #666666;
        }
      }

      & .header-link-color {
        color: ${lightTheme.colors.headerLinkColor}
      }
      & .header-link-color:hover,  .header-link-color:hover a{
        color: #287884;
      }

      & .link-color {
        color: ${lightTheme.colors.linkColor}
      }

      & .quote-carousel-left-arrow{
        background-image: url(${lightTheme.images.leftArrow})
      }

      & .quote-carousel-right-arrow{
        background-image: url(${lightTheme.images.rightArrow})
      }

      & .navbar {
        padding: 20px 0 21px;
        background-color: ${themeGet('colors.white', '#ffffff')};
        background-image: none;
        box-shadow: 0px 3px 8px 0px rgba(43, 83, 135, 0.08);
        a {color: '#0676FF'}
        .collasible-nav-dropdown a{
          color: ${themeGet('colors.menuHoverColor', '#0676FF')} !important;
        }
      }
      & .navbar-light .navbar-toggler{
        color: '#0676FF' !important;
        border-color: rgba(0,0,0,.1);
      }
      & .nav-item, .dropdown-item{
        padding: 8px;
        font-weight: 400;
        transition: all 0.3s ease;
      }
      & .nav-item{
        color: #0676FF !important;
        padding: 8px;
      }
      & .footer{
        background-color: #ffffff;
        border-top: 1px solid #e0e0e0;
        border-bottom: none;
      }

      & hr{
        margin-top: 40px;
        margin-bottom: 40px;
        border: none;
        border-top: 1px solid #e0e0e0;
        height: 0px;
        background-color: #e0e0e0;
        width: 100%;
      
      }

      & h1{
        color: #333333;
      }
      
      & .input-partnership-form{
        background-color: #ffffff;
        border: 1px solid #e0e0e0;
        color: #333333;

        ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
          color: #888888;
          opacity: 1; /* Firefox */
        }
        
        :-ms-input-placeholder { /* Internet Explorer 10-11 */
          color: #888888;
        }
        
        ::-ms-input-placeholder { /* Microsoft Edge */
          color: #888888;
        }
      }
      .input-partnership-form:focus {
      }
      .label{
        background-color: #ffffff;
        color: #333333; 
        font-weighth: 600;   
      }

      /* ------------------------------------- */
      /* Images  */
      /* ------------------------------------- */
      & .image-aquabera-logo {
        margin-top: auto;
        margin-bottom: auto;
        content: url(${lightTheme.images.aquaberaLogo})
      }
      & .ichi-black-white {
        content: url('../images/ichi icon white.svg');
      }
      & .image-aquabera {
        content: url(${lightTheme.images.aquaberaLogo});
        @media (max-width: 1024px) {
          content: url(${lightTheme.images.hero});
        }
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
      & .image-bg-popover {
        content: url(${darkTheme.images.bgPopover})
      }
      & .yield-iq-logo{
        content:url('${badgeSrc}Yield-IQ.png');
      }
      & .yield-iq-div{
        background-color: #222222;
      }
    
      /* ------------------------------------- */
      /* Icons  */
      /* ------------------------------------- */
      & .chevron-down {
        content: url('../images/arrow-blue.png');
        margin: 120px auto;
      }
      & .angled-arrow {
        content: url('../images/angled arrow dark.svg');
      }
      & .menu-icon {
        content: url('../images/sandwich-menu-icon-light.svg');
        height: 20px; 
        margin-right: 20px;
        cursor: pointer;
      }
      & .close-menu-icon {
        content: url('../images/close-menu-icon-light.svg');
      }
      & .icon-quantstamp {
        content: url(${IconQuantstampDark})
      }
      & .icon-certik {
        content: url(${IconCertikLight})
      }
      & .icon-solidified {
        content: url(${IconSolidifiedLight})
      }
      & .icon-goldin {
        content: url(${IconGoldinLight})
      }
      & .icon-accomplice-blockchain {
        content: url(${IconAccompliceBlockchainLight})
      }
      & .icon-collider-ventures {
        content: url(${IconColliderVenturesLight})
      }
      & .icon-first-mile-ventures {
        content: url(${IconFirstMileVenturesLight})
      }
      & .image-github {
        content: url('../images/github-black-bg.svg');
      }
      & .icon-medium {
        content: url('../images/medium-light.png');
      }
      & .icon-twitter {
        content: url('../images/twitter.svg');
      }

      /* ------------------------------------- */
      /* Logos  */
      /* ------------------------------------- */
      & .oneinch {
        content: url('../images/partners/1inch.svg');
      }
      & .accomplice {
        content: url('../images/partners/accomplice-light.svg');
      }
      & .asbury {
        content: url('../images/partners/Asbury_logo.png');
      }
      & .balancer {
        content: url('../images/partners/balancer.svg');
      }
      & .baller {
        content: url('../images/partners/baller.png');
      }
      & .certik {
        content: url('../images/partners/certik-light.svg');
      }
      & .collider {
        content: url('../images/partners/collider-light.svg');
      }
      & .cosimo {
        content: url('../images/partners/Cosimo-Ventures-Grey-1.svg');
      }
      & .cryptoholics {
        content: url(${IconCryptoholics})
      }
      & .defipulse {
        content: url(${IconDeFiPulse})
      }
      & .elliptic {
        content: url('../images/partners/Elliptic_Logo.png');
      }
      & .efficientfrontier {
        content: url('../images/partners/efficient-frontier.png');
      }
      & .first-mile {
        content: url('../images/partners/first-mile-light.png');
      }
      & .fundamental-labs {
        content: url('../images/partners/fundamental labs-light.svg');
      }
      & .goldin {
        content: url('../images/partners/goldin-light.svg');
      }
      & .gsr {
        content: url('../images/partners/gsr-light.png');
      }
      & .lattice {
        content: url('../images/partners/lattice capital.svg');
      }
      & .ld-capital {
        content: url('../images/partners/ldcapital-light.png');
      }
      & .lightshift {
        content: url('../images/partners/lightshift captial-light.svg');
      }
      & .loopring {
        content: url('../images/partners/loopring.svg');
      }
      & .moonbeam {
        content: url('../images/partners/moonbeam.svg');
      }
      & .quantstamp {
        content: url('../images/partners/quantstamp.svg');
      }
      & .solana {
        content: url('../images/partners/solana.svg');
      }
      & .solidified {
        content: url('../images/partners/solidified-light.svg');
      }
      & .sushi {
        content: url('../images/partners/sushi.svg');
      }
      & .trgc {
        content: url('../images/partners/trgc-light.svg');
      }
      & .woodstock {
        content: url('../images/partners/woodstock.png');
      }

      
      /* ------------------------------------- */
      /* Partnership Request Form */
      /* ------------------------------------- */
      & .bg-form {
        background: url('../images/form-background-light.png');
        background-repeat: no-repeat;
        background-size: 100% auto;
        background-position: center 90px;
      }
      & .form {
        background-color: #ffffff;
        border: 1px solid #e0e0e0;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, .2);
        padding: 90px 100px 75px 100px;
        border-radius: 20px;
        width: 700px;
      }
      @media only screen and (max-width: 700px) {
        .form {
          width: 100%;
          padding: 40px 15px;
        }
      }
    
      input[type="text"], input[type="email"], textarea {
        display: block;
        width: 100%;
        padding: 12px 15px;
        border-radius: 6px;
        margin: 16px auto 0px auto;
        font-size: 20px;
        font-weight: 300;
    
      }
    
      textarea {
        height: 180px;
        border-radius: 10px;
      }
    
      .form-button{
        width: 100% !important;
        margin-top: 40px;
      }
      .disabled-form-button {
        background-color: #47516a;
        border-radius: 10px;
        margin-top: 40px;
        width: 100% !important;
        color: #787E91;
        cursor: not-allowed !important;
      }
    
      .field{
        position: relative;
      }
      .label{
        position: absolute;
        left: 15px;
        top: -8px;
        font-size: 14px; 
        line-height: 14px;  
        padding: 0 3px;
        border-radius: 3px; 
      }
      .label-hidden{
        display: none;
      }
        
      /* ------------------------------------- */
      /* Popover */
      /* ------------------------------------- */
      & .inner-box-bg-color {
        background-color: ${lightTheme.colors.contentInnerBgColor};
      }
    }
  }



  }

  // body::-webkit-scrollbar {
  //   display: none;  /* Safari and Chrome */
  // }


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
    font-family: 'Lato';
    font-weight: 500;
  }
  h1 {
    font-size: 40px;
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
  .main_container {
    max-width: 1000px;
  }
@media only scree and (min-width: 1220px) {
    .main_container {
      width: 1000px;
    }
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
      .collasible-nav-dropdown a{
        color: ${themeGet('colors.menuHoverColor', '#0676FF')} !important;
      }
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
      .navdropdown-item, .dropdown-item{
        padding: 10px;
        font-size: 16px;
        font-weight: 400;
        transition: all 0.3s ease;
        color: ${themeGet('colors.menuHoverColor', '#0676FF')} !important;
        &:hover {
          color: ${themeGet('colors.menuHoverColor', '#0676FF')} !important;
        }

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
  display: flex;
  flex-direction: column;
  width: 100%;
  // max-width: 1440px;
  margin: 0 auto;

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
