/**
 * styled-components Img@0.1.1 by sorosora
 */

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const IconWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  
  :before {
    content: '\u200b';
  }
`;

const Icon = styled(({
  className, src, alt, ...otherProps
}) => (
  <IconWrapper className={className}>
    <img alt={alt} src={src} {...otherProps} />
  </IconWrapper>
))``;

Icon.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

Icon.defaultProps = {
  alt: '',
};

export default Icon;
