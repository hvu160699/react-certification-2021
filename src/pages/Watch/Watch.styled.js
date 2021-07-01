import styled from '@emotion/styled';
import Container from '../../components/Common/Container';

const Layout = styled.div`
  background: #f9f9f9;
  padding: 1rem;
  height: 100%;

  @media (min-width: 1024px) {
    padding: 1.5rem 1rem;
  }

  @media (min-width: 1280px) {
    padding: 1.5rem 0;
  }
`;

const MainContainer = styled(Container)`
  margin-left: auto;
  margin-right: auto;
  display: grid;
  gap: 1rem;

  .watch-section {
    grid-column: 1 / -1;
  }

  .list-section {
    grid-column: 1 / -1;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(12, minmax(0, 1fr));

    .watch-section {
      grid-column: 1 / 9;
    }

    .list-section {
      grid-column: 9 / -1;
    }
  }
`;

const Styled = {
  Layout,
  MainContainer,
};

export default Styled;
