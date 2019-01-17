/**
 * styled-components withPrefetch@0.1.0 by sorosora
 */

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

/**
 * @param ComposedComponent
 * @param urls
 */

const withPrefetch = (ComposedComponent, urls = []) => {
  const WithPrefetch = (props) => {
    const { children } = props;
    return (
      <ComposedComponent {...props}>
        {children}
        {
          urls.map((url, key) => (
            <link rel='prefetch' href={url} key={`${url + key}`} />
          ))
        }
      </ComposedComponent>
    );
  };

  WithPrefetch.propTypes = {
    children: PropTypes.node.isRequired,
  };

  return styled(WithPrefetch)``;
};

export default withPrefetch;
