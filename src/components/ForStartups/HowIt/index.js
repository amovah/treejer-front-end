import React from 'react';
import styles from './index.less';

export default () => (
  <div className={styles.container}>
    <p className="title">
      How it works
    </p>
    <div className="content">
      <div className="bar">
        <div className="head" />
        <div className="act" />
        <div className="tail" />
      </div>

      <div style={{ height: 100 }} />

      <div className="section">
        <div className="pad" />
        <div className="ball" />
        <div className="text">
          <p className="title">
            Buy Voucher for User
          </p>
          <p className="desc">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
            sed diam nonumy eirmod tempor invidunt ut labore et
            dolore magna aliquyam erat, sed diam voluptua. At vero
            eos et accusam et justo duo dolores et ea rebum.
          </p>
        </div>
      </div>

      <div style={{ height: 50 }} />

      <div className="section">
        <div className="text left">
          <p className="title">
            Transfer Voucher to User
          </p>
          <p className="desc">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
            sed diam nonumy eirmod tempor invidunt ut labore et
            dolore magna aliquyam erat, sed diam voluptua. At vero
            eos et accusam et justo duo dolores et ea rebum.
          </p>
        </div>
        <div className="ball" />
        <div className="pad" />
      </div>

      <div style={{ height: 50 }} />

      <div className="section">
        <div className="pad" />
        <div className="ball" />
        <div className="text">
          <p className="title">
            User Submits Voucher
          </p>
          <p className="desc">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
            sed diam nonumy eirmod tempor invidunt ut labore et
            dolore magna aliquyam erat, sed diam voluptua. At vero
            eos et accusam et justo duo dolores et ea rebum.
          </p>
        </div>
      </div>

      <div style={{ height: 150 }} />

    </div>
  </div>
);
