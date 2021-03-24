import { themeGet } from '@styled-system/theme-get';
import styled from 'styled-components';

export const USDCWrapper = styled.span`
  color: ${themeGet('colors.primary')};
  font-weight: bold;
`;

export const WBTCWrapper = styled.span`
  color: ${themeGet('colors.primary')};
  font-weight: bold;
`;

export const HowDoesItWorkSectionWrapper = styled.section`
  padding: 80px 0 180px 0;
  @media (max-width: 990px) {
    padding: 60px 0 60px 0;
  }
  @media (max-width: 767px) {
    padding: 60px 0 30px 0;
  }
  .sectionHeader {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 0px;
  }

  img {
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;

    @media (max-width: 1000px) {
      max-width: 100%;
    }
  }

  .how-it-works-contents {
    /* border: 2px solid ${themeGet('colors.orange')}; */
    border: 2px solid rgba(234, 151, 61, .5);
    padding: 50px;
  }

  .feature__block {
    position: relative;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transition: all 0.3s ease;
    padding: 0 20px;
    cursor: pointer;
    border-radius: 5px;
    &:hover {
      background-image: linear-gradient(
        to bottom,
        transparent 50%,
        rgba(255, 255, 255, 0.031)
      );
    }
    @media (max-width: 500px) {
      padding: 15px 0;
      &:hover {
        background-image: none;
      }
    }
  }

  .number-circle {
    /* background: #e3e3e3; */
    border: 2px solid ${themeGet('colors.primary')};
    border-radius: 50%;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    color: ${themeGet('colors.primary')};
    display: inline-block;
    font-weight: bold;
    line-height: 20px;
    margin-right: 5px;
    text-align: center;
    width: 25px;
  }

  .steps-container {
    margin-top: 20px;
    display: flex;
    align-items: center;
    & .steps {
      display: block;
    }
    & .step {
      padding: 5px;
      color: ${themeGet('colors.steps')};
    }
  }
`;
