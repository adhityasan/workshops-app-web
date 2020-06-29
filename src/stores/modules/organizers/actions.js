import { createActions } from 'redux-actions';
import qs from 'qs';
import config from 'config';
import axiosins from 'axios.instance';
import * as acttype from 'constant/action';
import { me as getMe } from 'stores/modules/me/actions';

export const actions = createActions(
  // DATA ACTIONS
  acttype.DATA_REQUEST,
  acttype.DATA_SUCCESS,
  acttype.DATA_FAILURE,
  acttype.DATA_RESET,
  // DETAIL ACTIONS
  acttype.DETAIL_REQUEST,
  acttype.DETAIL_SUCCESS,
  acttype.DETAIL_FAILURE,
  acttype.DETAIL_RESET,
  // CREATE ACTIONS
  acttype.CREATE_REQUEST,
  acttype.CREATE_SUCCESS,
  acttype.CREATE_FAILURE,
  acttype.CREATE_RESET,
  // UPDATE ACTIONS
  acttype.UPDATE_REQUEST,
  acttype.UPDATE_SUCCESS,
  acttype.UPDATE_FAILURE,
  acttype.UPDATE_RESET,
  {
    prefix: 'ORGANIZERS',
    namespace: '/',
  },
);

export const dataRequest = (query = {}) => dispatch => {
  dispatch(actions.dataRequest());
  const queryString = qs.stringify(query, { addQueryPrefix: true });
  axiosins.get(`${config.API.ORGANIZERS}${queryString}`)
    .then(res => {
      dispatch(actions.dataSuccess(res));
    })
    .catch(err => {
      dispatch(actions.dataFailure(err));
    });
};

export const detailRequest = id => dispatch => {
  dispatch(actions.detailRequest());
  axiosins.get(`${config.API.ORGANIZERS}/${id}`)
    .then(res => {
      dispatch(actions.detailSuccess(res));
    })
    .catch(err => {
      dispatch(actions.detailFailure(err));
    });
};

export const createRequest = data => dispatch => {
  dispatch(actions.createRequest());
  axiosins.post(config.API.ORGANIZERS, data)
    .then(res => {
      dispatch(actions.createSuccess(res));
      dispatch(getMe());
    })
    .catch(err => {
      dispatch(actions.createFailure(err));
    });
};

export const updateRequest = (id, data) => dispatch => {
  dispatch(actions.updateRequest());
  axiosins.patch(`${config.API.ORGANIZERS}/${id}`, data)
    .then(res => {
      dispatch(actions.updateSuccess(res.data));
      dispatch(getMe());
    })
    .catch(err => {
      dispatch(actions.updateFailure(err));
    });
};
