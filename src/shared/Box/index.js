import React from 'react';
import classnames from 'classnames';
import styles from './index.less';

export default props => (
  <div
    className={classnames(styles.box, props.className)}
    styles={props.styles}
  >
    {props.children}
  </div>
);
