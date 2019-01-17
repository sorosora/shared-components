/**
 * styled-components RatioBox@0.2.0 by sorosora
 */

import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const checkBreak = (value, expectedValue) => (value === 'break' ? expectedValue : value);

const RatioContainer = styled.div``;

const RatioWrapper = styled.div`
  position: relative;
  padding-bottom: ${({ height }) => (height && height[0] ? height[0] : '')};
  height: 0;
  
  ${RatioContainer} {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  
  ${({ theme }) => theme.media.tablet} {
    padding-bottom: ${({ height }) => (height && height[1] ? checkBreak(height[1], 0) : '')};
    height: ${({ height }) => (height && height[1] === 'break' ? 'auto' : '')};;
    
    ${RatioContainer} {
      position: ${({ height }) => (height && height[1] === 'break' ? 'relative' : '')};;
    }
  }
  
  ${({ theme }) => theme.media.phone} {
    padding-bottom: ${({ height }) => (height && height[2] ? checkBreak(height[2], 0) : '')};
    height: ${({ height }) => (height && height[2] === 'break' ? 'auto' : '')};;
    
    ${RatioContainer} {
      position: ${({ height }) => (height && height[2] === 'break' ? 'relative' : 'absolute')};;
    }
  }
`;

const RatioBox = (props) => {
  const { children, ...otherProps } = props;
  return (
    <RatioWrapper {...otherProps}>
      <RatioContainer>
        {children}
      </RatioContainer>
    </RatioWrapper>
  );
};

RatioBox.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RatioBox;
