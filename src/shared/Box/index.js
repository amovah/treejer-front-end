import React from 'react';
import styles from './index.less';

export default props => (
  <div className={styles.box} {...props}>
    {props.children}
  </div>
);
