import styled from 'styled-components';

export const StyledHeader = styled.div`
  padding: 20px 40px;
  height: 100px;
  font-size: 16px;
  line-height: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1200px) {
    flex-wrap: wrap;
    height: auto;
  }
  @media (max-width: 1024px) {
    padding: 20px;
  }

  button {
    margin-left: 40px;
    @media (max-width: 1100px) {
     width: 200px !important;
    }
    @media (max-width: 1024px) {
      margin-left: 0px;
      width: 120px !important;
      padding-left: 0;
      padding-right: 0;
    }
  }

  .menu-icon{
    height: 20px; 
    margin-right: 20px;
    cursor: pointer;
    @media (min-width: 1130px) {
      display: none;
    }
    @media (max-width: 400px) {
      margin-right: 10px;
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
  @media (max-width: 1200px) {
    flex-wrap: wrap;
  }
`;

export const HeaderLink = styled.a`
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 22px;
  margin-left: 20px;
  padding: 15px 0;

  @media (max-width: 1130px) {
    display: none;
  }
`;
