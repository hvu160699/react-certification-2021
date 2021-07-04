import React from 'react';
import { StyledButton } from './Button.styled';

const Button = (props) => (
  <StyledButton type="button" {...props}>
    {props.children}
  </StyledButton>
);

export default Button;
