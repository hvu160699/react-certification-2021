import React from 'react';

import { shallow } from 'enzyme';

import ToggleSwitch from './ToggleSwitch.component';

describe('ToggleSwitch', () => {
  const toggleProps = {
    toggleName: 'test-toggle',
    checked: false,
    onChange: jest.fn(),
  };

  it('Should render ToggleSwitch without crashing', () => {
    const toggleSwitch = shallow(<ToggleSwitch {...toggleProps} />);

    expect(toggleSwitch.find('TSInput').exists()).toBeTruthy();
  });

  it('Should render an TSInput with type checkbox', () => {
    const toggleSwitch = shallow(<ToggleSwitch {...toggleProps} />);

    expect(toggleSwitch.find('TSInput').prop('type')).toEqual('checkbox');
  });

  it('Should render a TSInput with initial is uncheck', () => {
    const toggleSwitch = shallow(<ToggleSwitch {...toggleProps} />);

    expect(toggleSwitch.find('TSInput').props().checked).toBeFalsy();
  });

  it('Should triggers onChange function when click on ToggleSwitch', () => {
    const toggleSwitch = shallow(<ToggleSwitch {...toggleProps} />);

    toggleSwitch.find('TSInput').simulate('change', { target: { checked: true } });

    expect(toggleProps.onChange).toHaveBeenCalledTimes(1);
  });
});
