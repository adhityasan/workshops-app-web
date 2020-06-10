import React, { useEffect, memo } from 'react';
import {
  Switch,
  useLocation,
  matchPath,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { authenticate } from 'stores/modules/auth/action';
import localStorage from 'helpers/localStorage';

import publicRoutes from './public/routes';
import PublicProvider from './public/provider';
import privateRoutes from './private/routes';
import PrivateProvider from './private/provider';

export const getRouteObject = val => {
  const routeObj = [...publicRoutes, ...privateRoutes].find(route => {
    const match = matchPath(val, route);
    if (match) return route;
    return null;
  });
  return routeObj;
};

const Routes = () => {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  const location = useLocation();

  useEffect(() => {
    // Handle oauth callbcak redirect url
    if (location.pathname === '/oauth/callback' && location.hash) {
      const accessToken = location.hash.replace('#access_token=', '');
      if (accessToken) {
        dispatch(authenticate({ strategy: 'jwt', accessToken }));
      }
    }
  }, [dispatch, location]);

  useEffect(() => {
    // Handle authentication at first time application loaded
    // by re-authenticate exist token from localStorage
    const existToken = localStorage.token.getItem();
    if (existToken) dispatch(authenticate({ strategy: 'jwt', accessToken: existToken }));
  }, [dispatch]);

  return (
    <Switch>
      {privateRoutes.map(conf => (<PrivateProvider key={conf.key} {...conf} auth={auth} />))}
      {publicRoutes.map(conf => (<PublicProvider key={conf.key} {...conf} auth={auth} />))}
    </Switch>
  );
};

export default memo(Routes);
