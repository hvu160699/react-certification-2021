import React from 'react';
import { StyledAvatar } from './Avatar.styled';

import { DEFAULT_AVATAR } from '../../../utils/constants';

const Avatar = (props) => <StyledAvatar src={DEFAULT_AVATAR} {...props} />;

export default Avatar;
