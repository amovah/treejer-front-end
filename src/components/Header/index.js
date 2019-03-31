import React from 'react';
import { Link } from 'react-router-dom';
import Logo from 'Root/assets/logo.png';
import styles from './index.less';

export default () => (
  <div className={styles.header}>
    <div>
      <Link
        to="/"
        className="logo"
      >
        <img
          src={Logo}
          alt="logo"
        />
      </Link>

      <Link
        to="/for-startups"
      >
        for startups
      </Link>
      <Link
        to="/about"
      >
        about
      </Link>
      <Link
        to="/contact"
      >
        contact
      </Link>
      <Link
        to="/become-a-planter"
        className="unique"
      >
        become a planter
      </Link>
    </div>

    <div>
      <Link
        to="/sign-in"
        className="login"
      >
        Sign In
      </Link>
      <Link
        to="/adopt-a-tree"
        className="adopt"
      >
        adopt a tree
      </Link>
    </div>
  </div>
);