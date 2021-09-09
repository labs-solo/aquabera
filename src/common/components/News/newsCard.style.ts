import styled from 'styled-components';

export const StyledNewsCard = styled.section`
  width: 33%;
  padding: 30px;
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;

  @media only screen and (max-width: 1000px) {
    width: 50%;

  }

  @media only screen and (max-width: 700px) {
    width: 100%;

  }

  .one-token-name {
    font-size: 24px;
    font-weight: 600;
    letter-spacing: 0;
    line-height: 29px;
  }

  .one-token-description {
    font-size: 16px;
    letter-spacing: 0;
    line-height: 19px;
    text-align: ;
  }


  .source {
    align-self: flex-start;
  }
}
`;