const reducer = (state, action) => {
  const { type } = action;

  switch (type) {
    case 'APP/TOGGLE_THEME':
      return {
        ...state,
        isDarkMode: !state.isDarkMode,
      };
    case 'APP/TOGGLE_SIDEBAR':
      return {
        ...state,
        isSidebarOpen: !state.isSidebarOpen,
      };
    default:
      return { ...state };
  }
};

export default reducer;
