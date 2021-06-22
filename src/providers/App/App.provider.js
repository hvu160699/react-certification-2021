import React, { useContext, useReducer } from 'react';
import reducer from './App.reducer';

const AppContextValue = {
  videos: [],
  isLoading: true,
  isSidebarOpen: false,
  theme: 'light',
  error: null,
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

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {props.children}
    </AppContext.Provider>
  );
};

export { useAppContext };
export default AppProvider;
