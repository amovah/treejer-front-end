import React from 'react';
import Header from 'Root/shared/Header';
import Layout from 'Root/shared/Layout';
import Footer from 'Root/shared/Footer';
import styles from './index.less';

export default () => (
  <Layout>
    <Header />

    <div className={styles.background} />

    <Footer />
  </Layout>
);
