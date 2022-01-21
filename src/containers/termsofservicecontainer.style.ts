import styled from 'styled-components';

const TextWrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: auto;
  padding: 40px 0 80px;
  @media (max-width: 990px) {
    padding: 60px 0 60px 0;
  }
  @media (max-width: 767px) {
    padding: 60px 0 30px 0;
  }
  li  {
    list-style-type: lower-alpha;
    padding: 0 0 0 20px;
  }
  
`;

export default TextWrapper;
