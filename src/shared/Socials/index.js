import React from 'react';
import { cdn } from 'Root/config';
import styles from './index.less';

export default () => (
  <div className={styles.socials}>
    <a href="https://www.linkedin.com/company/treejer">
      <img
        src={`${cdn}/socials/linkedin-black.png`}
        alt="linkedin"
      />
    </a>
    <a href="https://www.instagram.com/treejer">
      <img
        src={`${cdn}/socials/instagram-black.png`}
        alt="instagram"
      />
    </a>
    <a href="https://www.facebook.com/treejertalks">
      <img
        src={`${cdn}/socials/facebook-black.png`}
        alt="facebook"
      />
    </a>
    <a href="https://medium.com/@treejer">
      <img
        src={`${cdn}/socials/medium-black.png`}
        alt="medium"
      />
    </a>
    <a href="https://twitter.com/Treejertalks">
      <img
        src={`${cdn}/socials/twitter-black.png`}
        alt="twitter"
      />
    </a>
    <a href="http://t.me/treejer">
      <img
        src={`${cdn}/socials/telegram-black.png`}
        alt="telegram"
      />
    </a>
  </div>
);
