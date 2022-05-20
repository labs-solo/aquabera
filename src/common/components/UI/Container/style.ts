import styled, { css } from 'styled-components';

type Props = {
  fullWidth?: string;
  noGutter?: boolean;
  mobileGutter?: boolean;
  width?: string;
  paddingTop?: string;
  paddingBottom?: string;
  marginTop?: string;
  marginBottom?: string;
};

const ContainerWrapper = styled.div<Props>`
  margin-left: auto;
  margin-right: auto;
  padding-top:  ${(props) => props.paddingTop || '0'};
  padding-bottom:  ${(props) => props.paddingBottom || '0'};
  margin-top:  ${(props) => props.marginTop || '30px'};
  margin-bottom:  ${(props) => props.marginBottom || '80px'};
  width: 100%;
  ${(props) =>
    (props.noGutter &&
      css`
        padding-left: 0;
        padding-right: 0;
      `) ||
    css`
      padding-left: 30px;
      padding-right: 30px;
    `};
  @media (min-width: 1220px) {
    max-width: ${(props) => props.width || '1000px'};
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
