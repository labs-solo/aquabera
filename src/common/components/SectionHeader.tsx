import React from 'react';
import { StyledSectionHeader } from './sectionHeader.style';


type Props = {
  text: string;
}

const SectionHeader: React.FC<Props> = (props) => {
  return (
    <StyledSectionHeader className="section-header-color">
      {props.text}
    </StyledSectionHeader>
  );
};

export default SectionHeader;
