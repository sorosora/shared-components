/**
 * styled-components ConditionalWrap@0.1.1 by sorosora
 */

import React from 'react';
import PropTypes from 'prop-types';

const ConditionalWrap = (props) => {
  const {
    condition, wrap: { wrapForTrue, wrapForFalse }, wrap, children,
  } = props;
  if (wrapForTrue && wrapForFalse) {
    return condition ? wrapForTrue(children) : wrapForFalse(children);
  }
  return condition ? wrap(children) : children;
};

const wrapPropTypes = PropTypes.oneOfType([
  PropTypes.func,
  PropTypes.shape({
    wrapForTrue: PropTypes.func.isRequired,
    wrapForFalse: PropTypes.func.isRequired,
  }),
]);

ConditionalWrap.propTypes = {
  condition: PropTypes.bool.isRequired,
  wrap: wrapPropTypes.isRequired,
  children: PropTypes.node.isRequired,
};

export default ConditionalWrap;
