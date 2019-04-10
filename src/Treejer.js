import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'Root/store';
import Components from 'Root/components';
import Modal from 'Root/shared/Modal';

import './styles/index.less';

export default () => (
  <Provider store={store}>
    <Router>
      <Components />
    </Router>
    <Modal />
  </Provider>
);
