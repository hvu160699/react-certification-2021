import styled from '@emotion/styled';

const Main = styled.div`
  height: 100%;
`;

const Page = styled(Main)`
  background: #f9f9f9;
  padding: 1rem 1.25rem;

  @media (min-width: 1024px) {
    padding: 1.5rem 1rem;
  }

  @media (min-width: 1280px) {
    padding: 1.5rem 0;
  }
`;

const Styled = {
  Main,
  Page,
};

export default Styled;
