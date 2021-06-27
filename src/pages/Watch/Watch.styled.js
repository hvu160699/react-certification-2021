import styled from '@emotion/styled';
import Container from '../../components/Common/Container';

const WatchPageContainer = styled(Container)`
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: auto;
  gap: 1rem;

  .watch-section {
    grid-column: 1 / 9;
  }

  .list-section {
    grid-column: 9 / -1;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(12, minmax(0, 1fr));
  }
`;

export { WatchPageContainer };
