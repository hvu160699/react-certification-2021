import React from 'react';

import { shallow } from 'enzyme';

import Header from './Header.component';
import Avatar from '../Common/Avatar';

jest.mock('react-router-dom', () => {
  const originalModule = jest.requireActual('react-router-dom');

  return {
    ...originalModule,
    useLocation: () => ({
      pathname: '/',
    }),
  };
});

describe('Header test suit', () => {
  const setState = jest.fn();
  const useStateSpy = jest.spyOn(React, 'useState');
  useStateSpy.mockImplementation((init) => [init, setState]);

  it('Should render component that contains <Avatar />', () => {
    const wrapper = shallow(<Header />);

    expect(wrapper.containsMatchingElement(<Avatar />)).toBeTruthy();
  });
});
