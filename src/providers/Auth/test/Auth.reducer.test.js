import { MOCKED_USER } from '../../../utils/constants';
import reducer, { initialState } from '../Auth.reducer';

describe('AuthReducer test suit', () => {
  it('Should return initial state as empty object', () => {
    expect(reducer(undefined, {})).toEqual({});
  });

  it('Should update "isAuthenticated" & "user" value when action type is AUTH/LOG_IN', () => {
    const action = {
      type: 'AUTH/LOG_IN',
      payload: {
        ...MOCKED_USER,
      },
    };

    expect(reducer({}, action).user).toEqual(MOCKED_USER);
    expect(reducer({}, action).isAuthenticated).toBeTruthy();
  });

  it('Should return initial state when action type is AUTH/LOG_OUT', () => {
    const action = {
      type: 'AUTH/LOG_OUT',
    };

    expect(reducer({}, action)).toEqual(initialState);
  });

  it('Should push new value to "favorites" when action type is AUTH/ADD_TO_FAVORITES', () => {
    const action = {
      type: 'AUTH/ADD_TO_FAVORITES',
      payload: 2,
    };

    expect(reducer({ favorites: [1] }, action).favorites).toEqual([1, 2]);
  });

  it('Should remove value from "favorites" when action type is AUTH/REMOVE_FROM_FAVORITES', () => {
    const action = {
      type: 'AUTH/REMOVE_FROM_FAVORITES',
      payload: 1,
    };

    const state = {
      favorites: [{ id: { videoId: 1 } }],
    };

    expect(reducer(state, action).favorites).toEqual([]);
  });
});
