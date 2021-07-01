import styled from '@emotion/styled';

const VideoFrame = styled.iframe`
  width: 100%;
  height: 260px;

  @media (min-width: 768px) {
    height: 360px;
  }

  @media (min-width: 1024px) {
    height: 425px;
  }
`;

const VideoContent = styled.div`
  padding: 1rem 0;

  h1 {
    display: block;
    max-height: 2.4rem;
    overflow: hidden;
    font-size: 1.125rem;
    font-weight: 400;
    line-height: 2.4rem;
    margin: 0;
  }
`;

const VideoTags = styled.div`
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1.5rem;

  span {
    display: inline-block;
    color: #065fd4;
  }
`;

const VideoStatistics = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 0.5rem;

  span {
    color: gray;
    line-height: 1rem;
  }
`;

const Styled = {
  VideoFrame,
  VideoContent,
  VideoTags,
  VideoStatistics,
};

export default Styled;
