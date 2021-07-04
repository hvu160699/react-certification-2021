import React from 'react';
import { shallow } from 'enzyme';

import VideoDetail from './VideoDetail.component';
import { YOUTUBE_VIDEO_URL } from '../../utils/constants';
import { appendHashTag, formatNumber, toDateString } from '../../utils/fns';

const data = {
  kind: 'youtube#video',
  etag: 'V8JXZHnM5qfL3KOdptIvW2b9G2I',
  id: 'nl79pan4h6U',
  snippet: {
    publishedAt: '2021-06-24T22:05:07Z',
    channelId: 'UCAiLfjNXkNv24uhpzUgPa6A',
    title: 'Giving Away 50,000 Cookies!',
    description:
      'So excited we could give away healthy food AND some extra sweets to the community this time :)\nMerch to fund the food pantry - https://shopmrbeast.com/collections/philanthropy\nlove you, @miladmirg, thanks for the donation!',
    thumbnails: {
      default: {
        url: 'https://i.ytimg.com/vi/nl79pan4h6U/default.jpg',
        width: 120,
        height: 90,
      },
      medium: {
        url: 'https://i.ytimg.com/vi/nl79pan4h6U/mqdefault.jpg',
        width: 320,
        height: 180,
      },
      high: {
        url: 'https://i.ytimg.com/vi/nl79pan4h6U/hqdefault.jpg',
        width: 480,
        height: 360,
      },
      standard: {
        url: 'https://i.ytimg.com/vi/nl79pan4h6U/sddefault.jpg',
        width: 640,
        height: 480,
      },
      maxres: {
        url: 'https://i.ytimg.com/vi/nl79pan4h6U/maxresdefault.jpg',
        width: 1280,
        height: 720,
      },
    },
    channelTitle: 'Beast Philanthropy',
    tags: ['beast philanthropy', 'beast philanthropy cookies'],
    categoryId: '22',
    liveBroadcastContent: 'none',
    localized: {
      title: 'Giving Away 50,000 Cookies!',
      description:
        'So excited we could give away healthy food AND some extra sweets to the community this time :)\nMerch to fund the food pantry - https://shopmrbeast.com/collections/philanthropy\nlove you, @miladmirg, thanks for the donation!',
    },
  },
  contentDetails: {
    duration: 'PT4M15S',
    dimension: '2d',
    definition: 'hd',
    caption: 'false',
    licensedContent: true,
    contentRating: {},
    projection: 'rectangular',
  },
  statistics: {
    viewCount: '5665507',
    likeCount: '448352',
    dislikeCount: '1945',
    favoriteCount: '0',
    commentCount: '24309',
  },
};

describe('VideoDetail test suit', () => {
  it('Should render with accurate data', () => {
    const wrapper = shallow(<VideoDetail video={data} videoId={data.id} />);

    expect(wrapper.find('VideoIframe').prop('src')).toEqual(
      `${YOUTUBE_VIDEO_URL}${data.id}`
    );
    expect(wrapper.find('VideoTags').text()).toEqual(
      appendHashTag(data.snippet.tags.slice(0, 3))
    );
    expect(wrapper.find('h1').text()).toEqual(data.snippet.title);
    expect(wrapper.find('VideoStatistics').text()).toEqual(
      `${formatNumber(data.statistics.viewCount)} views-${toDateString(
        data.snippet.publishedAt
      )}`
    );
  });

  it('Should not render VideoTags if tags is undefined', () => {
    const videoData = { ...data, ...data, snippet: { ...data.snippet, tags: undefined } };

    const wrapper = shallow(<VideoDetail video={videoData} videoId={data.id} />);

    expect(wrapper.find('VideoTags').exists()).toBeFalsy();
  });
});
