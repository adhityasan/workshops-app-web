import { createActions } from 'redux-actions';

import config from 'config';
import axiosins from 'axios.instance';
import * as acttype from 'constant/action';
import { me as getMe } from 'stores/modules/me/actions';

export const actions = createActions(
  acttype.UPDATE_REQUEST,
  acttype.UPDATE_SUCCESS,
  acttype.UPDATE_FAILURE,
  acttype.UPDATE_RESET,
  {
    prefix: 'PROFILE',
    namespace: '/',
  },
);

export const updateRequest = (id, data) => dispatch => {
  dispatch(actions.updateRequest());
  axiosins.patch(`${config.API.PROFILE}/${id}`, data)
    .then(res => {
      dispatch(actions.updateSuccess(res.data));
      dispatch(getMe());
    })
    .catch(err => {
      dispatch(actions.updateFailure(err));
    });
};
