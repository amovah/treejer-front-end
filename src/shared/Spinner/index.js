import React from 'react';
import { BarLoader } from 'react-spinners';
import { connect } from 'react-redux';

const Spinner = props => (
  <BarLoader
    css={{
      position: 'fixed !important',
      top: '0',
      zIndex: 10000000,
      width: '100% !important',
    }}
    loading={props.lazy}
    color="#67b68c"
    height={6}
  />
);

export default connect(
  state => ({
    lazy: state.lazy,
  }),
)(Spinner);
