import React from 'react';
import { ThemeProvider } from '@emotion/react';

import { useHistory, useLocation } from 'react-router';

import { useAppContext } from '../../providers/App';
import { useAuthContext } from '../../providers/Auth';
import { useVideoContext } from '../../providers/Video';
import Header from '../Header';
import Sidebar from '../Sidebar';
import Styled from './Layout.styled';

import { THEME } from '../../utils/constants';

export const withPageLayout = (Component) => {
  return class PageLayout extends React.PureComponent {
    render() {
      return (
        <Styled.Page>
          <Component />
        </Styled.Page>
      );
    }
  };
};

const Layout = ({ children }) => {
  const history = useHistory();
  const location = useLocation();
  const {
    state: { isDarkMode, isSidebarOpen },
    actions: { toggleSidebar, toggleTheme },
  } = useAppContext();

  const {
    state: { isAuthenticated, user },
    actions: { handleLogout },
  } = useAuthContext();

  const {
    actions: { handleSearchVideos },
  } = useVideoContext();

  const handleAuthentication = async () => {
    if (isAuthenticated) {
      try {
        const res = await handleLogout();

        if (res) {
          history.replace('/');
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      history.push({ pathname: '/login', state: { background: location } });
    }
  };

  const headerProps = {
    user,
    isAuthenticated,
    handleSearchVideos,
    isDarkMode,
    toggleTheme,
    toggleSidebar,
  };

  const sidebarProps = {
    isDarkMode,
    isSidebarOpen,
    isAuthenticated,
    handleAuthentication,
  };

  return (
    <ThemeProvider theme={isDarkMode ? THEME.dark : THEME.light}>
      <Header {...headerProps} />
      <Styled.Main>
        <Sidebar {...sidebarProps} />
        <Styled.Wrapper>{children}</Styled.Wrapper>
      </Styled.Main>
    </ThemeProvider>
  );
};

export default Layout;
