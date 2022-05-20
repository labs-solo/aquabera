import React from 'react';
import { StyledSectionHeader } from './sectionHeader.style';


type Props = {
  text: string;
  textAlign?: "left" | "center" | "right";
  className?: string;
}

const SectionHeader: React.FC<Props> = (props) => {
  return (
    <StyledSectionHeader
      className={props.className ? props.className : "section-header-color"}
      style={{textAlign: (props.textAlign ? props.textAlign : 'left')}}
    >
      {props.text}
    </StyledSectionHeader>
  );
};

export default SectionHeader;
