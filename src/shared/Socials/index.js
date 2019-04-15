import React from 'react';
import { cdn } from 'Root/config';
import styles from './index.less';

export default () => (
  <div className={styles.socials}>
    <img
      src={`${cdn}/socials/linkedin-black.png`}
      alt="linkedin"
    />
    <img
      src={`${cdn}/socials/instagram-black.png`}
      alt="instagram"
    />
    <img
      src={`${cdn}/socials/facebook-black.png`}
      alt="facebook"
    />
    <img
      src={`${cdn}/socials/medium-black.png`}
      alt="medium"
    />
    <img
      src={`${cdn}/socials/twitter-black.png`}
      alt="twitter"
    />
    <img
      src={`${cdn}/socials/telegram-black.png`}
      alt="telegram"
    />
  </div>
);
