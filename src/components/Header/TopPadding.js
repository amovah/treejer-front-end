import React from 'react';
import styles from './TopPadding.less';

export default (props) => {
  if (props.less) {
    return <div className={styles.less} />;
  }

  return <div className={styles.topPadding} />;
};
