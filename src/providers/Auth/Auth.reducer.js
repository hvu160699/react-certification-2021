const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'AUTH/LOG_IN': {
      return { ...state, user: { ...payload }, isAuthenticated: true };
    }
    case 'AUTH/LOG_OUT': {
      return { ...state, user: {}, isAuthenticated: false };
    }
    default: {
      return { ...state };
    }
  }
};

export default reducer;
