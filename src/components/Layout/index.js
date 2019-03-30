import React from 'react';
import { Link } from 'react-router-dom';
import Logo from 'Root/assets/logo.png';
import styles from './index.less';

export default props => (
  <div className={styles.container}>
    <div className={styles.header}>
      <div>
        <img
          className={styles.logo}
          src={Logo}
          alt="logo"
        />

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
          to="/login"
          className="login"
        >
          Login
        </Link>
        <Link
          to="/adopt-a-tree"
          className="adopt"
        >
          adopt a tree
        </Link>
      </div>
    </div>

    {props.children}
  </div>
);
