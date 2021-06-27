import React from 'react';
import { shallow } from 'enzyme';
import Link from './Link.component';

describe('Link component test suit', () => {
  it('Should render Link without crashing', () => {
    const wrapper = shallow(<Link to="/" />);

    expect(wrapper.find('Link').exists()).toBeTruthy();
  });

  it("Link's location should equal to 'to' props", () => {
    const wrapper = shallow(<Link to="/watch" />);

    expect(wrapper.find('Link').prop('to')).toEqual('/watch');
  });
});
