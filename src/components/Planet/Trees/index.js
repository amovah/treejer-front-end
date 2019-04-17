import React from 'react';
import { connect } from 'react-redux';
import styles from './index.less';
import TreeBox from '../TreeBox';

const Trees = () => (
  <div className={styles.addToTree}>
    <p className="title">
      Add A Tree to Your Forest
    </p>
    <div className="boxes">
      <TreeBox />
      <TreeBox />
      <TreeBox />
      <TreeBox />
    </div>
  </div>
);

export default connect(
  state => ({
    trees: state.trees,
  }),
)(Trees);
