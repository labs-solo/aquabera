import styled from 'styled-components';

export const StyledJoinTheCommunitySection = styled.section`
  padding: 60px 0 90px 0;
  @media (max-width: 990px) {
    padding: 60px 0 60px 0;
  }
  @media (max-width: 767px) {
    padding: 60px 0 30px 0;
  }

  img {
    @media (max-width: 1000px) {
      max-width: 100%;
    }

    // When the screen is small enough don't show the bubbles
    @media only screen and (max-width: 991px) {
      display: none;
    }

  }

  .how-it-works-contents {
    padding: 50px;
  }

  & .button-telegram {
    width: 190px;
  }
`;
