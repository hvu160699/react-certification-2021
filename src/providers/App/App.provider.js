import React, { useContext, useReducer } from 'react';
import reducer from './App.reducer';
import actions from './App.actions';
import useEnhancedActions from '../../utils/hooks/useEnhancedActions';

const AppContextValue = {
  isSidebarOpen: false,
  isDarkMode: false,
};

const AppContext = React.createContext(AppContextValue);

const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("Can't use 'useAppContext' without an AppProvider");
  }

  return context;
};

const AppProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, AppContextValue);
  const { enhancedActions } = useEnhancedActions(actions, dispatch);

  return (
    <AppContext.Provider value={{ state, dispatch, actions: enhancedActions }}>
      {props.children}
    </AppContext.Provider>
  );
};

export { useAppContext };
export default AppProvider;
