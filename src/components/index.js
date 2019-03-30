import React from 'react';
import { Route } from 'react-router-dom';
import Switch404 from 'Root/shared/Switch404';
import Home from './Home';
import NotFound from './NotFound';

export default () => (
  <Switch404>
    <Route path="/" exact component={Home} />
    <Route path="/404-notfound" component={NotFound} />
  </Switch404>
);
