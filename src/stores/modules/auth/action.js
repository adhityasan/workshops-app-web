import { createActions } from 'redux-actions';

import config from 'config';
import axiosins from 'axios.instance';
import * as acttype from 'constant/action';
import { me as getMe } from 'stores/modules/me/actions';

export const actions = createActions(
  acttype.REQUEST,
  acttype.SUCCESS,
  acttype.FAILURE,
  acttype.SIGNOUT, {
    prefix: 'AUTH',
    namespace: '/',
  },
);

export const authenticate = data => dispatch => {
  dispatch(actions.request());
  axiosins.post(config.API.SIGNIN, data)
    .then(res => {
      dispatch(actions.success(res.data));
      dispatch(getMe());
    })
    .catch(err => {
      dispatch(actions.failure(err));
    });
};

export const signout = () => dispatch => {
  dispatch(actions.signout());
};
