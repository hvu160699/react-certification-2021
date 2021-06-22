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

export { random, loader, createQuerystring };
