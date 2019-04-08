import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Layout from 'Root/shared/Layout';
import Header from 'Root/shared/Header';
import TopPadding from 'Root/shared/Header/TopPadding';
import logo from 'Root/assets/logo.png';
import Button from 'Root/shared/Button';
import Table from 'Root/shared/Table';
import acacia from 'Root/assets/acacia.png';
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
      <div className={styles.treeShow}>
        <Table
          heads={[
            'collected tree',
            'value',
            'qty',
            'total',
            '',
          ]}
          data={[
            [
              <div className={styles.treeRow}>
                <img
                  src={acacia}
                  alt="acacia"
                />
                <div>
                  <p className="title">
                  Acacia Tree
                  </p>
                  <p className="desc">
                  Via <span className="green">Gulf Green</span> in Oman
                  </p>
                </div>
              </div>,
              <p className={styles.treeValue}>
              $17
              </p>,
            ],
          ]}
        />
      </div>
      <div className={styles.rightNextInfo}>
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
        <p>
          By proceeding I agree to <span className="green">terms</span> and
          <span className="green"> conditions</span>.
        </p>
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
        <TopPadding top={160} />

        <Steper current={this.state.current} />

        <div className={styles.container}>
          {this.handlePage()}
        </div>

        <Link
          to="/planet"
          className={styles.return}
        >
          ―   Return to the Planet
        </Link>
      </Layout>
    );
  }
}
