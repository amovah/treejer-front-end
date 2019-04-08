import React from 'react';
import styles from './index.less';

export default props => (
  <button
    type="button"
    {...props}
    className={styles.button}
  >
    {props.children}
  </button>
);
