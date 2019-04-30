import React from 'react';
import { shallow } from 'enzyme';
import Component from './BookItem';

const defaultProps = {
  book: {
    id: 'book1',
    name: 'Really Good Book',
    author: {
      name: 'Mr. John Doe',
      id: 'author1',
    },
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
});
