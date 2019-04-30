import { createSelector } from 'reselect';
import { baseURL } from '@config/api';
import { createPrefix } from '@redux/utils/actionHelpers';
import { transformDataResponse } from '@redux/utils/dataTransformers';
import getProps from '@redux/utils/getProps';

const prefix = createPrefix('books');

export const FETCH_BOOKS = prefix('FETCH_BOOKS');
export const FETCH_BOOKS_SUCCESS = prefix('FETCH_BOOKS_SUCCESS');
export const FETCH_BOOKS_FAILURE = prefix('FETCH_BOOKS_FAILURE');

export const fetchBooks = () => ({
  type: FETCH_BOOKS,
  payload: {
    request: {
      url: `${baseURL}/data.json`,
      method: 'GET',
    },
  },
});

export const initialState = {
  isFetching: false,
  books: {
    byId: {},
    allIds: [],
  },
  authors: {
    byId: {},
    allIds: [],
  },
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_BOOKS:
      return {
        ...initialState,
        isFetching: true,
      };

    case FETCH_BOOKS_SUCCESS: {
      const { books } = payload;

      return {
        ...state,
        ...transformDataResponse(books),
        isFetching: false,
      };
    }

    case FETCH_BOOKS_FAILURE:
      return {
        ...state,
        isFetching: false,
      };

    default:
      return state;
  }
};

export const selectBooksCollection = state => {
  const { byId } = state.books.books;
  return Object.keys(byId).map(id => byId[id]);
};

export const selectBookById = createSelector(
  state => state.books.books.byId,
  state => selectBooksCollection(state),
  getProps,
  (byId, collection, { id }) => {
    const book = byId[id];
    const ret = collection.length
      ? {
          ...book,
          byAuthor: collection.reduce((acc, x) => {
            if (x.author.id === book.author.id && x.id !== book.id) acc.push(x);
            return acc;
          }, []),
        }
      : {};
    return ret;
  },
);

export default reducer;
