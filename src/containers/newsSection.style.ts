import styled from 'styled-components';

export const StyledNewsSection = styled.section`
  .justify-mobile{
    justify-content: space-between;
    @media (max-width: 700px) {
      justify-content: center;
    }
  }
  iframe{
    border: none;
    margin-bottom: 0 !important;
    height: 528px;
    @media (max-width: 900px) {
      height: 400px;
    }
    @media (max-width: 700px) {
      height: 360px;
    }
    @media (max-width: 540px) {
      height: 280px;
    }
  }
}
`;