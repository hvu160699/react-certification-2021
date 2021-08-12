import { MOCKED_USER } from '../../utils/constants';
import { storage } from '../../utils/storage';

const handleLogin = (username, password) => (dispatch) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === 'wizeline' && password === 'Rocks!') {
        dispatch({ type: 'AUTH/LOG_IN', payload: { ...MOCKED_USER } });
        return resolve(MOCKED_USER);
      }
      return reject(new Error('Username or password invalid'));
    }, 250);
  });
};

const handleLogout = () => (dispatch) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      storage.clear();

      dispatch({ type: 'AUTH/LOG_OUT' });

      return resolve(true);
    }, 250);
  });
};

const handleAddToFavorites = (video) => (dispatch) =>
  dispatch({ type: 'AUTH/ADD_TO_FAVORITES', payload: video });

const handleRemoveFromFavorites = (videoId) => (dispatch) =>
  dispatch({ type: 'AUTH/REMOVE_FROM_FAVORITES', payload: videoId });

const actions = {
  handleLogin,
  handleLogout,
  handleAddToFavorites,
  handleRemoveFromFavorites,
};

export default actions;
