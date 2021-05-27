import { themeGet } from '@styled-system/theme-get';
import BackgroundImage from 'gatsby-background-image';
import styled from 'styled-components';

const BannerWrapper = styled.div`
  /* ONLY ADDED WITH FLUID gatsby image */
  max-width: 1440px;
  /* height: 700px; */
  width: 100%;
  margin: auto;
  background-color: linear-gradient(180deg, #019ffa 0%, #012c5f 100%);
  /* END */
  padding-top: 100px;
  min-height: 802px;
  overflow: hidden;

  // This targets the gatsby background image div
  & div:first-child {
    @media only screen and (max-width: 1250px) {
      width: inherit !important;
      padding-top: 50px;
    }
  }

  // THis doesn't work, but it would be optimal to compact the image on a small screen
  /* & div:first-child::before, & div:first-child::after {
    @media only screen and (max-width: 1250px) {
      height: 500px;
    }
  } */

  > div.container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: calc(802px - 100px);
    @media only screen and (min-width: 1201px) and (max-width: 1440px) {
      min-height: 100%;
    }
    @media only screen and (max-width: 1099px) {
      min-height: 100%;
    }
    @media only screen and (max-width: 480px) {
      flex-wrap: wrap;
      min-height: 100%;
    }
  }
`;

export const StyledBackgroundImage = styled(BackgroundImage)`
  max-width: 1440px;
  /* height: 700px; */
  width: 100%;
  margin: auto;

  @media only screen and (max-width: 991px) {
    flex-shrink: 0;
    height: 500px;
    padding-top: 50px;
    width: 100%;
  }

  // When the screen is small enough don't show the bubbles
  /* img { */
  .gatsby-image-wrapper {
    @media only screen and (max-width: 1250px) {
      padding-top: 50px;
      display: none;
    }
  }

  .heading {
    font-size: 40px;
    line-height: 49px;
    font-weight: 400;
    letter-spacing: -0.025em;
    /* @media only screen and (max-width: 1440px) {
      font-size: 28px;
    } */

  }

  .sub-heading {
    font-family: Montserrat;
    font-size: 24px;
    letter-spacing: 0;
    line-height: 29px;
    /* @media only screen and (max-width: 1440px) {
      font-size: 18px;
    } */
  }
`;

// export const BannerContent = styled.div`
//   /* background-color: linear-gradient(180deg, #019ffa 0%, #012c5f 100%); */
//   max-width: 1440px;
//   height: 700px;
//   width: 100%;
//   margin: auto;
//   @media only screen and (max-width: 991px) {
//     flex-shrink: 0;
//   }

//   @media only screen and (max-width: 991px) {
//     height: 500px;
//     padding-top: 50px;
//   }

//   // When the screen is small enough don't show the bubbles
//   img {
//     @media only screen and (max-width: 991px) {
//       display: none;
//     }
//   }

//   .heading {
//     font-size: 40px;
//     line-height: 49px;
//     font-weight: 400;
//     letter-spacing: -0.025em;
//     @media only screen and (max-width: 1440px) {
//       font-size: 28px;
//     }

//   }

//   .sub-heading {
//     font-family: Montserrat;
//     font-size: 24px;
//     letter-spacing: 0;
//     line-height: 29px;
//     @media only screen and (max-width: 1440px) {
//       font-size: 18px;
//     }
//   }
// `;

// TODO: Ugly css hack, should be fixed
// https://www.sitepoint.com/css3-responsive-centered-image/
export const BannerImage = styled.div`
  flex-shrink: 0;
  img {
    /* This works ok for the centered image behind the text but would need a lot more work */
    /* position: absolute;
    max-width: 80%;
    top: 25%;
    left: 50%;
    -webkit-transform: translate(-50%, -25%);
    -moz-transform: translate(-50%, -25%);
    -ms-transform: translate(-50%, -25%);
    -o-transform: translate(-50%, -25%);
    transform: translate(-50%, -25%); */

    @media only screen and (max-width: 1600px) {
      margin-left: 0;
    }
    @media only screen and (max-width: 1440px) {
      margin-left: 0;
      /* display: none; */
      /* max-width: 40% */
    }
    @media only screen and (max-width: 991px) {
      max-width: 65%;
    }
    @media only screen and (max-width: 952px) {
      max-width: 65%;
    }
    @media only screen and (max-width: 952px) {
      display: none;
    }
    /* @media only screen and (max-width: 480px) {
      max-width: 70%;
      display: none;
    } */
  }
`;

export const ButtonGroup = styled.div`
  margin-top: 35px;

  .reusecore__button {
    text-transform: inherit;
    border-radius: 5px;
    padding-left: 16px;
    padding-right: 16px;
    margin-top: 5px;
    font-size: 14px;
    font-weight: 500;
    text-transform: uppercase;
    &.left-margin-15 {
      margin-left: 15px;
    }
    &.primary {
      background-color: ${themeGet('colors.primary')};
      color: ${themeGet('colors.white')};
      font-weight: bold;
    }
    &.secondary {
      background-color: ${themeGet('colors.secondary')};
      color: ${themeGet('colors.primary')};
      font-weight: bold;
    }

    /* #&.primary {
    #  background-image: linear-gradient(to right, #4ba1d8, #4464bd 95%);
    #  &:hover {
    #    box-shadow: rgba(75, 109, 235, 0.78) 0px 12px 24px -10px;
    #  }
    #} */

    &.text {
      margin-left: 15px;
      /* #color: #fff; */
      border: 1px solid rgba(255, 255, 255, 0.302);
    }
  }
`;

export default BannerWrapper;
