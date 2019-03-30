import React from 'react';
import { Route } from 'react-router-dom';
import Switch404 from 'Root/shared/Switch404';
import NotFound from './NotFound';

export default () => (
  <Switch404>
    <Route path="/home">
      <p>
        Home
      </p>
    </Route>
    <Route path="/404-notfound" component={NotFound} />
  </Switch404>
);
