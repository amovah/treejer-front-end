import React from 'react';
import { BarLoader } from 'react-spinners';
import { connect } from 'react-redux';

const Spinner = props => (
  <BarLoader
    loading={props.lazy}
    color="#67b68c"
    width="100%"
    height={6}
  />
);

export default connect(
  state => ({
    lazy: state.lazy,
  }),
)(Spinner);
