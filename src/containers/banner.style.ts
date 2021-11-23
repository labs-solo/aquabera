import { themeGet } from '@styled-system/theme-get';
import BackgroundImage from 'gatsby-background-image';
import styled from 'styled-components';

const BannerWrapperOuter = styled.div`
  /* ONLY ADDED WITH FLUID gatsby image */
  max-width: 1440px;
  /* height: 700px; */
  width: 100%;
  margin: auto;
  background-color: linear-gradient(180deg, #019ffa 0%, #012c5f 100%);
  /* END */
  padding-top: 100px;
  min-height: 700px;
  overflow: hidden;
`;

export  const BannerWrapper = styled.div`
  /* ONLY ADDED WITH FLUID gatsby image */
  max-width: 1440px;
  /* height: 700px; */
  width: 100%;
  margin: auto;
  background-color: linear-gradient(180deg, #019ffa 0%, #012c5f 100%);
  /* END */
  min-height: 700px;
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

export const StyledBackgroundGradient = styled.div`
  font-size: 19px;
  font-weight: 500; 
  max-width: 1440px;
  width: 100%;
  margin: auto;
  padding-top: 30px;
  height: 75px;
  background-image: linear-gradient(to right, #7200d9, #015db9);
  @media only screen and (max-width: 991px) {
    padding-top: 20px;
  }
`;

export const StyledBackgroundImage = styled(BackgroundImage)`
  max-width: 1440px;
  /* height: 700px; */
  width: 100%;
  margin: auto;
  padding-top: 150px;

  @media only screen and (max-width: 991px) {
    flex-shrink: 0;
    height: 500px;
    padding-top: 50px;
    width: 100%;
    padding-top: 250px;
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
    font-weight: 600;
    letter-spacing: -0.025em;
    width: 100%;
    max-width: 520px;
    @media (min-width: 1251px) and (max-width: 1440px) {
      width: 360px;
      margin-left: -160px;
      font-size: 34px;
      line-height: 42px;
    }

  }

  .sub-heading {
    font-family: Montserrat;
    font-size: 24px;
    letter-spacing: 0;
    line-height: 29px;
    width: 100%;
    max-width: 520px;
    @media (min-width: 1251px) and (max-width: 1440px) {
      width: 360px;
      margin-left: -160px;
      font-size: 22px;
      line-height: 28px;
    }
  }

  .btn-group {
    @media (min-width: 1251px) and (max-width: 1440px) {
      margin-left: -160px;
    }
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
    @media (min-width: 1251px) and (max-width: 1440px) {
      margin-left: -160px;
    }
  }
`;

export default BannerWrapperOuter;
