import React from 'react';
import { useAppContext } from '../../providers/App';
import Header from '../Header';
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
  const { state, actions } = useAppContext();

  return (
    <Styled.Main>
      <Header
        isDarkMode={state.isDarkMode}
        toggleTheme={actions.toggleTheme}
        toggleSidebar={actions.toggleSidebar}
      />
      {children}
    </Styled.Main>
  );
};

export default Layout;
