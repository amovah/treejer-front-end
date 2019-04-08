import React, { Component, Fragment } from 'react';
import Layout from 'Root/shared/Layout';
import Header from 'Root/shared/Header';
import TopPadding from 'Root/shared/Header/TopPadding';
import logo from 'Root/assets/logo.png';
import Button from 'Root/shared/Button';
import Steper from './Steper';
import styles from './index.less';

export default class extends Component {
  state = {
    current: 1,
  };

  handlePage = () => {
    switch (this.state.current) {
      case 1: {
        return this.collectPage();
      }

      case 2: {
        return this.reviewPage();
      }

      default: {
        return this.collectPage();
      }
    }
  }

  collectPage = () => (
    <Fragment>
      <div>
        <p>
          a
        </p>
        <p>
          a
        </p>
        <p>
          a
        </p>
      </div>
      <div className="box">
        <img
          src={logo}
          alt="logo"
        />
        <p>
          Did you know that your new trees can produce the oxygen needed for
          <span className="green">&nbsp;50 people</span> per year over time?
        </p>
        <div className="divider" />
        <p className="title">
          Cash Total
        </p>
        <p className="price">
          $173.00
        </p>
        <Button
          onClick={() => {
            this.setState({
              current: 2,
            });
          }}
        >
          NEXT
        </Button>
      </div>
    </Fragment>
  )

  reviewPage = () => (
    <p>
      review
    </p>
  )

  render() {
    return (
      <Layout>
        <Header less />
        <TopPadding />

        <Steper current={this.state.current} />

        <div className={styles.container}>
          {this.handlePage()}
        </div>
      </Layout>
    );
  }
}
