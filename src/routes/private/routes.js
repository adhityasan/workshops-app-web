import asyncComponent from 'components/hoc/async';
import * as layoutType from 'constant/layout';
import Dashboard from 'pages/dashboard';
import Signout from 'pages/signout';
import ServerError from 'pages/500';

const Profile = asyncComponent(() => import('pages/profile'));

const privateRoutes = [
  {
    exact: true,
    path: '/dashboard',
    key: 'private-dashboard',
    component: Dashboard,
    layout: layoutType.APP,
  },
  {
    exact: true,
    path: '/profile',
    key: 'private-profile',
    component: Profile,
    layout: layoutType.APP,
  },
  {
    exact: true,
    path: '/me',
    key: 'private-profile',
    component: Profile,
    layout: layoutType.APP,
  },
  {
    exact: true,
    path: '/signout',
    key: '/private-signout',
    component: Signout,
  },
  {
    exact: true,
    path: '/500',
    key: '/public-500',
    component: ServerError,
    layout: layoutType.APP,
  },
];

export default privateRoutes;
