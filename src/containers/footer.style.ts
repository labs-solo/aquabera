import styled from 'styled-components';

export const StyledFooter = styled.div`
  padding-right: 40px;
  padding-left: 40px;
  height: 120px;
  font-size: 16px;
  line-height: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 40px;
  justify-content: space-between;
  @media (max-width: 1024px) {
    padding-right: 20px;
    padding-left: 20px;
  }

  .smi-icon{
    margin-left: 20px;
    height: 34px;
    @media (max-width: 1024px) {
      margin: 0 10px;
    }
  }
`;

export const CopywriteText = styled.div`
  font-size: 16px;
  font-weight: 300;
  letter-spacing: 0;
  line-height: 20px;
  padding-left: 20px;
`;

export const StyledNav = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const FooterLink = styled.a`
  font-size: 16px;
  font-weight: 300;
  letter-spacing: 0;
  line-height: 16px;
  color: #ffffff;
  margin-left: 20px;

  :hover{
    color: #787E91;
  }
  @media (max-width: 1024px) {
    display: none;
  }
`;
