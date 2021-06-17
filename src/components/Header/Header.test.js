import React from 'react';

import { shallow } from 'enzyme';

import Header from './Header.component';
import Avatar from '../Common/Avatar';

describe('Header', () => {
  it('Should render <Header /> that contains <Avatar /> component', () => {
    const header = shallow(<Header />);

    expect(header.containsMatchingElement(<Avatar />)).toBeTruthy();
  });
});
