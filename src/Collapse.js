/**
 * styled-components Collapse@0.4.0 by sorosora
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
  min-height: ${({ minHeight: [minHeight] }) => minHeight};
  overflow: ${({ enabled: [enabled], overflow }) => (enabled ? overflow : 'visible')};
  transition: ${({ transition }) => transition};
  
  ${({ theme }) => theme.media.tablet} {
    max-height: ${({ enabled: [, enabled], maxHeight }) => (enabled ? `${maxHeight}px` : '100%')};
    min-height: ${({ minHeight: [, minHeight] }) => minHeight};
    overflow: ${({ enabled: [, enabled], overflow }) => (enabled ? overflow : 'visible')};
  };
  
  ${({ theme }) => theme.media.phone} {
    max-height: ${({ enabled: [, , enabled], maxHeight }) => (enabled ? `${maxHeight}px` : '100%')};
    min-height: ${({ minHeight: [, , minHeight] }) => minHeight};
    overflow: ${({ enabled: [, , enabled], overflow }) => (enabled ? overflow : 'visible')};
  };
`;

const Clicker = styled.button``;

const CollapseWrapper = styled.div`
  position: relative;
`;

class Collapse extends React.Component {
  constructor(props) {
    super(props);
    const { value, children } = props;
    this.expanderRefs = {};
    this._isMounted = false;
    this.state = {
      overflow: value ? 'visible' : 'hidden',
      active: value,
    };
    children.forEach((child, key) => {
      if (child.type.styledComponentId === Expander.styledComponentId) {
        this.expanderRefs[`${key}-expander`] = React.createRef();
      }
    });
  }

  componentDidMount() {
    this._isMounted = true;
  }

  componentDidUpdate(prevProps, prevState) {
    const { value: prevValue } = prevProps;
    const { active: prevActive } = prevState;
    const { onChange } = this.props;

    if (prevActive !== this.state.active) {
      if (onChange) onChange(this.state.active);
      this.setOverflow(this.state.active ? 'visible' : 'hidden');
    }
    if (prevValue !== undefined && prevValue !== this.props.value) {
      this.setState({
        active: this.props.value,
      });
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  setOverflow = (overflow) => {
    if (overflow === 'visible') {
      this.timeoutId = setTimeout(() => {
        this.setState({
          overflow,
        });
      }, getTransitionTime(this.props.transition))
    } else {
      if (this.timeoutId) {
        clearTimeout(this.timeoutId);
        this.timeoutId = undefined;
      }
      this.setState({
        overflow,
      });
    }
  };

  setActive = (active) => {
    this.setState(typeof active === 'function' ? active : { active });
  };

  getMaxHeight = (initMode = false) => {
    const { children, value } = this.props;
    const maxHeight = {};
    if (!initMode) {
      children.forEach((child, key) => {
        if (child.type.styledComponentId === Expander.styledComponentId) {
          const expander = this.expanderRefs[`${key}-expander`].current;
          maxHeight[`${key}-expander`] = this.state.active ? expander.scrollHeight : 0;
        }
      });
    } else {
      children.forEach((child, key) => {
        if (child.type.styledComponentId === Expander.styledComponentId) {
          maxHeight[`${key}-expander`] = value ? 99999 : 0;
        }
      });
    }
    return maxHeight;
  };

  handleClick = () => {
    this.setActive(prevState => ({
      active: !prevState.active,
    }));
  };

  render() {
    const {
      children,
      enabled,
      transition,
      ...otherProps
    } = this.props;
    const maxHeight = this.getMaxHeight(!this._isMounted);
    return (
      <CollapseWrapper {...otherProps}>
        {
          children.map((child, key) => {
            const { type: Element } = child;
            if (Element.styledComponentId === Clicker.styledComponentId) {
              let { type: CollapseClicker, props: { render, onClick, ...collapseClickerProps } } = child;
              if (render) ({ type: CollapseClicker, props: { onClick, ...collapseClickerProps } } = render);
              return (
                <CollapseClicker
                  {...collapseClickerProps}
                  onClick={(event) => {
                    this.handleClick();
                    if (onClick) onClick(event);
                  }}
                  key={`${key}-clicker`}
                />
              )
            }
            if (Element.styledComponentId === Expander.styledComponentId) {
              const { type: CollapseExpander, props: collapseExpanderProps } = child;
              return (
                <CollapseExpander
                  {...collapseExpanderProps}
                  enabled={enabled}
                  maxHeight={maxHeight[`${key}-expander`]}
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
  onChange: PropTypes.func,
  children: PropTypes.node.isRequired,
  enabled: PropTypes.arrayOf(PropTypes.bool),
  transition: PropTypes.string,
  value: PropTypes.bool,
};

Collapse.defaultProps = {
  onChange: undefined,
  enabled: [true , true, true],
  transition: defaultTransition,
  value: undefined,
};

Clicker.propTypes = {
  render: PropTypes.element,
};

Clicker.defaultProps = {
  render: undefined,
};

Expander.propTypes = {
  minHeight: PropTypes.arrayOf(PropTypes.string),
};

Expander.defaultProps = {
  minHeight: ['0', '0', '0'],
};

Collapse.Clicker = Clicker;
Collapse.Expander = Expander;

export default Collapse;
