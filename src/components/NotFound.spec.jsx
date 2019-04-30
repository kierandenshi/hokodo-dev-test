import React from 'react';
import { shallow } from 'enzyme';
import Component from './NotFound';

const defaultProps = {};

const getWrapper = (testProps = {}) => {
  const props = { ...defaultProps, ...testProps };
  return shallow(<Component {...props} />);
};

describe('NotFound component', () => {
  it('should match snapshot', () => {
    const wrapper = getWrapper();
    expect(wrapper).toMatchSnapshot();
  });
});
