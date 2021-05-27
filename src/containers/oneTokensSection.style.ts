import styled from 'styled-components';

export const StyledOneTokensSection = styled.section`

  /* height: 403px; */
  max-width: 1100px;
  margin: auto;

  padding: 80px 0 90px 0;
  @media (max-width: 990px) {
    padding: 60px 0 60px 0;
  }
  @media (max-width: 767px) {
    padding: 60px 0 30px 0;
  }

  .one-tokens-content {
    @media (max-width: 1200px) {
      flex-wrap: wrap;
    }
  }

  .one-token {
    height: 228px;
    width: 320px;
    margin-top: 20px;

    .one-token-name {
      height: 29px;
      font-size: 24px;
      font-weight: 600;
      letter-spacing: 0;
      line-height: 29px;
      text-align: center;
    }

    .one-token-description {
      height: 57px;
      width: 320px;
      font-size: 16px;
      letter-spacing: 0;
      line-height: 19px;
      text-align: center;
    }
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
`;
