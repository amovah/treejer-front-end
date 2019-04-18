import React from 'react';
import Layout from 'Root/shared/Layout';
import Header from 'Root/shared/Header';
import TopPadding from 'Root/shared/Header/TopPadding';
import { cdn } from 'Root/config';
import styles from './index.less';

export default () => (
  <Layout>
    <Header />
    <TopPadding gap={200} />

    <div
      className={styles.aboutPic}
    >
      <img
        src={`${cdn}/about.png`}
        alt="about"
      />
    </div>

    <p>
      a
    </p>
  </Layout>
);
