/**
 * styled-components Collapse@0.2.0 by sorosora
 */

import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const defaultMaxHeight = '9999px';

const maxHeightStyle = (enabled, active, maxHeight) => {
  if (typeof enabled === 'undefined') {
    return '';
  }
  if (!enabled) {
    return '100%';
  }
  if (!active) {
    return 0;
  }
  if (!maxHeight) {
    return defaultMaxHeight;
  }
  return maxHeight;
};

const ExpandableWrapper = styled.div`
  overflow: hidden;
  transition: all .5s;
  transition-timing-function: ${({ active }) =>
    (active ? 'cubic-bezier(0.71, 0.01, 1, 0.32)' : 'cubic-bezier(.075,.82,.165,1)')};
  
  max-height: ${({ enabled: [enabled], active, maxHeight: [maxHeight] }) =>
    maxHeightStyle(enabled, active, maxHeight)};
  
  ${({ theme }) => theme.media.tablet} {
    max-height: ${({ enabled: [, enabled], active, maxHeight: [, maxHeight] }) =>
    maxHeightStyle(enabled, active, maxHeight)};
  }
    
  ${({ theme }) => theme.media.phone} {
    max-height: ${({ enabled: [, , enabled], active, maxHeight: [, , maxHeight] }) =>
    maxHeightStyle(enabled, active, maxHeight)};
  }
`;

const ClickableWrapper = styled.div`
  cursor: pointer;
`;

const CollapseWrapper = styled.div``;

class Collapse extends React.Component {
  constructor(props) {
    super(props);
    const { initActive } = props;
    this.state = {
      active: initActive,
    };
  }
  handleClick = () => {
    this.setState(prevState => ({ active: !prevState.active }));
  };
  render() {
    const {
      activeCallback,
      children,
      enabled,
      maxHeight,
      ...otherProps
    } = this.props;
    if (activeCallback) {
      activeCallback(this.state.active);
    }
    const [clickableContent, expandableContent] = children;
    return (
      <CollapseWrapper {...otherProps}>
        <ClickableWrapper onClick={this.handleClick} active={this.state.active}>
          <clickableContent.type {...clickableContent.props} active={this.state.active} />
        </ClickableWrapper>
        <ExpandableWrapper active={this.state.active} enabled={enabled} maxHeight={maxHeight}>
          <expandableContent.type {...expandableContent.props} active={this.state.active} />
        </ExpandableWrapper>
      </CollapseWrapper>
    );
  }
}

Collapse.propTypes = {
  activeCallback: PropTypes.func,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  enabled: PropTypes.arrayOf(PropTypes.bool),
  initActive: PropTypes.bool,
  maxHeight: PropTypes.arrayOf(PropTypes.string),
};

Collapse.defaultProps = {
  activeCallback: undefined,
  enabled: [true],
  initActive: false,
  maxHeight: [],
};

export default Collapse;
