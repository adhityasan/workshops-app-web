import { handleActions } from 'redux-actions';

import localStorage from 'helpers/localStorage';
import * as acttype from 'constant/action';

const existToken = localStorage.token.getItem();

const defaultState = {
  loading: !!existToken,
  authenticated: false,
  payload: null,
  error: null,
};

const options = {
  prefix: 'AUTH',
  namespace: '/',
};

const auth = handleActions({
  [acttype.REQUEST]: state => ({
    ...state,
    loading: true,
    authenticated: false,
  }),
  [acttype.SUCCESS]: (state, { payload }) => {
    localStorage.token = payload?.accessToken;
    return ({
      ...state,
      loading: false,
      authenticated: true,
      payload,
    });
  },
  [acttype.FAILURE]: (state, { error }) => ({
    ...state,
    loading: false,
    authenticated: false,
    error: error || 'Not Authenticated',
  }),
  [acttype.SIGNOUT]: () => ({
    loading: false,
    authenticated: false,
    payload: null,
    error: null,
  }),
}, defaultState, options);

export default auth;
