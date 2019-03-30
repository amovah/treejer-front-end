import React from 'react';
import { Route } from 'react-router-dom';
import Switch404 from 'Root/components/Switch404';
import Home from './Home';
import NotFound from './NotFound';

export default () => (
  <Switch404>
    <Route path="/404-notfound" component={NotFound} />
    <Route path="/" exact component={Home} />
  </Switch404>
);
