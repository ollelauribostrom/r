import React from 'react';
import { shallow } from 'enzyme';
import { ExampleButton } from '.';

describe('Tests for ExampleButton component', () => {
  it('renders the correct text', () => {
    const wrapper = shallow(<ExampleButton text="test" />);
    expect(wrapper.text()).toEqual('test');
  });
  it('matches snapshot', () => {
    const wrapper = shallow(<ExampleButton text="test" />);
    expect(wrapper).toMatchSnapshot();
  });
  it('invokes onClick handler when clicked', () => {
    const onClick = jest.fn();
    const wrapper = shallow(<ExampleButton text="test" onClick={onClick} />);
    wrapper.simulate('click');
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
