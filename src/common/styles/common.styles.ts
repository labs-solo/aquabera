import styled from 'styled-components';

type StyledFlexProps = {
  width?: string;
  padding?: string;
  justifyContent?: string;
  alignItems?: string;
  position?: string;
  marginTop?: string;
  gap?: string;
  flexWrap?: string;
};
export const StyledFlex = styled.div<StyledFlexProps>`
  display: flex;
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  width: ${(props) => props.width};
  padding: ${(props) => props.padding};
  position: ${(props) => props.position};
  margin-top: ${(props) => props.marginTop};
  gap: ${(props) => props.gap};
  flex-wrap: ${(props) => props.flexWrap};

  .buttons {
    width: 530px;

    @media (max-width: 550px) {
      width: 100%;
    }
  }
  .primary-button, .secondary-button{
    width: 250px;

    @media (max-width: 550px) {
      width: 100%;
    }

  }
  .btn-link{
    text-decoration: none;
    @media (max-width: 550px) {
      width: 48%;
    }
  }

  @media (max-width: 550px) {
    .card_row{
      flex-direction: column;
    }
  }
`;

export const StyledFlexRowNoWrap = styled.div<StyledFlexProps>`
  display: flex;
  flex-flow: row nowrap;
  justify-content: ${(props) => (props.justifyContent ? props.justifyContent : 'inherit')};
  align-items: ${(props) => (props.alignItems ? props.alignItems : 'inherit')};
`;

export const StyledFlexEnd = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const StyledFlexStart = styled.div`
  display: flex;
  justify-content: flex-start;
`;


export const StyledFlexAlignCenter = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledFlexAlignBaseline = styled.div`
  display: flex;
  align-items: baseline;
`;

export const StyledFlexCenter = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledContainer = styled.div`
  display: flex;
  justify-content: center;

  margin-right: 10%;
  margin-left: 10%;

  @media screen and (max-width: 1600px) {
    margin-right: 5%;
    margin-left: 5%;
  }

  @media screen and (max-width: 970px) {
    margin-right: 0px;
    margin-left: 0px;
  }
`;
export const StyledParagraph = styled.div<StyledFlexProps>`
  max-width: 800px;
  font-size: 24px;
  line-height: 28.8px;
  font-weight: 300;
`;

export const StyledSecondaryParagraph = styled.div<StyledFlexProps>`
  font-size: 18px;
  line-height: 21.6px;
  font-weight: 700;
`;

export const StyledSubText = styled.div<StyledFlexProps>`
  font-size: 16px;
  font-weight: 300;
  color: #787E91;
`;

type StyledFlexColumnProps = {
  marginLeft?: string;
  textAlign?: string;
  justifyContent?: string;
  alignItems?: string;
  alignSelf?: string;
  height?: string;
  width?: string;
};

export const StyledFlexColumn = styled.div<StyledFlexColumnProps>`
  display: flex;
  flex-direction: column;
  margin-left: ${(props) => props.marginLeft};
  text-align: ${(props) => props.textAlign};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  align-self: ${(props) => props.alignSelf};
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const StyledTableHeadingTr = styled.tr`
  text-align: left;
`;
export const StyledTableTh = styled.th`
  height: 18px;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.01px;
  line-height: 18px;

  & img {
    margin-left: 5px;
    height: 14px;
    width: 14px;
  }
`;
export const StyledTd = styled.td`
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const StyledTdItem = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledTdPrimaryItem = styled.div`
  display: flex;
  flex-direction: column;
  & img {
    height: 43px;
    width: 43px;
  }
`;

export const StyledTableBodyTr = styled.tr``;

export const StyledTextWithCursor = styled.div`
  :hover {
    cursor: pointer;
  }
`;

export const StyledDivRelative = styled.div`
  position: relative;
`;

export const StyledHorizontalCard = styled.div<StyledFlexProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 20px;
  padding: ${(props) => (props.padding || '20px')};
  margin-bottom: 20px;
  align-items: center;
  width: ${(props) => (props.width || '49%')};

  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;

export const StyledHorizontalCardInner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

export const StyledVerticalCard = styled.div<StyledFlexProps>`
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  margin-bottom: 20px;
  align-items: center;
  width: ${(props) => (props.width || '32%')};
  padding: ${(props) => (props.padding || '60px 20px')};
  @media screen and (max-width: 700px) {
    width: 49%;
    padding: ${(props) => (props.padding || '40px 20px')};
  }
  @media screen and (max-width: 480px) {
    width: 100%;
    padding: ${(props) => (props.padding || '40px 20px')};
  }

`;

export const StyledInnerCard = styled.div<StyledFlexProps>`
  height: 100%;
  width: 100%;
  padding: ${(props) => (props.padding || '60px 20px')};
  @media screen and (max-width: 700px) {
    padding: ${(props) => (props.padding || '40px 20px')};
  }

`;

export const StyledActionAnchor = styled.a`
  height: 18px;
  text-decoration: underline;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.01px;
  line-height: 18px; 
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
