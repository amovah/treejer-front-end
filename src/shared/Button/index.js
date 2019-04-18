import React from 'react';
import classnames from 'classnames';
import styles from './index.less';

export default ({ className, ...props }) => (
  <button
    type="button"
    {...props}
    className={classnames(styles.button, className)}
  >
    {props.children}
  </button>
);
