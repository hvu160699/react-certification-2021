import React from 'react';
import { useHistory } from 'react-router';
import { useAppContext } from '../../providers/App';
import { useAuthContext } from '../../providers/Auth';
import Header from '../Header';
import Sidebar from '../Sidebar';
import Styled from './Layout.styled';

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
  const { state, actions } = useAppContext();
  const {
    authState: { isAuthenticated },
    authActions,
  } = useAuthContext();

  const handleLogout = async () => {
    try {
      const res = await authActions.handleLogout();

      if (res) {
        history.replace('/');
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Header
        isDarkMode={state.isDarkMode}
        toggleTheme={actions.toggleTheme}
        toggleSidebar={actions.toggleSidebar}
      />
      <Styled.Main>
        <Sidebar
          isAuthenticated={isAuthenticated}
          isDarkMode={state.isDarkMode}
          isSidebarOpen={state.isSidebarOpen}
          handleLogout={handleLogout}
        />
        <Styled.Wrapper>{children}</Styled.Wrapper>
      </Styled.Main>
    </>
  );
};

export default Layout;
