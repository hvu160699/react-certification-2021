import styled from '@emotion/styled';

const Main = styled.div`
  min-height: 100%;
  display: flex;
  padding-top: 4rem;
`;

const Wrapper = styled.div`
  flex: 1;
`;

const Page = styled(Main)`
  background: #f9f9f9;
  padding: 1rem 1.25rem;

  @media (min-width: 1024px) {
    padding: 1.5rem 1rem;
  }

  @media (min-width: 1280px) {
    padding: 1.5rem;
  }
`;

Main.displayName = 'MainLayout';
Page.displayName = 'PageLayout';

const Styled = {
  Main,
  Page,
  Wrapper,
};

export default Styled;
