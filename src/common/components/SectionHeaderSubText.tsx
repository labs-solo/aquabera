import cx from 'classnames';
import React from 'react';
import { StyledSectionHeaderSubText } from './sectionHeader.style';

type Props = {
  text: string;
  className?: string;
  textAlign: "left" | "center" | "right";
}

const SectionHeaderSubText: React.FC<Props> = (props) => {
  return (
    <StyledSectionHeaderSubText className={cx('sub-heading-color', props.className)} style={{textAlign: props.textAlign}}>
      {props.text}
    </StyledSectionHeaderSubText>
  );
};

export default SectionHeaderSubText;
