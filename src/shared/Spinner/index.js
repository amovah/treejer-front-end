import React from 'react';
import { BarLoader } from 'react-spinners';
import { connect } from 'react-redux';

const Spinner = props => (
  <BarLoader
    loading={props.lazy}
    color="#67b68c"
    width={global.window.screen.width}
    height={6}
  />
);

export default connect(
  state => ({
    lazy: state.lazy,
  }),
)(Spinner);
