import { handleActions } from 'redux-actions';
import * as acttype from 'constant/action';

const defaultState = {
  loading: false,
  error: null,
  payload: null,
};

const options = {
  prefix: 'ME',
  namespace: '/',
};

const me = handleActions({
  [acttype.REQUEST]: state => ({
    ...state,
    loading: true,
  }),
  [acttype.SUCCESS]: (state, { payload }) => ({
    ...state,
    loading: false,
    payload,
  }),
  [acttype.FAILURE]: (state, { error }) => ({
    ...state,
    loading: false,
    error: error || 'Something Went Wrong',
  }),
}, defaultState, options);

export default me;
