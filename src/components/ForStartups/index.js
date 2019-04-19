import React from 'react';
import Header from 'Root/shared/Header';
import TopPadding from 'Root/shared/Header/TopPadding';
import Footer from 'Root/shared/Footer';
import Layout from 'Root/shared/Layout';
import styles from './index.less';
import Head from './Head';
import Help from './Help';
import Green from './Green';

export default () => (
  <Layout>
    <Header />
    <TopPadding gap={250} />
    <Head />
    <TopPadding gap={75} />
    <Help />
    <TopPadding gap={100} />
    <div className={styles.divider} />
    <TopPadding gap={100} />
    <Green />
    <TopPadding gap={128} />
    <div className={styles.divider} />
    <TopPadding gap={128} />
    <Footer />
  </Layout>
);
