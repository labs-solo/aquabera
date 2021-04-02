import { themeGet } from '@styled-system/theme-get';
import styled from 'styled-components';

const SectionWrapper = styled.div`
  padding: 30px 0;
  overflow: hidden;

  @media only screen and (max-width: 1440px) {
    padding: 30px 0;
  }
  @media only screen and (max-width: 480px) {
    padding: 30px 0;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  @media (max-width: 480px) {
    flex-wrap: nowrap;
  }

  .countdown-heading {
    height: 19px;
    color: ${themeGet('colors.footerHeader')};
    font-size: 16px;
    letter-spacing: 0;
    line-height: 19px;
  }

  h2 {
    color: ${themeGet('colors.black')};
    font-size: 32px;
    line-height: 44px;
    margin-bottom: 27px;
    @media only screen and (max-width: 1366px) {
      font-size: 30px;
      line-height: 42px;
      margin-bottom: 20px;
    }
    @media only screen and (max-width: 991px) {
      font-size: 26px;
      line-height: 38px;
    }
    @media only screen and (max-width: 768px) {
      max-width: 100%;
    }
    @media only screen and (max-width: 480px) {
      margin-bottom: 0px;
    }
  }

  .timerCount {
    margin-top: 15px;
    /* margin-bottom: 60px; */

    .NormalClock {
      display: flex;
      align-items: center;
      @media (max-width: 480px) {
        width: 100%;
      }
      .NormalUnitContainer {
        height: 50px;
        width: 70px;
        border-radius: 5px;
        background-color: ${themeGet('colors.secondaryBlue')};
        @media (max-width: 480px) {
          height: 30px;
          width: 40px;
        }
        .NormalupperCard {
          align-items: center;
          display: flex;
          justify-content: center;
          span {
            height: 24px;
            width: 50px;
            font-size: 18px;
            letter-spacing: 0px;
            color: ${themeGet('colors.heading')};
            font-family: 'Montserrat';
            font-weight: 600;
            font-size: 18px;
            text-align: center;
            line-height: 22px;
            @media (max-width: 480px) {
              font-size: 14px;
            }
          }
        }
        .digitLabel {
          height: 24px;
          width: 70px;
          font-size: 14px;
          letter-spacing: 0px;
          line-height: 18px;
          color: ${themeGet('colors.footerHeader')};
          font-family: 'Montserrat';
          font-weight: 500;
          text-align: center;
          margin-top: 12px;
          @media (max-width: 480px) {
            padding-right: 10px;
            font-size: 8px;
            display:block;
            visibility:hidden;
          }
        }
        .digitLabel:first-letter {
          @media (max-width: 480px) {
            visibility:visible;
          }
        }
      }
      .dividerColon {
        color: black;
        font-family: 'Montserrat';
        font-weight: 700;
        text-align: center;
        padding: 5px;
      }
    }
  }
  .reusecore__button {
    text-transform: inherit;
    border-radius: 5px;
    padding-left: 16px;
    padding-right: 16px;
    font-size: 14px;
    font-weight: 500;
    text-transform: uppercase;
    margin-top: 30px;

    &.primary {
      background-image: linear-gradient(to right, #4ba1d8, #4464bd 95%);
      &:hover {
        box-shadow: rgba(75, 109, 235, 0.78) 0px 9px 20px -10px;
      }
    }
  }
`;

export default SectionWrapper;
