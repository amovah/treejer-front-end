import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { cdn } from 'Root/config';
import styles from './index.less';
import User from './User';

export default props => (
  <div className={styles.header}>
    <div>
      <Link
        to="/"
        className="logo"
      >
        <img
          src={`${cdn}/logo.png`}
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
              to="/earth-day-2019"
              className="unique"
            >
              become an earth ambassador
            </Link>
          </Fragment>
        )
      }
    </div>

    <User {...props} />
  </div>
);
