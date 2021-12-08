import styled from 'styled-components';

const BannerWrapperOuter = styled.div`
  /* ONLY ADDED WITH FLUID gatsby image */
  max-width: 1440px;
  /* height: 700px; */
  width: 100%;
  margin: auto;
  background-color: linear-gradient(180deg, #019ffa 0%, #012c5f 100%);
  /* END */
  padding-top: 100px;
  min-height: 700px;
  overflow: hidden;
`;

export const StyledBackgroundGradient = styled.div`
  font-size: 19px;
  font-weight: 500; 
  max-width: 1440px;
  width: 100%;
  margin: auto;
  padding-top: 30px;
  height: 75px;
  background-image: linear-gradient(to right, #7200d9, #015db9);
  @media only screen and (max-width: 991px) {
    padding-top: 20px;
  }
`;

export default BannerWrapperOuter;
