import { lazy } from 'react';

function random(limit) {
  return Math.floor(Math.random() * limit);
}

function loader(pageName) {
  return lazy(() => import(`../pages/${pageName}`));
}

function createQuerystring(queryData) {
  const queryStringArray = Object.keys(queryData).reduce((acc, key) => {
    let value = '';

    if (Array.isArray(queryData[key])) value = queryData[key].join(',');
    else value = queryData[key];

    acc.push(`${key}=${value}`);
    return acc;
  }, []);

  let queryString = '';
  if (queryStringArray.length) {
    queryString = `?${queryStringArray.join('&')}`;
  }

  return queryString;
}

function formatNumber(value, type = 'dot') {
  const separate = type === 'dot' ? '.' : ',';

  return value.replace(/\B(?=(?:\d{3})+(?!\d))/g, separate);
}

function appendHashTag(tags) {
  if (Array.isArray(tags)) return tags.map((t) => `#${t}`).join(' ');
  if (typeof tags === 'string') return `#${tags}`;
}

function toDateString(date) {
  return new Date(date).toDateString();
}

export { random, loader, createQuerystring, formatNumber, appendHashTag, toDateString };
