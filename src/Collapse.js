/**
 * styled-components Collapse@0.3.0 by sorosora
 */

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const defaultTransition = 'all 0.5s';

const getTransitionTime = (transition) => {
  const values = transition.split(' ');
  let transitionTime = 0;
  values.forEach(value => {
    if (value.slice(-1) === 's') {
      transitionTime += parseFloat(value);
    }
  });
  return transitionTime * 1000; // ms
};

const Expander = styled.div`
  max-height: ${({ enabled: [enabled], maxHeight }) => (enabled ? `${maxHeight}px` : '100%')};
  overflow: ${({ enabled: [enabled], overflow }) => (enabled ? overflow : 'visible')};
  transition: ${({ transition }) => transition};
  
  ${({ theme }) => theme.media.tablet} {
    max-height: ${({ enabled: [, enabled], maxHeight }) => (enabled ? `${maxHeight}px` : '100%')};
    overflow: ${({ enabled: [, enabled], overflow }) => (enabled ? overflow : 'visible')};
  };
  
  ${({ theme }) => theme.media.phone} {
    max-height: ${({ enabled: [, , enabled], maxHeight }) => (enabled ? `${maxHeight}px` : '100%')};
    overflow: ${({ enabled: [, , enabled], overflow }) => (enabled ? overflow : 'visible')};
  };
`;

const Clicker = styled.div`
  cursor: pointer;
`;

const CollapseWrapper = styled.div``;

class Collapse extends React.Component {
  constructor(props) {
    super(props);
    const { initActive, children } = props;
    const maxHeight = {};
    this.expanderRefs = {};
    this.active = initActive;
    children.forEach((child, key) => {
      if (child.type.styledComponentId === Expander.styledComponentId) {
        this.expanderRefs[`${key}-expander`] = React.createRef();
        maxHeight[`${key}-expander`] = initActive ? 99999 : 0;
      }
    });
    this.state = {
      maxHeight,
      overflow: initActive ? 'visible' : 'hidden',
    };
  }

  componentDidMount() {
    this.setExpander();
  }

  setMaxHeight = (maxHeight) => {
    this.setState(() => {
      if (this.active) return { maxHeight };
      return { maxHeight, overflow: 'hidden' };
    }, () => {
      if (this.active) {
        setTimeout(() => {
          this.setState({
            overflow: 'visible',
          });
        }, getTransitionTime(this.props.transition))
      }
    });
  };

  setExpander = () => {
    const { children } = this.props;
    const maxHeight = {};
    children.forEach((child, key) => {
      if (child.type.styledComponentId === Expander.styledComponentId) {
        const expander = this.expanderRefs[`${key}-expander`].current;
        maxHeight[`${key}-expander`] = this.active ? expander.scrollHeight : 0;
      }
    });
    this.setMaxHeight(maxHeight);
  };

  handleClick = () => {
    this.active = !this.active;
    this.setExpander();
  };

  render() {
    const {
      activeCallback,
      children,
      enabled,
      transition,
      ...otherProps
    } = this.props;
    if (activeCallback) {
      activeCallback(this.active);
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
                <child.type
                  {...child.props}
                  enabled={enabled}
                  maxHeight={this.state.maxHeight[`${key}-expander`]}
                  overflow={this.state.overflow}
                  transition={transition}
                  key={`${key}-expander`}
                  ref={this.expanderRefs[`${key}-expander`]}
                />
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
  transition: PropTypes.string,
};

Collapse.defaultProps = {
  activeCallback: undefined,
  enabled: [true , true, true],
  initActive: false,
  transition: defaultTransition,
};

Collapse.Clicker = Clicker;
Collapse.Expander = Expander;

export default Collapse;
