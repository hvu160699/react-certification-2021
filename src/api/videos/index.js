import { createQuerystring } from '../../utils/fns';
import { get } from '../../utils/http-client';

const $getVideos = (queryData) => {
  const querystring = createQuerystring(queryData);

  const parameters = {
    url: `search${querystring}`,
  };

  return get(parameters);
};

const $getVideoDetail = (queryData) => {
  const querystring = createQuerystring(queryData);

  const parameters = {
    url: `videos${querystring}`,
  };

  return get(parameters);
};

export { $getVideos, $getVideoDetail };
