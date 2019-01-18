/**
 * styled-components InlineCenter@0.1.0 by sorosora
 */

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const InlineCenter = styled.span`
  display: inline-flex;
  align-items: center;
  max-height: 1em;
  
  :before {
    content: '\u200b';
  }
`;

InlineCenter.propTypes = {
  children: PropTypes.node.isRequired,
};

export default InlineCenter;
