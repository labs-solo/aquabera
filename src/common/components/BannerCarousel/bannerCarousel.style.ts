import styled from 'styled-components';

export  const BannerWrapper = styled.div`
  
  @media only screen and (max-width: 970px) and (min-width: 630px) {
    img{
      height: 470px;
    } 
  }

  & .banner-header{
    padding-bottom: 50px;

    @media only screen and (min-width: 1250px) {
      padding-left: 520px;
    }
    @media only screen and (max-width: 450px) {
      padding-bottom: 20px;
    }

  }

  .heading {
    text-align: left;
    font-size: 40px;
    line-height: 49px;
    font-weight: 600;
    letter-spacing: -0.025em;
    width: 100%;
    @media (min-width: 1250px) and (max-width: 1440px) {
      font-size: 34px;
      line-height: 42px;
    }
    @media (max-width: 1249px) {
      text-align: center;
    }
    @media (max-width: 970px) {
      font-size: 30px;
      line-height: 36px;
    }
    @media (max-width: 450px) {
      font-size: 22px;
      line-height: 28px;
    }
  }

  .sub-heading {
    text-align: left;
    font-family: Montserrat;
    font-size: 24px;
    letter-spacing: 0;
    line-height: 29px;
    width: 100%;
    @media (min-width: 1250px) and (max-width: 1440px) {
      font-size: 22px;
      line-height: 28px;
    }
    @media (max-width: 1249px) {
      text-align: center;
    }
    @media (max-width: 970px) {
      font-size: 19px;
      line-height: 25px;
    }
    @media (max-width: 450px) {
      font-size: 16px;
      line-height: 21px;
    }
  }

  .btn-group {
    display: block;
    text-align: left;

    @media (min-width: 1250px) and (max-width: 1440px) {
    }
    @media (max-width: 1249px) {
      text-align: center;
    }
  }

`;
