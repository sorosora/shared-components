/**
 * styled-components withPreload@0.1.0 by sorosora
 */

import React from 'react';
import Head from 'next/head';

/**
 * @param Component
 * @param urls
 * @param as
 * @param type
 * @returns {function(*): *}
 */

const withPreload = (Component, urls, as = 'image', type) => props => (
  <React.Fragment>
    <Head>
      {
        urls.map((url, key) => (
          <link
            rel='preload'
            href={url}
            as={as}
            key={`${url + key}`}
            {...{ [type ? 'type' : undefined]: type }}
          />
        ))
      }
    </Head>
    <Component {...props} />
  </React.Fragment>
);

export default withPreload;
