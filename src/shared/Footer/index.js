import React from 'react';
import { Link } from 'react-router-dom';
import { cdn } from 'Root/config';
import styles from './index.less';

export default () => (
  <div className={styles.container}>
    <div className="someLinks">
      <Link
        to="/about"
      >
        About Us
      </Link>
      <span
        to="/ambassadors"
        className="disable"
      >
        Ambassadors
      </span>
      <span
        to="/careers"
        className="disable"
      >
        Careers
      </span>
      <Link
        to="/contact"
      >
        Contact Us
      </Link>
      <span
        to="/refer-and-earn"
        className="disable"
      >
        Refer And Eearn
      </span>
      <span
        to="/partners"
        className="disable"
      >
        Partners
      </span>
    </div>
    <div className="someLinks">
      <Link
        to="/planet"
      >
        Planet Ecosystem
      </Link>
      <span
        to="/planters"
        className="disable"
      >
        Planters
      </span>
      <span
        to="/preservers"
        className="disable"
      >
        Preservers
      </span>
      <span
        to="/rangers"
        className="disable"
      >
        Rangers
      </span>
      <span
        to="/adopters"
        className="disable"
      >
        Adopters
      </span>
      <span
        to="/volunteers"
        className="disable"
      >
        Volunteers
      </span>
    </div>
    <div className="footerInfo">
      <p>
        Treejer is a Blockchain startup offering financial and non-financial incentives to
        individuals, businesses and governments to plant and preserve trees.
      </p>
      <Link
        to="/about"
      >
        Know More
      </Link>
    </div>
    <div className="socials">
      <div>
        <img
          src={`${cdn}/socials/facebook.png`}
          alt="facebook"
        />
        <img
          src={`${cdn}/socials/instagram.png`}
          alt="instagram"
        />
        <img
          src={`${cdn}/socials/twitter.png`}
          alt="twitter"
        />
      </div>
      <div>
        <img
          src={`${cdn}/socials/linkedin.png`}
          alt="linkedin"
        />
        <img
          src={`${cdn}/socials/telegram.png`}
          alt="telegram"
        />
        <img
          src={`${cdn}/socials/telegram.png`}
          alt="telegram"
        />
      </div>
      <p>
        Copyright © 2019, Treejer
      </p>
    </div>
  </div>
);
