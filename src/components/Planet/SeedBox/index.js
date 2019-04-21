import React from 'react';
import Box from 'Root/shared/Box';
import styles from './index.less';

export default props => (
  <Box className={styles.box}>
    <div className="circle">
      <img
        src={props.pic}
        alt="seed"
      />
    </div>
    <div className="padding" />
    <p className="title">
      {props.title}
    </p>
    <p className="detail">
      {props.desc}
    </p>
  </Box>
);
