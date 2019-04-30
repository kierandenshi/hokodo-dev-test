import mockState from '@redux/utils/mockState';
import {
  initialState,
  reducer,
  selectBooksCollection,
  selectBookById,
} from './books';

describe('books module', () => {
  describe('reducer', () => {
    it('should return default state', () => {
      expect(reducer(initialState, { type: 'SOME_ACTION' })).toEqual(
        initialState,
      );
    });
  });

  describe('single book selector', () => {
    it('should return a single book item with no more', () => {
      const props = { id: 'book1' };
      const expected = {
        id: 'book1',
        author: {
          id: 'author1',
          name: 'Mrs. John Doe',
        },
        name: 'Becker West Arnoldo',
        isbn: '3181444340',
        published_at: '2000-01-01',
        cover: 'https://lorempixel.com/640/480/?82539',
        byAuthor: [],
      };
      expect(selectBookById(mockState, props)).toEqual(expected);
    });
  });

  describe('single book selector', () => {
    it('should return a single book item with one more', () => {
      const props = { id: 'book2' };
      const expected = {
        id: 'book2',
        author: {
          id: 'author2',
          name: 'Prof. John Doe',
        },
        name: 'Schuster Champlinborough',
        isbn: '1441614311',
        published_at: '1991-07-29',
        cover: 'https://lorempixel.com/640/480/?84662',
        byAuthor: [
          {
            id: 'book3',
            author: {
              id: 'author2',
              name: 'Prof. John Doe',
            },
            name: 'Okuneva MarianoVille',
            isbn: '0779284704',
            published_at: '2017-06-30',
            cover: 'https://lorempixel.com/640/480/?28970',
          },
        ],
      };
      expect(selectBookById(mockState, props)).toEqual(expected);
    });
  });

  describe('collection selector', () => {
    it('should return a collection of book items', () => {
      const expected = [
        {
          id: 'book1',
          author: {
            id: 'author1',
            name: 'Mrs. John Doe',
          },
          name: 'Becker West Arnoldo',
          isbn: '3181444340',
          published_at: '2000-01-01',
          cover: 'https://lorempixel.com/640/480/?82539',
        },
        {
          id: 'book2',
          author: {
            id: 'author2',
            name: 'Prof. John Doe',
          },
          name: 'Schuster Champlinborough',
          isbn: '1441614311',
          published_at: '1991-07-29',
          cover: 'https://lorempixel.com/640/480/?84662',
        },
        {
          id: 'book3',
          author: {
            id: 'author2',
            name: 'Prof. John Doe',
          },
          name: 'Okuneva MarianoVille',
          isbn: '0779284704',
          published_at: '2017-06-30',
          cover: 'https://lorempixel.com/640/480/?28970',
        },
      ];
      expect(selectBooksCollection(mockState)).toEqual(expected);
    });
  });
});
