/**
 * styled-components RatioBox@0.3.0 by sorosora
 */

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const checkBreak = (value, trueValue, falseValue) => (value === 'break' ? trueValue : falseValue);

const calcRatio = (ratioString) => {
  const [width, height] = ratioString.split(':');
  return `${(height / width) * 100}%`;
};

const setProp = (prop, size, func) => func(prop[size] || prop[0]);

const RatioContainer = styled.div``;

const RatioWrapper = styled.div`
  position: relative;
  padding-bottom: ${(props) => setProp(props.ratio, 0, (ratio) => checkBreak(ratio, 0, calcRatio(ratio)))};
  
  ${RatioContainer} {
    position: ${(props) => setProp(props.ratio, 0, (ratio) => checkBreak(ratio, 'relative', 'absolute'))};
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  
  ${({ theme }) => theme.media.tablet} {
    padding-bottom: ${(props) => setProp(props.ratio, 1, (ratio) => checkBreak(ratio, 0, calcRatio(ratio)))};
    
    ${RatioContainer} {
      position: ${(props) => setProp(props.ratio, 1, (ratio) => checkBreak(ratio, 'relative', 'absolute'))};
    }
  }
  
  ${({ theme }) => theme.media.phone} {
    padding-bottom: ${(props) => setProp(props.ratio, 2, (ratio) => checkBreak(ratio, 0, calcRatio(ratio)))};
    
    ${RatioContainer} {
      position: ${(props) => setProp(props.ratio, 2, (ratio) => checkBreak(ratio, 'relative', 'absolute'))};
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
  ratio: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default RatioBox;
