import React, { useContext, useEffect, useReducer } from 'react';
import reducer from './Auth.reducer';
import actions from './Auth.actions';

import useEnhancedActions from '../../utils/hooks/useEnhancedActions';

import { AUTH_STORAGE_KEY } from '../../utils/constants';
import { storage } from '../../utils/storage';

const AuthContext = React.createContext();

const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) throw new Error("Can't use 'useAuthContext' without an AuthProvider");

  return context;
};

const AuthProvider = (props) => {
  const [state, dispatch] = useReducer(
    reducer,
    {},
    () => storage.get(AUTH_STORAGE_KEY) || { isAuthenticated: false, user: {} }
  );
  const { enhancedActions } = useEnhancedActions(actions, dispatch);

  useEffect(() => {
    storage.set(AUTH_STORAGE_KEY, state);
  }, [state]);

  return (
    <AuthContext.Provider value={{ authState: state, authActions: enhancedActions }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export { useAuthContext };
export default AuthProvider;
