export default {
  books: {
    books: {
      byId: {
        book1: {
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
        book2: {
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
        book3: {
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
      },
      allIds: ['book1', 'book2', 'book3'],
    },
    authors: {
      byId: {
        author1: {
          id: 'author1',
          name: 'Mrs. John Doe',
        },
        author2: {
          id: 'author2',
          name: 'Prof. John Doe',
        },
      },
      allIds: ['author1', 'author2'],
    },
  },
};
