/* eslint-disable import/prefer-default-export */

export const transformDataResponse = collection => {
  const authors = Array.from(
    new Set(collection.map(({ author }) => author)),
  ).reduce((acc, name, index) => {
    acc.push({ id: `author${index + 1}`, name });
    return acc;
  }, []);

  return {
    books: {
      byId: collection.reduce((acc, { book_id, author, ...rest }) => {
        const id = `book${book_id}`;
        acc[id] = {
          id,
          author: authors.find(x => x.name === author),
          ...rest,
        };
        return acc;
      }, {}),
      allIds: collection.map(book => `book${book.book_id}`),
    },
    authors: {
      byId: authors.reduce((acc, { id, name }) => {
        acc[id] = { id, name };
        return acc;
      }, {}),
      allIds: authors.map(author => author.id),
    },
  };
};
