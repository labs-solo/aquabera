import React from 'react';
import ContainerWrapper from './style';

type Props = {
  className?: string;
  fullWidth?: string;
  noGutter?: boolean;
  mobileGutter?: boolean;
  width?: string;
  paddingTop?: string;
  paddingBottom?: string;
  marginBottom?: string;
}

const Container: React.FC<Props> = (props) => {
  // Add all classs to an array
  const addAllClasses = ['main_container'];
  // className prop checking
  if (props.className) {
    addAllClasses.push(props.className);
  }

  return (
    <ContainerWrapper
      className={addAllClasses.join(' ')}
      fullWidth={props.fullWidth}
      noGutter={props.noGutter}
      width={props.width}
      mobileGutter={props.mobileGutter}
      paddingTop={props.paddingTop}
      paddingBottom={props.paddingBottom}
      marginBottom={props.marginBottom}
    >
      {props.children}
    </ContainerWrapper>
  );
};

export default Container;
