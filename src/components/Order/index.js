import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Layout from 'Root/shared/Layout';
import Header from 'Root/shared/Header';
import TopPadding from 'Root/shared/Header/TopPadding';
import logo from 'Root/assets/logo.png';
import Button from 'Root/shared/Button';
import Table from 'Root/shared/Table';
import acacia from 'Root/assets/acacia.png';
import NumberInput from 'Root/shared/NumberInput';
import Steper from './Steper';
import styles from './index.less';
import removeIcon from './remove.png';

const stepOneData = [
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
    <NumberInput min={0} />,
    <p className={styles.treeValue}>
      $170
    </p>,
    <img
      src={removeIcon}
      alt="remove"
    />,
  ],
];

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
          data={[...stepOneData, ...stepOneData, ...stepOneData, ...stepOneData, ...stepOneData]}
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
    <div className={styles.selectOwner}>
      <p className="title">
        I&apos;m collecting trees for
      </p>

      <div className="boxes">
        <div className="box">
          <p className="title">
            Myself
          </p>
          <div className="divider" />
          <p className="desc">
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
            et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        <div className="box">
          <p className="title">
            Another Person
          </p>
          <div className="divider" />
          <p className="desc">
            You will be provided with <b>one voucher</b>
            . So if you have collected 20
            maples from one planter and 40
            from another, only one voucher will
            be given to you. However, the entire
            collection will be added to forest as
            soon as the owner claims the Trees.
          </p>
        </div>

        <div className="box">
          <p className="title">
            My Customers
          </p>
          <div className="divider" />
          <p className="desc">
            You will be provided with <b>one voucher per group of trees</b>
            . So if you
            have collected 20 maples from one
            planter and 40 from another, two
            vouchers will be given to you each
            being usable 20 and 40 times
            respectively.
          </p>
        </div>
      </div>

      <div className="btn">
        <Button
          onClick={() => { this.setState({ current: 3 }); }}
        >
          Checkout
        </Button>
      </div>
    </div>
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
