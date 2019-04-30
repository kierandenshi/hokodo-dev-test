import React from 'react';
import { shallow } from 'enzyme';
import { Component } from './BookDetail';

const defaultProps = {
  book: {
    id: 'book1',
    name: 'Really Good Book',
    author: {
      name: 'Mr. John Doe',
      id: 'author1',
    },
    isbn: '1234',
    byAuthor: [],
    cover: 'http://coverimage.url',
  },
};

const getWrapper = (testProps = {}) => {
  const props = { ...defaultProps, ...testProps };
  return shallow(<Component {...props} />);
};

describe('Component', () => {
  it('should match snapshot', () => {
    const wrapper = getWrapper();
    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot', () => {
    const testProps = {
      book: {
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
      },
    };
    const wrapper = getWrapper(testProps);
    expect(wrapper).toMatchSnapshot();
  });
});
