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
  prefix: 'ORGANIZERS',
  namespace: '/',
};

const data = handleActions({
  // UPDATES
  [acttype.DATA_REQUEST]: state => ({
    ...state,
    status: status.loading,
  }),
  [acttype.DATA_SUCCESS]: (state, { payload }) => ({
    ...state,
    status: status.success,
    payload,
  }),
  [acttype.DATA_FAILURE]: (state, { error }) => ({
    ...state,
    status: status.fail,
    error: error || 'Something Went Wrong',
  }),
  [acttype.DATA_RESET]: () => defaultState,
}, defaultState, options);

const detail = handleActions({
  // UPDATES
  [acttype.DETAIL_REQUEST]: state => ({
    ...state,
    status: status.loading,
  }),
  [acttype.DETAIL_SUCCESS]: (state, { payload }) => ({
    ...state,
    status: status.success,
    payload,
  }),
  [acttype.DETAIL_FAILURE]: (state, { error }) => ({
    ...state,
    status: status.fail,
    error: error || 'Something Went Wrong',
  }),
  [acttype.DETAIL_RESET]: () => defaultState,
}, defaultState, options);

const create = handleActions({
  // UPDATES
  [acttype.CREATE_REQUEST]: state => ({
    ...state,
    status: status.loading,
  }),
  [acttype.CREATE_SUCCESS]: (state, { payload }) => ({
    ...state,
    status: status.success,
    payload,
  }),
  [acttype.CREATE_FAILURE]: (state, { error }) => ({
    ...state,
    status: status.fail,
    error: error || 'Something Went Wrong',
  }),
  [acttype.CREATE_RESET]: () => defaultState,
}, defaultState, options);

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
  data,
  detail,
  create,
  update,
});

export default profiles;
