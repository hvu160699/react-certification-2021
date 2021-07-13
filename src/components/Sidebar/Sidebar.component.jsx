import React from 'react';
import PropTypes from 'prop-types';
import Styled from './Sidebar.styled';

import { SIDEBAR_MENU } from '../../utils/constants';

const Sidebar = (props) => {
  const { isSidebarOpen, isAuthenticated, handleAuthentication } = props;
  return (
    <Styled.AsideContainer isSidebarOpen={isSidebarOpen}>
      <Styled.AsideMenu>
        {SIDEBAR_MENU.map((item) => (
          <Styled.AsideMenuLink
            key={item.name}
            to={item.to}
            activeClassName="link-active"
            isActive={(_, location) => location.pathname === item.to}
          >
            {isSidebarOpen ? (
              <i className={`fa fa-sm fa-${item.icon}`} />
            ) : (
              <i className={`fa fa-sm fa-${item.icon}`} />
            )}
            {!isSidebarOpen && <span>{item.name}</span>}
          </Styled.AsideMenuLink>
        ))}
      </Styled.AsideMenu>
      <Styled.AsideFooter onClick={handleAuthentication}>
        {isSidebarOpen ? (
          <i className={`fas fa-sm fa-sign-${isAuthenticated ? 'out' : 'in'}-alt`} />
        ) : (
          <i className={`fas fa-sm fa-sign-${isAuthenticated ? 'out' : 'in'}-alt`} />
        )}
        {!isSidebarOpen && <span>{isAuthenticated ? 'Logout' : 'Login'}</span>}
      </Styled.AsideFooter>
    </Styled.AsideContainer>
  );
};

Sidebar.propTypes = {
  isSidebarOpen: PropTypes.bool.isRequired,
  isAuthenticated: PropTypes.bool,
  handleAuthentication: PropTypes.func,
};

Sidebar.defaultProps = {
  isAuthenticated: false,
  handleAuthentication: () => {},
};

export default Sidebar;
