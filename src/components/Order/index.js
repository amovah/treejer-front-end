import React, { Component } from 'react';
import Layout from 'Root/components/Layout';
import Header from 'Root/components/Header';
import TopPadding from 'Root/components/Header/TopPadding';
import Steper from './Steper';

export default class extends Component {
  state = {
    current: 1,
  };

  render() {
    return (
      <Layout>
        <Header less />
        <TopPadding />

        <Steper current={this.state.current} />
      </Layout>
    );
  }
}
