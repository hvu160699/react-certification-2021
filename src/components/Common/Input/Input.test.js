import React from 'react';

import { shallow } from 'enzyme';

import Input from './Input.component';

describe('Input', () => {
  it('Should render an input without crashing', () => {
    const input = shallow(<Input />);

    expect(input.find('StyledInput').exists()).toBeTruthy();
  });

  it('Should render an input with placeholder', () => {
    const placeholder = 'Type here...';
    const input = shallow(<Input placeholder={placeholder} />);

    expect(input.prop('placeholder')).toEqual(placeholder);
  });

  it('Should render an input with correct type', () => {
    const type = 'password';
    const input = shallow(<Input type={type} />);

    expect(input.prop('type')).toEqual(type);
  });

  it('Should render an input with default value', () => {
    const input = shallow(<Input defaultValue="Sushi" />);

    expect(input.prop('defaultValue')).toEqual('Sushi');
  });

  it('Should triggers onChange function when someone type-in', () => {
    const onChangeMock = jest.fn();
    const input = shallow(<Input onChange={onChangeMock} />);

    input.simulate('change', { target: { value: 'Sushi' } });

    expect(onChangeMock).toHaveBeenCalledTimes(1);
  });
});
