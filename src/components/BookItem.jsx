import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import BookCover from '@components/BookCover';

const StyledItem = styled.div`
  display: flex;
  margin: 0 0 1rem;

  .details {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-left: 1rem;
  }

  .title {
    font-size: 2rem;
    font-weight: bold;
  }

  .author {
    font-size: 1.5rem;
  }
`;

const StyledLink = styled(Link)`
  color: green;
`;

const BookItem = ({ book: { id, cover, name, author } }) => (
  <StyledItem>
    <BookCover imageUrl={cover} />
    <div className="details">
      <div className="title">{name}</div>
      <div className="author">{author.name}</div>
      <StyledLink to={`/${id}`}>More information</StyledLink>
    </div>
  </StyledItem>
);

BookItem.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string,
    cover: PropTypes.string,
    name: PropTypes.string,
    author: PropTypes.shape({
      name: PropTypes.string,
    }),
  }).isRequired,
};

export default BookItem;
