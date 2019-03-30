import React from 'react';
import linkedin from './linkedin.png';
import instagram from './instagram.png';
import twitter from './twitter.png';
import medium from './medium.png';
import facebook from './facebook.png';
import telegram from './telegram.png';
import styles from './index.less';

export default () => (
  <div className={styles.socials}>
    <img
      src={linkedin}
      alt="linkedin"
    />
    <img
      src={instagram}
      alt="instagram"
    />
    <img
      src={facebook}
      alt="facebook"
    />
    <img
      src={medium}
      alt="medium"
    />
    <img
      src={twitter}
      alt="twitter"
    />
    <img
      src={telegram}
      alt="telegram"
    />
  </div>
);
