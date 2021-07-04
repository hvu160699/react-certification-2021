import reducer from '../App.reducer';

describe('AppReducer test suit', () => {
  it('Should return initial state as empty object', () => {
    expect(reducer(undefined, {})).toEqual({});
  });

  it('Should update "theme" value when action type is APP/TOGGLE_THEME', () => {
    const action = {
      type: 'APP/TOGGLE_THEME',
      payload: {
        theme: {
          background: '#000',
          foreground: '#fff',
        },
      },
    };

    expect(reducer({}, action).theme).toEqual(action.payload.theme);
  });

  it('Should update "isSidebarOpen" value when action type is APP/TOGGLE_SIDEBAR', () => {
    const action = {
      type: 'APP/TOGGLE_SIDEBAR',
      payload: true,
    };

    expect(reducer({}, action).isSidebarOpen).toBeTruthy();
  });
});
