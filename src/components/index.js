import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Earth from './Earth';

export default () => (
  <Switch>
    <Route path="/earth-day-2019" exact component={Earth} />
    <Route>
      <Redirect to="/earth-day-2019" />
    </Route>
  </Switch>
);
