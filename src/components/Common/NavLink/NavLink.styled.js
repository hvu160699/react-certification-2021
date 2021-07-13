import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

const StyledLink = styled(NavLink)`
  font-size: 1rem;
  padding: 1rem;
  text-decoration: none;
  transition: all 250ms linear;
  color: ${(props) => props.theme.navLinkColor};

  &:hover,
  &.${(props) => props.activeClassName} {
    background-color: #f2f2f2;
    color: #212529;
  }

  &.${(props) => props.activeClassName} {
    font-weight: 600;
  }

  &:visited {
    color: ${(props) => props.theme.navLinkColor};
  }
`;

StyledLink.displayName = 'NavLink';

export default StyledLink;
