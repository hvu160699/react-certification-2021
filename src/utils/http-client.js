import axios from 'axios';
import { API_URL as baseURL, API_KEY as key } from './constants';

const $ = axios.create({
  baseURL,
  timeout: 60000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

$.interceptors.request.use(
  (config) => {
    const newConfig = { ...config, params: { key } };

    return newConfig;
  },
  (error) => Promise.reject(error)
);

function get(parameters) {
  return new Promise((resolve, reject) => {
    const { url } = parameters;

    $.get(url)
      .then((response) => resolve(response.data))
      .catch((response) => reject(response));
  });
}

export { get };
