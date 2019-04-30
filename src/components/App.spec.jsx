import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

const defaultProps = {};

const getWrapper = (testProps = {}) => {
  const props = { ...defaultProps, ...testProps };
  return shallow(<App {...props} />);
};

describe('App component', () => {
  it('should match snapshot', () => {
    const wrapper = getWrapper();
    expect(wrapper).toMatchSnapshot();
  });
});
