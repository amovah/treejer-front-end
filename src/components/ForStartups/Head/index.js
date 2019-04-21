import React from 'react';
import { cdn } from 'Root/config';
import styles from './index.less';

export default () => (
  <div className={styles.container}>
    <img
      src={`${cdn}/forstartups/head.png`}
      alt="rocket"
    />
    <p className="title">
      Make A Greener Business, Make A Better Business
    </p>
    <p className="desc">
      Treejer has a strong mission to empowering socially and environmentally concerned businesses.
      Having one of the most inclusive, transparent and efficient sustainability programs through
      tree plantations, we are determined to bring value to your brand, products and services.
      Moreover, our community of environmentally concerned users are always looking for responsible
      businesses to support if they socially aligned vision and mission.
    </p>
  </div>
);
