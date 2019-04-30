import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectBookById } from '@redux/modules/books';
import { Component as BookList } from '@components/BookList';
import BookCover from '@components/BookCover';

const StyledItem = styled.div`
  margin: 0 0 1rem;

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

const BookDetail = ({ book: { id, name, author, isbn, cover, byAuthor } }) =>
  id ? (
    <Fragment>
      <StyledItem>
        <BookCover imageUrl={cover} size="full" />
        <div className="title">{name}</div>
        <div className="author">{author.name}</div>
        <div className="isbn">{`ISBN: ${isbn}`}</div>
      </StyledItem>
      {byAuthor.length ? (
        <Fragment>
          <div>More by this author:</div>
          <BookList books={byAuthor} />
        </Fragment>
      ) : null}
      <StyledLink to="/">Back to full book list</StyledLink>
    </Fragment>
  ) : null;

BookDetail.propTypes = {
  book: PropTypes.shape({}).isRequired,
};

const Container = connect((state, props) => ({
  book: selectBookById(state, { id: props.match.params.id }),
}))(BookDetail);

export { Container as default, BookDetail as Component };
