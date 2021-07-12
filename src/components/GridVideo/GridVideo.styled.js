import styled from '@emotion/styled';

const GridVideoContainer = styled.div`
  max-width: 100%;
  display: grid;
  ${(props) =>
    props.vertical
      ? `grid-template-columns: repeat(1, minmax(0, 1fr));
         gap: 1rem 0;
        `
      : `grid-template-columns: repeat(1, minmax(0, 1fr));
        gap: 1rem;
      `}

  @media (min-width: 768px) {
    grid-template-columns: ${(props) =>
      props.vertical ? 'auto' : 'repeat(2, minmax(0, 1fr))'};
  }

  @media (min-width: 1024px) {
    grid-template-columns: ${(props) =>
      props.vertical ? 'auto' : 'repeat(3, minmax(0, 1fr))'};
  }

  @media (min-width: 1440px) {
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
    position: relative;
    flex: none;
    ${(props) =>
      props.vertical
        ? `width: 168px;
    margin-right: 0.5rem;`
        : `width: 100%;
          margin-bottom: 0.5rem;
        `}
    height: 94px;

    @media (min-width: 640px) {
      height: ${(props) => (props.vertical ? '' : '188px')};
    }

    .img-wrapper {
      display: block;
      height: 100%;
      overflow: hidden;
      margin-left: auto;
      margin-right: auto;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: #000000;

      img {
        display: block;
        width: 100%;
        max-height: none;
        max-width: 100%;
        margin-left: auto;
        margin-right: auto;
        position: absolute;
        transform: translateY(-50%);
        top: 50%;
        left: 0;
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
        max-height: inherit;
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
