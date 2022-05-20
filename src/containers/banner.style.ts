import styled from 'styled-components';

const BannerWrapperOuter = styled.div`
  // max-width: 1440px;
  /* height: 700px; */
  width: 100%;
  margin: auto;
  background-color: linear-gradient(180deg, #019ffa 0%, #012c5f 100%);
  /* END 
  padding-top: 100px;*/
  overflow: hidden;
`;

export const StyledBackgroundGradient = styled.div`
  display: flex;
  direction: row;
  justify-content: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 27px; 
  // max-width: 1440px;
  width: 100%;
  margin: auto;
  padding: 2px 10px;
  // height: 30px;
  background-image: linear-gradient(to left, #197CFB, #1DAFD9);
  @media only screen and (max-width: 700px) {
    padding: 2px 15px;
    text-align: center;
  }

  button {
    width: 30px;
    height: 30px;
    border-radius: 15px !important;
    margin-right: auto;
    padding: 0 !important;
    @media only screen and (min-width: 1024px) {
      display: none !important;
    }
  }
`;

export default BannerWrapperOuter;
