import React from 'react';
import { Link } from 'react-router-dom';
import { cdn } from 'Root/config';
import linkedin from 'Root/assets/linkedin-black.png';
import instagram from 'Root/assets/instagram-black.png';
import twitter from 'Root/assets/twitter-black.png';
import medium from 'Root/assets/medium-black.png';
import facebook from 'Root/assets/facebook-black.png';
import telegram from 'Root/assets/telegram-black.png';
import styles from './index.less';

export default props => (
  <div className={styles.container}>
    <div className={styles.content}>
      <div className="leftSide">
        <img
          src={`${cdn}/logo.png`}
          alt="logo"
          className="logo"
        />
        <p className="description">
          Treejer is a Blockchain startup offering financial and non-financial incentives to
          individuals, businesses and governments to plant and preserve trees.
        </p>
        <Link
          to="/know-more"
          className="knowMore"
        >
          know more
        </Link>
        <div className="socials">
          <div>
            <img
              src={instagram}
              alt="instagram"
            />
            <img
              src={twitter}
              alt="twitter"
            />
            <img
              src={linkedin}
              alt="linkedin"
            />
          </div>
          <div>
            <img
              src={facebook}
              alt="facebook"
            />
            <img
              src={medium}
              alt="medium"
            />
            <img
              src={telegram}
              alt="telegram"
            />
          </div>
        </div>
      </div>
      <div className="rightSide">
        {props.children}
        <Link
          to="/"
          className="return"
        >
          ―   Return to Home Page
        </Link>
      </div>
    </div>
  </div>
);
