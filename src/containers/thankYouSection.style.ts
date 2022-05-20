import styled from 'styled-components';

export const StyledThankYouSection = styled.section`
@media screen and (max-width: 700px) {
  .left-image {
      flex-direction: column;
  }
}
.right_column {
  width: 49%;
  padding-left: 40px;
  
  @media screen and (max-width: 700px) {
      width: 100%;
      padding-left: 0;
  }
}
`;