import { createQuerystring } from '../../utils/fns';
import { get } from '../../utils/http-client';

// const $getVideos = () => {
//   const parameters = {
//     url:
//       'https://gist.githubusercontent.com/qtd-wizeline/095682f5d910421e59dbfc5f691e0543/raw/f3af25f1505deb67e2cc9ee625a633f24d8983ff/youtube-videos-mock.json',
//   };

//   return axios.get(parameters.url).then(res => res.data).catch(err => err);
// };

const $getVideos = (queryData) => {
  const querystring = createQuerystring(queryData);

  const parameters = {
    url: `search${querystring}`,
  };

  return get(parameters);
};

export { $getVideos };
