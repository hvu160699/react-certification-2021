import React from 'react';
import { shallow } from 'enzyme';

import Avatar from './Avatar.component';

import { DEFAULT_AVATAR } from '../../../utils/constants';

describe('Avatar', () => {
  it('Should render an avatar without crashing', () => {
    const avatar = shallow(<Avatar />);

    expect(avatar.find('StyledAvatar').exists()).toBeTruthy();
  });

  it('Should render an avatar with default src when not pass the src prop', () => {
    const avatar = shallow(<Avatar />);

    expect(avatar.prop('src')).toEqual(DEFAULT_AVATAR);
  });
});
