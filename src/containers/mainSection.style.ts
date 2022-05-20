import styled from 'styled-components';

export const StyledMainSection = styled.section`
  padding: 0 30px;
  border: none;
  margin: 0px 0 0px 0;

  .inner {
    width: 100%;
  }

  img {
    width: 525px;
    margin: 40px auto;

    @media (max-width: 1000px) {
      width: 100%;
      max-width: 525px;
      margin: 30px 0px;
    }

    // When the screen is small enough don't show the bubbles
    @media only screen and (max-width: 991px) {
    }

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
