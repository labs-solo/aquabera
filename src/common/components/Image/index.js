import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { base, themed } from '../base';

const ImageWrapper = styled('img')(
  {
    display: 'block',
    maxWidth: '100%',
    height: 'auto',
    // This is required to stop the browser for terminating the pointer event
    // at the image, it allows the pointer event to fall through to the underlying components
    'pointer-events': 'none'
  },
  base,
  themed('Image')
);

const Image = ({ src, alt, ...props }) => (
  <ImageWrapper src={src} alt={alt} {...props} />
);

export default Image;

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

Image.defaultProps = {
  m: 0,
};
