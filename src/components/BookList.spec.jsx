import React from 'react';
import { shallow } from 'enzyme';
import { Component } from './BookList';

const defaultProps = {
  books: [],
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
