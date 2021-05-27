import cx from 'classnames';
import React from 'react';
import { StyledSectionHeaderSubText } from './sectionHeader.style';

type Props = {
  text: string;
  className?: string;
}

const SectionHeaderSubText: React.FC<Props> = (props) => {
  return (
    <StyledSectionHeaderSubText className={cx('sub-heading-color', props.className)}>
      {props.text}
    </StyledSectionHeaderSubText>
  );
};

export default SectionHeaderSubText;
