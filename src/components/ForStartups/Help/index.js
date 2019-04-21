import React from 'react';
import { cdn } from 'Root/config';
import styles from './index.less';

export default () => (
  <div className={styles.container}>
    <p className="title">
      We help you in
    </p>
    <div className="helps">
      <div className="box">
        <img
          src={`${cdn}/forstartups/green.png`}
          alt="green"
        />
        <p className="title">
          Green Marketing
        </p>
        <p className="desc">
          Boost your sales and customer engagement in a changing world
        </p>
        <span className="knowMore">
          KNOW MORE
        </span>
      </div>

      <div className="padder" />
      <div className="divider" />
      <div className="padder" />

      <div className="box">
        <img
          src={`${cdn}/forstartups/hr.png`}
          alt="green"
        />
        <p className="title">
          HR Rewarding
        </p>
        <p className="desc">
          Offer green employee reward programs or corporate gifts
        </p>
        <span className="knowMore">
          KNOW MORE
        </span>
      </div>

      <div className="padder" />
      <div className="divider" />
      <div className="padder" />

      <div className="box">
        <img
          src={`${cdn}/forstartups/social.png`}
          alt="green"
        />
        <p className="title">
          Social Impact
        </p>
        <p className="desc">
          Engage your customers, talents and investors by being more sustainable
        </p>
        <span className="knowMore">
          KNOW MORE
        </span>
      </div>
    </div>
  </div>
);
