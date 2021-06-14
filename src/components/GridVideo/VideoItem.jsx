import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const VideoItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
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

const VideoItem = ({ video }) => {
  const { title, description, thumbnails } = video;
  return (
    <VideoItemContainer>
      <picture>
        <source srcSet={thumbnails.high.url} media="(min-width: 1023.98px)" />
        <img loading="lazy" src={thumbnails.medium.url} alt={title} />
      </picture>
      <div className="content">
        <h1>{title || 'No title'}</h1>
        <p>{description || ''}</p>
      </div>
    </VideoItemContainer>
  );
};

VideoItem.propTypes = {
  video: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default memo(VideoItem);
