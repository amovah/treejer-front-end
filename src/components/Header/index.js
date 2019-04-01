import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Logo from 'Root/assets/logo.png';
import styles from './index.less';

export default props => (
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

      {
        !props.less
        && (
          <Fragment>
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
          </Fragment>
        )
      }
    </div>

    <div>
      <Link
        to="/sign-in"
        className="login"
      >
        Sign In
      </Link>
      {
        !props.less
        && (
          <Link
            to="/adopt-a-tree"
            className="adopt"
          >
            adopt a tree
          </Link>
        )
      }
    </div>
  </div>
);
