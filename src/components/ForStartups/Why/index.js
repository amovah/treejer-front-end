import React from 'react';
import { cdn } from 'Root/config';
import styles from './index.less';

export default () => (
  <div className={styles.container}>
    <p className="title">
      Why Planting with Treejer?
    </p>

    <div className="boxes">
      <div className="row">
        <p className="box">
          Inclusive
        </p>
        <p className="box">
          Community Driven
        </p>
        <p className="box">
          Transparent
        </p>
      </div>
      <div className="row">
        <p className="box">
          Gamified
        </p>
        <p className="box">
          Cost Effective
        </p>
        <p className="box">
          Preservation Focused
        </p>
      </div>
    </div>

    <p className="subtitle">
      Trusted by
    </p>
    <div className="orgs">
      <img
        src={`${cdn}/org-logos/unicube.png`}
        alt="unicube"
      />
      <img
        src={`${cdn}/org-logos/flashback.png`}
        alt="flashback"
      />
      <img
        src={`${cdn}/org-logos/areatak.png`}
        alt="areatak"
      />
      <img
        src={`${cdn}/org-logos/a.png`}
        alt="acircle"
      />
      <img
        src={`${cdn}/org-logos/getboarded.png`}
        alt="getboarded"
      />
    </div>
  </div>
);
