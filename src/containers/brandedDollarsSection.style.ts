import styled from 'styled-components';

export const StyledBrandedDollarsSection = styled.section`
  padding: 0 30px;
  margin: 0px 0 60px 0;

  img {
    width: 820px;
    margin: 40px auto;

    @media (max-width: 820px) {
     width: 100%;
     margin: 30px auto;
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
