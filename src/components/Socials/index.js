import React from 'react';
import linkedin from 'Root/assets/linkedin-black.png';
import instagram from 'Root/assets/instagram-black.png';
import twitter from 'Root/assets/twitter-black.png';
import medium from 'Root/assets/medium-black.png';
import facebook from 'Root/assets/facebook-black.png';
import telegram from 'Root/assets/telegram-black.png';
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
