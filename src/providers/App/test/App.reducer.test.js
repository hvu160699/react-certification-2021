import reducer from '../App.reducer';

describe('AppReducer test suit', () => {
  it('Should return initial state as empty object', () => {
    expect(reducer(undefined, {})).toEqual({});
  });

  it('Should update "isDarkMode" value to true when action type is APP/TOGGLE_THEME', () => {
    const action = {
      type: 'APP/TOGGLE_THEME',
    };

    expect(reducer({}, action).isDarkMode).toBeTruthy();
  });

  it('Should update "isSidebarOpen" value to true when action type is APP/TOGGLE_SIDEBAR', () => {
    const action = {
      type: 'APP/TOGGLE_SIDEBAR',
      payload: true,
    };

    expect(reducer({}, action).isSidebarOpen).toBeTruthy();
  });
});
