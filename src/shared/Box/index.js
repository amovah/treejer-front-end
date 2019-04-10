import React from 'react';
import classnames from 'classnames';
import styles from './index.less';

export default ({ className, ...rest }) => (
  <div
    className={classnames(styles.box, className)}
    {...rest}
  >
    {rest.children}
  </div>
);
