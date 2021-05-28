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

  // Apparently this <Button> from superprops adds margin-bottom to the
  // button icon, have to override that
  & .button-telegram {
    width: 190px;

    & .btn-icon {
      & img {
        margin-bottom: 0px;
      }
    }

    & .btn-text {
      margin-left: 3px;
    }
  }
`;
