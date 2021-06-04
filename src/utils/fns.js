import { lazy } from 'react';

function random(limit) {
  return Math.floor(Math.random() * limit);
}

function loader(pageName) {
  return lazy(() => import(`../pages/${pageName}`));
}

export { random, loader };
