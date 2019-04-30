import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectBooksCollection } from '@redux/modules/books';
import BookItem from '@components/BookItem';

const BookList = ({ books }) => (
  <div>
    {books.map(book => (
      <BookItem book={book} key={book.id} />
    ))}
  </div>
);

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

const Container = connect(state => ({
  books: selectBooksCollection(state),
}))(BookList);

export { Container as default, BookList as Component };
