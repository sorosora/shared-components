/**
 * styled-components Img@0.2.0 by sorosora
 */

import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import ConditionalWrap from './ConditionalWrap';

const typeList = {
  cover: css`
    width: 100%;
    height: 100%;
    object-fit: cover;
    font-family: ${({ ie }) => (ie ? 'object-fit: cover;' : '')};
  `,
  contain: css`
    width: 100%;
    height: 100%;
    object-fit: contain;
    font-family: ${({ ie }) => (ie ? 'object-fit: contain;' : '')};
  `,
  width: css`
    width: 100%;
  `,
  height: css`
    height: 100%;
  `,
};

const NormalImg = styled.img`
  ${({ type }) => typeList[type] || ''};
`;

NormalImg.propTypes = {
  type: PropTypes.string,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

NormalImg.defaultProps = {
  alt: '',
};

const getMedia = (media, breakpoint) => {
  const mediaString = media[breakpoint];
  return mediaString.replace('@media', '').trim();
};

const Source = styled.source.attrs(({ theme, breakpoint }) => ({
  media: getMedia(theme.media, breakpoint),
}))``;

const Img = styled((props) => {
  const { picture, ...otherProps } = props;
  return (
    <ConditionalWrap condition={!!picture} wrap={(children) => (
      <picture>
        {
          picture.phone ?
            <Source srcSet={picture.phone} breakpoint='phone' /> :
            null
        }
        {
          picture.tablet ?
            <Source srcSet={picture.tablet} breakpoint='tablet' /> :
            null
        }
        {children}
      </picture>
    )}>
      <NormalImg {...otherProps} />
    </ConditionalWrap>
  )
})``;

const picturePropTypes = PropTypes.shape({
  phone: PropTypes.string,
  tablet: PropTypes.string,
});

Img.propTypes = {
  type: PropTypes.string,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  picture: picturePropTypes,
};

Img.defaultProps = {
  alt: '',
};

export default Img;
