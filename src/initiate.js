import feathers from '@feathersjs/client';
import io from 'socket.io-client';
import { API_URL } from 'config';
import localStorage from 'helpers/localStorage';
import getLocation from 'helpers/functions/getLocation';
import { cError, cLog } from 'helpers/console';

import * as serviceWorker from './serviceWorker';

// register service worker on production
export const initialSW = () => {
  if (process.env.NODE_ENV === 'production') serviceWorker.register();
};

// initial or update localStorage data
export const initiateLS = () => {
  const { initiated } = localStorage;
  // ask current user location from the browser
  getLocation(position => {
    if (position) {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      localStorage.geolocation.setItem({ lat, lng });
    }
  }, error => {
    localStorage.geolocation.removeItem();
    cLog(error.message);
  });
  const init = () => {
    // clear localStorage if no initiated key in localStorage
    window.localStorage.clear();
    // mark as initiated
    initiated.initItem();
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
    extraHeaders: { Authorization: `Bearer ${localStorage.token.getItem()}` },
  });
  // @feathersjs/client is exposed as the `feathers` global.
  window.feathers = feathers();
  window.feathers.configure(feathers.socketio(socket));
  window.feathers.configure(feathers.authentication());

  window.feathers.io.emit('create', 'authentication', {
    strategy: 'jwt',
    accessToken: localStorage.token.getItem(),
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
