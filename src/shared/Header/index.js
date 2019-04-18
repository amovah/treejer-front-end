import React, { Fragment } from 'react';
import { cdn } from 'Root/config';
import styles from './index.less';
import User from './User';

export default props => (
  <div className={styles.header}>
    <div>
      <span
        to="/"
        className="logo"
      >
        <img
          src={`${cdn}/logo.png`}
          alt="logo"
        />
      </span>

      {
        !props.less
        && (
          <Fragment>
            <span
              to="/for-startups"
            >
              for startups
            </span>
            <span
              to="/about"
            >
              about
            </span>
            <span
              to="/contact"
            >
              contact
            </span>
            <span
              to="/planet"
              className="unique"
            >
              become a planter
            </span>
          </Fragment>
        )
      }
    </div>

    <User {...props} />
  </div>
);
