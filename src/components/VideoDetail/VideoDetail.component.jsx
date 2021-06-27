import React from 'react';
import {
  VideoContent,
  VideoFrame,
  VideoStatistics,
  VideoTags,
} from './VideoDetail.styled';

import { YOUTUBE_VIDEO_URL } from '../../utils/constants';

const VideoDetail = ({ video, videoId }) => {
  const { snippet, statistics } = video;

  return (
    <div>
      <VideoFrame>
        <iframe
          style={{ width: '100%', height: 425 }}
          title={snippet.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          src={`${YOUTUBE_VIDEO_URL}${videoId}`}
        />
      </VideoFrame>
      <VideoContent>
        <VideoTags>
          <span>{snippet.tags.slice(0, 3).join(' ')}</span>
        </VideoTags>
        <h1>{snippet.title}</h1>
        <VideoStatistics>
          <div>
            <span>{statistics.viewCount} views</span>
            <span>{snippet.publishedAt}</span>
          </div>
        </VideoStatistics>
      </VideoContent>
    </div>
  );
};

export default VideoDetail;
