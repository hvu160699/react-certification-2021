import React from 'react';
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
  return (
    <Styled.Main>
      <Header />
      {children}
    </Styled.Main>
  );
};

export default Layout;
