import React from 'react';
import styles from './index.less';

export default props => (
  <input
    className={styles.input}
    placeholder={props.placeholder}
    onChange={props.onChange}
    style={props.style}
  />
);
