import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import Layout from 'Root/shared/Layout';
import Header from 'Root/shared/Header';
import TopPadding from 'Root/shared/Header/TopPadding';
import Button from 'Root/shared/Button';
import Box from 'Root/shared/Box';
import setOwner from 'Root/actions/order/setOwner';
import Steper from './Steper';
import styles from './index.less';
import CollectView from './CollectView';
import Payment from './Payment';

class Order extends Component {
  state = {
    current: 1,
    chosenOwner: 0,
  };

  handlePage = () => {
    switch (this.state.current) {
      case 1: {
        return <CollectView goNext={() => { this.setState({ current: 2 }); }} />;
      }

      case 2: {
        return this.reviewPage();
      }

      case 3: {
        return <Payment />;
      }

      default: {
        return this.collectPage();
      }
    }
  }

  changeOwner = (owner) => {
    if (owner === 0) {
      setOwner('personalForest');
    } else if (owner === 1) {
      setOwner('giftToFriend');
    } else {
      setOwner('bussiness');
    }

    this.setState({
      chosenOwner: owner,
    });
  }

  reviewPage = () => (
    <div className={styles.selectOwner}>
      <p className="title">
        I&apos;m collecting trees for
      </p>

      <div className="boxes">
        <Box
          className={classnames('box', this.state.chosenOwner === 0 && 'active')}
          onClick={() => this.changeOwner(0)}
        >
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
        </Box>

        <Box
          className={classnames('box', this.state.chosenOwner === 1 && 'active')}
          onClick={() => this.changeOwner(1)}
        >
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
        </Box>

        <Box
          className={classnames('box', this.state.chosenOwner === 2 && 'active')}
          onClick={() => this.changeOwner(2)}
        >
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
        </Box>
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
        <TopPadding gap={160} />

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

export default Order;
