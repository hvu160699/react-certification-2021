import React from 'react';
import { shallow } from 'enzyme';
import NavLink from './NavLink.component';

describe('NavLink component test suit', () => {
  it('Should render without crashing', () => {
    const wrapper = shallow(<NavLink to="/" />);

    expect(wrapper.find('NavLink').exists()).toBeTruthy();
  });

  it("NavLink's location should equal to 'to' props", () => {
    const wrapper = shallow(<NavLink to="/watch" />);

    expect(wrapper.find('NavLink').prop('to')).toEqual('/watch');
  });
});
