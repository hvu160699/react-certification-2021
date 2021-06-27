import styled from '@emotion/styled';

const GridVideoContainer = styled.div`
  max-width: 100%;
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: ${(props) => (props.vertical ? '1rem 0' : '2rem')};

  @media (min-width: 576px) {
    grid-template-columns: ${(props) =>
      props.vertical ? 'auto' : 'repeat(1, minmax(0, 1fr))'};
  }

  @media (min-width: 1024px) {
    grid-template-columns: ${(props) =>
      props.vertical ? 'auto' : 'repeat(4, minmax(0, 1fr))'};
  }
`;

const GridVideoItem = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.vertical ? 'row' : 'column')};
  justify-content: flex-start;
  align-items: stretch;
  width: 100%;
  height: 100%;
  overflow: hidden;

  .thumbnail {
    display: block;
    flex: none;
    width: 168px;
    height: 94px;
    margin-right: 0.5rem;

    picture {
      display: block;
      margin-left: auto;
      margin-right: auto;
      height: 100%;
      overflow: hidden;

      img {
        display: block;
        width: 100%;
        max-height: 100%;
      }
    }
  }

  .content {
    width: 100%;
    min-width: 0;
    display: flex;
    flex-direction: column;

    h3 {
      margin: 0 0 4px 0;

      span {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        max-height: cal(2 * 2rem);
        overflow: hidden;
        color: #111827;
        text-overflow: ellipsis;
        white-space: normal;
        font-size: 0.875rem;
        font-weight: 500;
        line-height: 1.2rem;
        letter-spacing: 0.25px;
      }
    }

    .statistics {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;

      .row {
        max-width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        flex-wrap: wrap;
        overflow: hidden;

        span {
          color: gray;
          font-size: 0.75rem;
          line-height: 1rem;
          display: inline-block;
          align-self: flex-start;
          text-overflow: ellipsis;
          white-space: hidden;
          overflow: hidden;
        }
      }
    }
  }
`;

GridVideoContainer.displayName = 'GridVideoContainer';
GridVideoItem.displayName = 'GridVideoItem';

export { GridVideoContainer, GridVideoItem };
