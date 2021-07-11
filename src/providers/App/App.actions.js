const toggleSidebar = () => (dispatch) => dispatch({ type: 'APP/TOGGLE_SIDEBAR' });
const toggleTheme = () => (dispatch) => dispatch({ type: 'APP/TOGGLE_THEME' });

const actions = {
  toggleSidebar,
  toggleTheme,
};

export default actions;
