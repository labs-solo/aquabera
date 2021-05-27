import React from 'react';
import styled from 'styled-components';

type StyledImageArgs = {
  marginLeft?: string;
  height?: string;
  width?: string;
};
const StyledImage = styled.img<StyledImageArgs>`
  display: block;
  max-width: 100%;
  /* height: auto; */
  height: ${(props) => (props.height ? props.height : 'auto')};
  width: ${(props) => (props.width ? props.width : undefined)};
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft : '0px')};
`;

type ImageProps = {
  src?: string;
  alt: string;
  marginLeft?: string;
  height?: string;
  width?: string;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => void;
};

const Image: React.FC<ImageProps> = (props) => {
  if (!props.className && !props.src) {
    return null;
  }

  return (
    <StyledImage
      className={props.className}
      src={props.src}
      alt={props.alt}
      marginLeft={props.marginLeft}
      height={props.height}
      width={props.width}
      onClick={props.onClick}
    />
  );
};

export default Image;
