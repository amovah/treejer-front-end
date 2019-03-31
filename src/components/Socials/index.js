import React from 'react';
import linkedin from './linkedin-black.png';
import instagram from './instagram-black.png';
import twitter from './twitter-black.png';
import medium from './medium-black.png';
import facebook from './facebook-black.png';
import telegram from './telegram-black.png';
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
