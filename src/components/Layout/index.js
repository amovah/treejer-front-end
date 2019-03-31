import React from 'react';
import styles from './index.less';

export default props => (
  <div className={styles.container}>
    {props.children}
  </div>
);
