import React from 'react';
import { cdn } from 'Root/config';
import Box from 'Root/shared/Box';
import styles from './index.less';

export default props => (
  <Box className={styles.box}>
    <div className="circle">
      <img
        src={`${cdn}/seed.png`}
        alt="seed"
      />
    </div>
    <div className="padding" />
    <p className="title">
      PermaSeeds
    </p>
    <p className="detail">
      780 Trees in Madagascar
    </p>
  </Box>
);
