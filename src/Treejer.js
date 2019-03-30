import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Components from './components';

import './styles/index.less';

export default () => (
  <Router>
    <Components />
  </Router>
);
