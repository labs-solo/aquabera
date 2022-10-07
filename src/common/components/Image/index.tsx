import React from 'react';
import styled from 'styled-components';

type StyledImageArgs = {
  marginLeft?: string;
  marginRight?: string;
  margin?: string;
  height?: string;
  width?: string;
  maxWidth?: string;
  maxHeight?: string;
  padding?: string;
};
const StyledImage = styled.img<StyledImageArgs>`
  display: inline-block;
  max-width: 100%;
  /* height: auto; */
  height: ${(props) => (props.height || 'auto')};
  width: ${(props) => (props.width || undefined)};
  margin: ${(props) => (props.margin || '0px')};
  margin-left: ${(props) => (props.marginLeft || '0px')};
  margin-right: ${(props) => (props.marginRight || '0px')};
  // margin-bottom: 0 !important;
  padding: ${(props) => (props.padding || '0px')};
  max-width: ${(props) => (props.maxWidth || undefined)};
  max-height: ${(props) => (props.maxHeight || undefined)};
`;

type ImageProps = {
  src?: string;
  alt: string;
  marginLeft?: string;
  marginRight?: string;
  margin?: string;
  height?: string;
  width?: string;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => void;
  maxWidth?: string;
  maxHeight?: string;
  padding?: string;
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
      marginRight={props.marginRight}
      margin={props.margin}
      height={props.height}
      width={props.width}
      padding={props.padding}
      maxWidth={props.maxWidth}
      maxHeight={props.maxHeight}
      onClick={props.onClick}
    />
  );
};

export default Image;
