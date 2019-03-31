import React from 'react';
import { Route } from 'react-router-dom';
import Switch404 from 'Root/components/Switch404';
import Home from './Home';
import NotFound from './NotFound';
import About from './About';
import Contact from './Contact';

export default () => (
  <Switch404>
    <Route path="/" exact component={Home} />
    <Route path="/about" exact component={About} />
    <Route path="/contact" exact component={Contact} />
    <Route path="/404-notfound" component={NotFound} />
  </Switch404>
);
