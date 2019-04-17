import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import history from 'Root/history';
import store from 'Root/store';
import Components from 'Root/components';
import Modal from 'Root/shared/Modal';
import Spinner from 'Root/shared/Spinner';

import './styles/index.less';

export default () => (
  <Provider store={store}>
    <Spinner />
    <Router history={history}>
      <Components />
    </Router>
    <Modal />
  </Provider>
);
