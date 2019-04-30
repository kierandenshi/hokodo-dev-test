import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Styled = styled.img`
  width: ${props => (props.size === 'thumbnail' ? '100px' : '500px')};
  height: ${props => (props.size === 'thumbnail' ? '100px' : '500px')};
`;

const BookCover = ({ imageUrl, size }) => <Styled src={imageUrl} size={size} />;

BookCover.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  size: PropTypes.string,
};

BookCover.defaultProps = {
  size: 'thumbnail',
};

export default BookCover;
