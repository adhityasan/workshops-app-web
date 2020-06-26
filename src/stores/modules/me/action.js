import { createActions } from 'redux-actions';

import config from 'config';
import axiosins from 'axios.instance';
import * as acttype from 'constant/action';

export const actions = createActions(
  acttype.REQUEST,
  acttype.SUCCESS,
  acttype.FAILURE, {
    prefix: 'ME',
    namespace: '/',
  },
);

export const me = () => dispatch => {
  dispatch(actions.request());
  axiosins.get(config.API.ME)
    .then(res => {
      dispatch(actions.success(res.data));
    })
    .catch(err => {
      dispatch(actions.failure(err));
    });
};
