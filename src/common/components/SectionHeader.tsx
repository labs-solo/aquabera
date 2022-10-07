import React from 'react';

type Props = {
  text: string;
}

const SectionHeader: React.FC<Props> = (props) => {
  return (
    <div className="section-header-color font-primary-title mb-5 mt-5">
      {props.text}
    </div>
  );
};

export default SectionHeader;
