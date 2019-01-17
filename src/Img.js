/**
 * styled-components Img@0.1.3 by sorosora
 */

import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

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

const Img = styled.img`
  ${({ type }) => typeList[type] || ''};
`;

Img.propTypes = {
  type: PropTypes.string,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

Img.defaultProps = {
  alt: '',
};

export default Img;
