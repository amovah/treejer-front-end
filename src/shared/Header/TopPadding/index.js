import React from 'react';
import styles from './index.less';

export default (props) => {
  if (props.less) {
    return <div className={styles.less} />;
  }

  return (
    <div
      className={styles.topPadding}
      style={{
        paddingTop: props.gap ? props.gap : '',
      }}
    />
  );
};
