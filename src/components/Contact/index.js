import React, { Component } from 'react';
import Layout from 'Root/components/Layout';
import Header from 'Root/components/Header';
import Socials from 'Root/components/Socials';
import styles from './index.less';

export default class extends Component {
  state = {
    first: '',
  }

  render() {
    return (
      <Layout>
        <Header />

        <Socials />
      </Layout>
    );
  }
}
