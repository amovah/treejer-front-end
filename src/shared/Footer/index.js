import React from 'react';
import { Link } from 'react-router-dom';
import facebook from 'Root/assets/facebook.png';
import instagram from 'Root/assets/instagram.png';
import twitter from 'Root/assets/twitter.png';
import linkedin from 'Root/assets/linkedin.png';
import telegram from 'Root/assets/telegram.png';
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
        to="/know-more"
      >
        Know More
      </Link>
    </div>
    <div className="socials">
      <div>
        <img
          src={facebook}
          alt="facebook"
        />
        <img
          src={instagram}
          alt="instagram"
        />
        <img
          src={twitter}
          alt="twitter"
        />
      </div>
      <div>
        <img
          src={linkedin}
          alt="linkedin"
        />
        <img
          src={telegram}
          alt="telegram"
        />
        <img
          src={telegram}
          alt="telegram"
        />
      </div>
      <p>
        Copyright © 2019, Treejer
      </p>
    </div>
  </div>
);
