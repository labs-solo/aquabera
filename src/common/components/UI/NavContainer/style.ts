import styled, { css } from 'styled-components';

type Props = {
  fullWidth?: string;
  noGutter?: boolean;
  mobileGutter?: boolean;
  width?: string;
  paddingTop?: string;
  paddingBottom?: string;
};

const ContainerWrapper = styled.div<Props>`
  margin-left: auto;
  margin-right: auto;
  padding-top:  ${(props) => props.paddingTop || '0'};
  padding-bottom:  ${(props) => props.paddingBottom || '0'};
  ${(props) =>
    props.fullWidth &&
    css`
      width: 100%;
      max-width: none !important;
    `};
  ${(props) =>
    (props.noGutter &&
      css`
        padding-left: 0;
        padding-right: 0;
      `) ||
    css`
      padding-left: 40px;
      padding-right: 40px;
    `};
  @media (min-width: 768px) {
    /*max-width: 750px;*/
    width: 100%;
  }
  @media (min-width: 992px) {
    max-width: 970px;
    width: 100%;
  }
  @media (min-width: 1440px) {
    max-width: ${(props) => props.width || '1440px'};
    width: 100%;
  }
  @media (max-width: 768px) {
    ${(props) =>
      props.mobileGutter &&
      css`
        padding-left: 30px;
        padding-right: 30px;
      `};
  }
`;

export default ContainerWrapper;
