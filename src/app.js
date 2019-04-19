import 'babel-polyfill';
import './web.config';
import React from 'react';
import { render } from 'react-dom';
import relogin from 'Root/actions/user/relogin';
import Treejer from './Treejer';

(async () => {
  await relogin();

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
