import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { GridVideoItem } from './GridVideo.styled';

const VideoItem = ({ video }) => {
  const { title, description, thumbnails } = video;
  return (
    <GridVideoItem>
      <picture>
        <source srcSet={thumbnails.high.url} media="(min-width: 1023.98px)" />
        <img loading="lazy" src={thumbnails.medium.url} alt={title} />
      </picture>
      <div className="content">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </GridVideoItem>
  );
};

VideoItem.propTypes = {
  video: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default memo(VideoItem);
