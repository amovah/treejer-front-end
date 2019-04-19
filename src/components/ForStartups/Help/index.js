import React from 'react';
import styles from './index.less';

export default () => (
  <div className={styles.container}>
    <p className="title">
      We help you in
    </p>
    <div className="helps">
      <div className="box">
        <div className="icon">
          ICON
        </div>
        <p className="title">
          Green Marketing
        </p>
        <p className="desc">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr
        </p>
        <span className="knowMore">
          KNOW MORE
        </span>
      </div>

      <div className="padder" />
      <div className="divider" />
      <div className="padder" />

      <div className="box">
        <div className="icon">
          ICON
        </div>
        <p className="title">
          HR Rewarding
        </p>
        <p className="desc">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr
        </p>
        <span className="knowMore">
          KNOW MORE
        </span>
      </div>

      <div className="padder" />
      <div className="divider" />
      <div className="padder" />

      <div className="box">
        <div className="icon">
          ICON
        </div>
        <p className="title">
          Social Impact
        </p>
        <p className="desc">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr
        </p>
        <span className="knowMore">
          KNOW MORE
        </span>
      </div>
    </div>
  </div>
);
