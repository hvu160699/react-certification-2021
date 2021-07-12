import React from 'react';

import Styled from './Sidebar.styled';

import { SIDEBAR_MENU } from '../../utils/constants';

const Sidebar = (props) => {
  const { isSidebarOpen, isAuthenticated, handleLogout } = props;
  return (
    <Styled.AsideContainer isSidebarOpen={isSidebarOpen}>
      <Styled.AsideMenu>
        {SIDEBAR_MENU.map((item) => (
          <Styled.AsideMenuLink
            key={item.name}
            to={item.to}
            activeClassName="link-active"
            isSidebarOpen={isSidebarOpen}
          >
            {isSidebarOpen ? (
              <i className={`fa fa-sm fa-${item.icon}`} />
            ) : (
              <span>
                <i className={`fa fa-sm fa-${item.icon}`} />
                {item.name}
              </span>
            )}
          </Styled.AsideMenuLink>
        ))}
      </Styled.AsideMenu>
      {isAuthenticated && (
        <Styled.AsideFooter onClick={handleLogout} isSidebarOpen={isSidebarOpen}>
          {isSidebarOpen ? (
            <i className="fas fa-sm fa-sign-out-alt" />
          ) : (
            <span>
              <i className="fas fa-sm fa-sign-out-alt" />
              Logout
            </span>
          )}
        </Styled.AsideFooter>
      )}
    </Styled.AsideContainer>
  );
};

export default Sidebar;
