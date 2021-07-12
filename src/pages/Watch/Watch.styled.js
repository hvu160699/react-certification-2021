import styled from '@emotion/styled';
import Container from '../../components/Common/Container';

const WatchPageContainer = styled(Container)`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 1024px) {
    display: grid;
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
  WatchPageContainer,
};

export default Styled;
