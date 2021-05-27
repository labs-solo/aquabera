import styled from 'styled-components';

export const StyledHowItWorksSection = styled.section`
  padding: 80px 0 90px 0;
  @media (max-width: 990px) {
    padding: 60px 0 60px 0;
  }
  @media (max-width: 767px) {
    padding: 60px 0 30px 0;
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
    @media (max-width: 1200px) {
      flex-wrap: wrap;
    }
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

  & .button-learn-more {
    width: 180px;
  }
`;

export const StyledNumber = styled.div`
  width: 22px;
  font-size: 16px;
  font-weight: 800;
  letter-spacing: 0;
  line-height: 19px;
  text-align: center;
`;

export const StyledStepText = styled.div`
  margin-left: 5px;
  font-size: 16px;
  letter-spacing: 0;
  line-height: 19px;
  white-space: nowrap;

  @media (max-width: 1264px) {
    white-space: normal;
  }
`;