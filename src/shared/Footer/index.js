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
      <Link
        to="/ambassadors"
      >
        Ambassadors
      </Link>
      <Link
        to="/careers"
      >
        Careers
      </Link>
      <Link
        to="/contact-us"
      >
        Contact Us
      </Link>
      <Link
        to="/refer-and-earn"
      >
        Refer And Eearn
      </Link>
      <Link
        to="/partners"
      >
        Partners
      </Link>
    </div>
    <div className="someLinks">
      <Link
        to="/planet-ecosystem"
      >
        Planet Ecosystem
      </Link>
      <Link
        to="/planters"
      >
        Planters
      </Link>
      <Link
        to="/preservers"
      >
        Preservers
      </Link>
      <Link
        to="/rangers"
      >
        Rangers
      </Link>
      <Link
        to="/adopters"
      >
        Adopters
      </Link>
      <Link
        to="/volunteers"
      >
        Volunteers
      </Link>
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
