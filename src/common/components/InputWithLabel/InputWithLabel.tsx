import { StyledSubText } from 'common/styles/common.styles';
import React, { useState } from 'react';

type Props = {
  handleChange: (Event: any) => void;
  handleBlur: (Event: any) => void;
  value: string;
  label: string;
  type: string;
  name: string;
  error: string | undefined;
  touched: boolean | undefined;
};

const InputWithLabel: React.FC<Props> = (props) => {
  const [onFocus, setOnFocus] = useState(false);
  const [placeHolder, setPlaceHolder] = useState(props.label);
  // const [touched, setTouched] = useState(props.touched);
  return (
    <>
      <div className="field">
        <div className={onFocus ? 'label' : 'label-hidden'}>{props.label}</div>
        <input
          className="input-partnership-form"
          type={props.type}
          name={props.name}
          id={props.name}
          placeholder={placeHolder}
          onChange={props.handleChange}
          // onBlur={() => {setOnFocus(false); setPlaceHolder(props.label); setTouched(true);}}
          onBlur={props.handleBlur}
          onFocus={() => {setOnFocus(true); setPlaceHolder('');}}
          value={props.value} />
          
      </div>
      {props.error && props.touched && (
        <StyledSubText className="secondary-text-color">{props.error}</StyledSubText>
      )}
    </>
  );
};

export default InputWithLabel;
