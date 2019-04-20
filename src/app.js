import 'babel-polyfill';
import './web.config';
import React from 'react';
import { render } from 'react-dom';
import relogin from 'Root/actions/user/relogin';
import sendNotification from 'Root/actions/notifications/send';
import Treejer from './Treejer';

(async () => {
  await relogin();

  if (global.localStorage.lastNotified) {
    const time = parseInt(global.localStorage.lastNotified, 10);
    if (Date.now() - time >= 1000 * 60 * 60 * 6) {
      sendNotification({
        type: 'warning',
        text: 'My Apologies',
      }, false);
      global.localStorage.lastNotified = Date.now().toString();
    }
  } else {
    global.localStorage.lastNotified = Date.now().toString();
    sendNotification({
      type: 'warning',
      text: 'My Apologies',
    }, false);
  }

  render(
    <Treejer />,
    global.document.getElementById('root'),
  );
})();

if (module.hot) {
  module.hot.accept();

  module.hot.addStatusHandler((status) => {
    if (status === 'prepare') {
      console.clear();
    }
  });
}
