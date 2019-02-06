import React from 'react';
import { shallow } from 'enzyme';
import { Hello } from '../src';

describe('Tests for Hello component', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Hello name="test" />);
    expect(wrapper.text()).toEqual('Hello test!');
  });
});
