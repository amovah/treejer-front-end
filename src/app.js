import React from 'react';
import { render } from 'react-dom';
import Treejer from './Treejer';

render(
  <Treejer />,
  global.document.getElementById('root'),
);

if (module.hot) {
  module.hot.accept();

  module.hot.addStatusHandler((status) => {
    if (status === 'prepare') {
      console.clear();
    }
  });
}
