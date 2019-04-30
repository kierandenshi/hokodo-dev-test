import React from 'react';
import { shallow } from 'enzyme';
import Component from './BookCover';

const defaultProps = {
  imageUrl: 'http://image.url',
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
