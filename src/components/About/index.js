import React from 'react';
import Layout from 'Root/components/Layout';
import Footer from 'Root/components/Footer';
import Socials from 'Root/components/Socials';
import styles from './index.less';

export default () => (
  <Layout>
    <Socials />
    <div className={styles.illusterate}>
      Illusterate
    </div>
    <Footer />
  </Layout>
);
