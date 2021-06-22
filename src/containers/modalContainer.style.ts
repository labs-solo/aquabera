import styled from 'styled-components';

export const StyledModalBody = styled.div`
  display: flex;
  height: 100%;
  @media screen and (max-width: 700px){
    width: 100%;
  }
`;

export const StyledModalBodyLeft = styled.div`
  position: relative;
  width: 300px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 700px){
    display: none;
  }
`;

export const StyledModalBodyRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  height: 100%;
  padding: 75px 30px 0 30px;
  @media screen and (max-width: 700px){
    width: 100%;
    padding: 75px  30px 0 30px;
    box-sizing: border-box;
  }
`;

export const StyledBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const IchiLogoV2 = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -144px;
  margin-top: -144px;
  width: 288px;
  height: 288px;
`;

export const PopoverHeaderText = styled.div`
  font-size: 24px;
  text-align: center;
  padding-bottom: 30px;
  & span{
    font-size: 50px;
    font-weight: 600;
    line-height: 61px;
  }
`;

export const PopoverLink = styled.div`
  font-size: 16px;
  font-weight: 600;
`;

export const StyledStakeText = styled.p`
  width: 389px;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.01px;
  line-height: 20px;
  text-align: center;
`;

export const StyledStakeFooter = styled.div`
  padding: 20px;
  height: 100px;
  width: 100%;
  border-radius: 0 0 20px 20px;
  box-shadow: 0 0 40px 0 rgba(0, 56, 124, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  & button {
    cursor: pointer;
    border: none;
    height: 50px;
    width: 160px;
    border-radius: 25px;

    & span {
      height: 19px;
      font-size: 16px;
      font-weight: 600;
      letter-spacing: 0.02px;
      line-height: 19px;
      text-align: center;
    }
  }
`;
