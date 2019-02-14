/**
 * styled-components Collapse@0.2.0 by sorosora
 */

import React from 'react';
import styled from 'styled-components';
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

const Expander = styled.div`
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

const Clicker = styled.div`
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
    return (
      <CollapseWrapper {...otherProps}>
        {
          children.map((child, key) => {
            if (child.type.styledComponentId === Clicker.styledComponentId) {
              return (
                <child.type {...child.props} onClick={this.handleClick} key={`${key}-clicker`} />
              )
            }
            if (child.type.styledComponentId === Expander.styledComponentId) {
              return (
                <child.type {...child.props} active={this.state.active} enabled={enabled} maxHeight={maxHeight} key={`${key}-expander`} />
              )
            }
          })
        }
      </CollapseWrapper>
    );
  }
}

Collapse.propTypes = {
  activeCallback: PropTypes.func,
  children: PropTypes.node.isRequired,
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

Collapse.Clicker = Clicker;
Collapse.Expander = Expander;

export default Collapse;
