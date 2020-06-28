import { handleActions } from 'redux-actions';

import * as acttype from 'constant/action';
import status from 'constant/status';
import { combineReducers } from 'redux';

const defaultState = {
  status: status.idle,
  error: null,
  message: '',
  payload: null,
};

const options = {
  prefix: 'PROFILE',
  namespace: '/',
};

const update = handleActions({
  // UPDATES
  [acttype.UPDATE_REQUEST]: state => ({
    ...state,
    status: status.loading,
  }),
  [acttype.UPDATE_SUCCESS]: (state, { payload }) => ({
    ...state,
    status: status.success,
    payload,
  }),
  [acttype.UPDATE_FAILURE]: (state, { error }) => ({
    ...state,
    status: status.fail,
    error: error || 'Something Went Wrong',
  }),
  [acttype.UPDATE_RESET]: () => defaultState,
}, defaultState, options);

const profiles = combineReducers({
  update,
});

export default profiles;
