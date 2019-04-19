import React from 'react';
import Header from 'Root/shared/Header';
import TopPadding from 'Root/shared/Header/TopPadding';
import Footer from 'Root/shared/Footer';
import Layout from 'Root/shared/Layout';

export default () => (
  <Layout>
    <Header />
    <TopPadding gap={150} />
    <Footer />
  </Layout>
);
