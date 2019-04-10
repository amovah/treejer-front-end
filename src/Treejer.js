import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import history from 'Root/history';
import store from 'Root/store';
import Components from 'Root/components';
import Modal from 'Root/shared/Modal';

import './styles/index.less';

export default () => (
  <Provider store={store}>
    <Router history={history}>
      <Components />
    </Router>
    <Modal />
  </Provider>
);
