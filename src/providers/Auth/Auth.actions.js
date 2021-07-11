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
  storage.clear();

  dispatch({ type: 'AUTH/LOG_OUT' });
};

const actions = {
  handleLogin,
  handleLogout,
};

export default actions;
