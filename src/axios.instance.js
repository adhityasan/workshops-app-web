/* eslint-disable no-param-reassign */
import axios from 'axios';
import { API_URL } from 'config';
import localStorage from 'helpers/localStorage';

export const tokenizedUrl = url => `${API_URL}/api/portal${url}?jwt=${localStorage.token}`;

const instances = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json; charset=utf-8',
  },
});

const onFulFilledRequest = conf => {
  const authToken = localStorage.token.getItem();
  if (authToken) conf.headers.Authorization = `Bearer ${authToken}`;
  return conf;
};

const onRejectedRequest = err => Promise.reject(err);

const onFulFilledResponse = res => Promise.resolve(res);

const onRejectedResponse = err => Promise.reject(err);

instances.interceptors.request.use(onFulFilledRequest, onRejectedRequest);
instances.interceptors.response.use(onFulFilledResponse, onRejectedResponse);

export default instances;
