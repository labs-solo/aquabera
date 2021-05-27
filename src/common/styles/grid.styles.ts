// import { themeGet } from '@styled-system/theme-get';
import styled from 'styled-components';

export const StyledGrid = styled.div`
    display: grid;
    width: 100%;
    padding: 20px;
`;

export const StyledGridCentered = styled.div`
    display: grid;
    width: 100%;
    padding: 20px;
    justify-content: center;

    & span {
      text-align: center;
    }
    & a {
      text-align: center;
    }
    & div {
      text-align: center;
    }
`;
