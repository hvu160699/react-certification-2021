import { get } from '../../utils/http-client';

const $getVideos = () => {
  const parameters = {
    url:
      'https://gist.githubusercontent.com/qtd-wizeline/095682f5d910421e59dbfc5f691e0543/raw/f3af25f1505deb67e2cc9ee625a633f24d8983ff/youtube-videos-mock.json',
  };

  return get(parameters);
};

export { $getVideos };
