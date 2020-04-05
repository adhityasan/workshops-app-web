import * as layoutType from 'constant/layout';
import asyncComponent from 'components/hoc/async';
import Homepage from 'pages/home';
import Notfound from 'pages/404';
import ServerError from 'pages/500';
import Loader from 'layouts/loader';

const Signin = asyncComponent(() => import('pages/signin'));
const Signup = asyncComponent(() => import('pages/signup'));

const publicRoutes = [
  {
    exact: true,
    path: '/',
    key: 'public-homepage',
    component: Homepage,
    layout: layoutType.PUBLIC,
  },
  {
    exact: true,
    restricted: true,
    path: '/signin',
    key: 'public-signin',
    component: Signin,
    layout: layoutType.PUBLIC,
  },
  {
    exact: true,
    restricted: true,
    path: '/signup',
    key: 'public-signup',
    component: Signup,
    layout: layoutType.PUBLIC,
  },
  {
    exact: true,
    restricted: true,
    path: '/oauth/callback',
    key: '/public-oauth-callback',
    component: Loader,
    layout: layoutType.BLANK,
  },
  {
    exact: true,
    path: '/500',
    key: 'public-500',
    component: ServerError,
    layout: layoutType.PUBLIC,
  },
  {
    path: '*',
    key: 'public-404',
    component: Notfound,
    layout: layoutType.PUBLIC,
  },
];

export default publicRoutes;
