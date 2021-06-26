import styled from '@emotion/styled';

const GridVideoContainer = styled.div`
  max-width: 100%;
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 2rem;
  padding: 1rem;

  @media (min-width: 576px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    padding-left: 2rem;
    padding-right: 2rem;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    padding-left: 4rem;
    padding-right: 4rem;
  }
`;

const GridVideoItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 0.25rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  cursor: pointer;
  transition: all 250ms linear;

  img {
    object-fit: cover;
    width: 100%;
    height: 15rem;
    max-width: 100%;
  }

  .content {
    padding: 0 1rem;

    h1 {
      font-size: 1.25em;
      font-weight: 500;
      color: #111827;
    }

    p {
      margin-top: 0;
      font-weight: 400;
      color: #6b7280;
    }
  }

  &:hover {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }
`;

GridVideoContainer.displayName = 'GridVideoContainer';
GridVideoItem.displayName = 'GridVideoItem';

export { GridVideoContainer, GridVideoItem };
