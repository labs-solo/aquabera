import styled from 'styled-components';

export const StyledThemeSwitcher = styled.div`
  margin-left: 20px;
  margin-right: 0px;
  position: flex;
  align-items: flex-end;
  @media (max-width: 1130px) {
    margin-left: 0px;
    margin-right: 20px;
  }
  @media (max-width: 400px) {
    margin-right: 10px;
  }
`;

export const StyledThemeIcon = styled.div`
    cursor: pointer;
`;
