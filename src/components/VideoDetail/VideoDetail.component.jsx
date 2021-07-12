import React from 'react';
import PropTypes from 'prop-types';
import Styled from './VideoDetail.styled';

import { YOUTUBE_VIDEO_URL } from '../../utils/constants';
import { appendHashTag, formatNumber, toDateString } from '../../utils/fns';
import Button from '../Common/Button';

const VideoDetail = ({
  video,
  videoId,
  isAuthenticated,
  isFavorVideo,
  handleFavoriteVideo,
}) => {
  const { snippet, statistics } = video;

  return (
    <>
      <Styled.VideoFrame
        title={snippet.title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        src={`${YOUTUBE_VIDEO_URL}${videoId}`}
      />
      <Styled.VideoContent>
        {snippet.tags && (
          <Styled.VideoTags>
            <span>{appendHashTag(snippet.tags.slice(0, 3))}</span>
          </Styled.VideoTags>
        )}
        <h1>{snippet.title}</h1>
        {isAuthenticated && (
          <Button.PrimaryButton onClick={handleFavoriteVideo}>
            {isFavorVideo ? 'Remove from Favorites' : 'Add to Favorites'}
          </Button.PrimaryButton>
        )}
        <Styled.VideoStatistics>
          <span>{`${formatNumber(statistics.viewCount)} views`}</span>
          <span>-</span>
          <span>{toDateString(snippet.publishedAt)}</span>
        </Styled.VideoStatistics>
      </Styled.VideoContent>
    </>
  );
};

VideoDetail.propTypes = {
  video: PropTypes.shape(PropTypes.object).isRequired,
  videoId: PropTypes.number.isRequired,
  isAuthenticated: PropTypes.bool,
  isFavorVideo(props, propName) {
    if (props.isAuthenticated && props[propName] === undefined) {
      return new Error(`Please provide an isFavorVideo value if isAuthenticated is true`);
    }
    return PropTypes.bool;
  },
  handleFavoriteVideo(props, propName) {
    if (props.isAuthenticated && props[propName] === undefined) {
      return new Error(
        `Please provide an handleFavoriteVideo function if isAuthenticated is true`
      );
    }
    return PropTypes.func;
  },
};

VideoDetail.defaultProps = {
  isAuthenticated: false,
  isFavorVideo: false,
  handleFavoriteVideo: undefined,
};

export default VideoDetail;
