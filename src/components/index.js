import React from 'react';
import { Route } from 'react-router-dom';
import Switch404 from 'Root/shared/Switch404';
import Home from './Home';
import NotFound from './NotFound';
import About from './About';
import Contact from './Contact';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Confirm from './Confirm';
import Order from './Order';
import Planet from './Planet';

export default () => (
  <Switch404>
    <Route path="/" exact component={Home} />
    <Route path="/about" exact component={About} />
    <Route path="/contact" exact component={Contact} />
    <Route path="/sign-in" component={SignIn} />
    <Route path="/sign-up" component={SignUp} />
    <Route path="/confirm/:code" exact component={Confirm} />
    <Route path="/order" exact component={Order} />
    <Route path="/planet" exact component={Planet} />
    <Route path="/404-notfound" component={NotFound} />
  </Switch404>
);
