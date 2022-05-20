import { StyledFlex, StyledParagraph } from 'common/styles/common.styles';
import React from 'react';

type Props = {
  phaseNum: number;
};

const Phase: React.FC<Props> = (props) => {
  let bullColor = '#1A80F9';
  switch(props.phaseNum) {
    case 1:
      bullColor = '#1DAEDA';
      break;
    case 2:
      bullColor = '#1C98E9';
      break;
    case 3:
      bullColor = '#1A80F9';
      break;
    default:
      bullColor = '#1A80F9';
  }
  return (
    <StyledFlex>
      <div style={{backgroundColor: bullColor, borderRadius: "50%", height: 20, width: 20, flexShrink: 0, marginTop: "5px", marginBottom: "15px"}}></div>
      <StyledParagraph className="ml-20 primary-text-color" style={{flexShrink: 0}}>
        Phase {props.phaseNum}.
      </StyledParagraph>
    </StyledFlex>
  );
};

export default Phase;
