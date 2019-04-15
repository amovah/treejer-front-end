import React from 'react';
import { Link } from 'react-router-dom';
import Layout from 'Root/shared/Layout';
import Header from 'Root/shared/Header';
import { cdn } from 'Root/config';
import styles from './index.less';

export default () => (
  <Layout>
    <Header less />
    <div className={styles.container}>
      <img
        src={`${cdn}/email.png`}
        alt="mail"
      />
      <p className="title">
        Your e-mail address has been verified
      </p>
      <p className="desc">
        Thank you. Now you can continue making the Planet greener.
      </p>
      <Link
        className="button"
        to="/planet"
      >
        Let&apos;s go to the Planet
      </Link>
    </div>
  </Layout>
);
