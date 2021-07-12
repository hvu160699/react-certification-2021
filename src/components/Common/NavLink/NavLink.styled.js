import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

const StyledLink = styled(NavLink)`
  font-size: 1rem;
  padding: 1rem;
  text-decoration: none;
  transition: all 250ms linear;

  &:hover,
  &.${(props) => props.activeClassName} {
    background-color: rgba(229, 231, 235, 1);
  }

  &.${(props) => props.activeClassName} {
    font-weight: 600;
  }

  &:visited {
    color: unset;
  }
`;

StyledLink.displayName = 'NavLink';

export default StyledLink;
