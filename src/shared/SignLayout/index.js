import React from 'react';
import { Link } from 'react-router-dom';
import { cdn } from 'Root/config';
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
              src={`${cdn}/socials/instagram-black.png`}
              alt="instagram"
            />
            <img
              src={`${cdn}/socials/twitter-black.png`}
              alt="twitter"
            />
            <img
              src={`${cdn}/socials/linkedin-black.png`}
              alt="linkedin"
            />
          </div>
          <div>
            <img
              src={`${cdn}/socials/facebook-black.png`}
              alt="facebook"
            />
            <img
              src={`${cdn}/socials/medium-black.png`}
              alt="medium"
            />
            <img
              src={`${cdn}/socials/telegram-black.png`}
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
