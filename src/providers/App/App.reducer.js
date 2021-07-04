const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'APP/TOGGLE_THEME':
      return {
        ...state,
        theme: payload.theme,
      };
    case 'APP/TOGGLE_SIDEBAR':
      return {
        ...state,
        isSidebarOpen: payload,
      };
    default:
      return { ...state };
  }
};

export default reducer;
