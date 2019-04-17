import React, { Fragment } from 'react';
import Collect from './Collect';
import Price from './Price';

export default props => (
  <Fragment>
    <Collect />
    <Price goNext={props.goNext} />
  </Fragment>
);
