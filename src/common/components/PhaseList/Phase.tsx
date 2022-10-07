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
    <div>
      <div
        className="rounded-full h-5 w-5 float-left mr-5 mt-1 mb-4 flex-shrink-0" 
        style={{backgroundColor: bullColor}} />
      <div className="font-primary ml-5 primary-text-color whitespace-nowrap flex-shrink-0">
        Phase {props.phaseNum}.
      </div>
    </div>
  );
};

export default Phase;
