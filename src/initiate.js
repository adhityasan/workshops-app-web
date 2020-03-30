import feathers from '@feathersjs/client';
import io from 'socket.io-client';

import { API_URL } from 'config';
import localStorage from 'helpers/localStorage';
import { cError, cLog } from 'helpers/console';

import * as serviceWorker from './serviceWorker';

// register service worker on production
export const initialSW = () => {
  if (process.env.NODE_ENV === 'production') serviceWorker.register();
};

// initial or update localStorage data
export const initiateLS = () => {
  const { initiated, notification } = localStorage;
  const init = () => {
    // clear localStorage if no initiated key in localStorage
    window.localStorage.clear();
    // mark as initiated
    initiated.initItem();
    // init default notification key
    notification.initItem();
  };
  // check if current time is pass the REACT_APP_RESET_LS for force reset all Clients By Application Update
  const resetLSDate = new Date(process.env.REACT_APP_RESET_LS);
  if (!initiated.getItem() || new Date().getTime() < resetLSDate) {
    init();
    return;
  }
  // update localStorage.initiated.last_visit property
  initiated.setObjectProperty('last_visit', new Date().getTime());
};

export const initiateFeathers = () => {
  // Socket.io is exposed as the `io` global.
  const socket = io(API_URL, {
    extraHeaders: { Authorization: `Bearer ${window.localStorage['kao-project.kao-fe.token']}` },
  });
  // @feathersjs/client is exposed as the `feathers` global.
  window.app = feathers();
  window.app.configure(feathers.socketio(socket));
  window.app.configure(feathers.authentication());

  window.app.io.emit('create', 'authentication', {
    strategy: 'jwt',
    accessToken: window.localStorage['kao-project.kao-fe.token'],
  }, (error, newAuthResult) => {
    if (error) cError(error);
    cLog(newAuthResult, 'new authentication results');
  });
  // listening to all notifications created from server
  // window.app.io.on('notifications created', message => console.log(`NEW NOTIFICATIONS: ${JSON.stringify(message)}`));
};

export default function () {
  initialSW();
  initiateLS();
  initiateFeathers();
}
