import axios from 'axios';
import { API_URL } from './constants';

const baseURL = API_URL || '';

const $ = axios.create({
  baseURL,
  timeout: 60000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

function get(parameters) {
  return new Promise((resolve, reject) => {
    const { url } = parameters;

    $.get(url)
      .then((response) => resolve(response.data))
      .catch((response) => reject(response));
  });
}

export { get };
