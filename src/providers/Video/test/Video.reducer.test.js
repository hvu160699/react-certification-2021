import reducer from '../Video.reducer';

describe('VideoReducer test suit', () => {
  it('Should return initial state as empty object', () => {
    expect(reducer(undefined, {})).toEqual({});
  });

  it('Should update "q" value when action type is VIDEO/SET_KEYWORD', () => {
    const action = {
      type: 'VIDEO/SET_KEYWORD',
      payload: 'Jelly',
    };

    expect(reducer({}, action).q).toEqual(action.payload);
  });

  it('Should update "isLoading" to true when action type is VIDEO/FETCH_PROCESSING', () => {
    const action = {
      type: 'VIDEO/FETCH_PROCESSING',
    };

    expect(reducer({}, action).isLoading).toBeTruthy();
  });

  it('Should update "video" or "videos" value or both when action type is VIDEO/FETCH_DETAIL_SUCCESS', () => {
    const action = {
      type: 'VIDEO/FETCH_DETAIL_SUCCESS',
      payload: { video: { title: 'New video' }, videos: [1, 2, 3] },
    };

    expect(reducer({}, action).video).toEqual(action.payload.video);
    expect(reducer({}, action).videos).toEqual(action.payload.videos);
    expect(reducer({}, action).isLoading).toBeFalsy();
    expect(reducer({}, action).isError).toBeFalsy();
  });

  it('Should update "videos" value when action type is VIDEO/FETCH_LIST_SUCCESS', () => {
    const action = {
      type: 'VIDEO/FETCH_LIST_SUCCESS',
      payload: [1, 2, 3],
    };

    expect(reducer({}, action).videos).toEqual(action.payload);
    expect(reducer({}, action).isLoading).toBeFalsy();
    expect(reducer({}, action).isError).toBeFalsy();
  });

  it('Should update "isError" to true when action type is VIDEO/FETCH_FAILURE', () => {
    const action = {
      type: 'VIDEO/FETCH_FAILURE',
    };

    expect(reducer({}, action).isLoading).toBeFalsy();
    expect(reducer({}, action).isError).toBeTruthy();
  });
});
