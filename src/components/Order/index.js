import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import Layout from 'Root/shared/Layout';
import Header from 'Root/shared/Header';
import TopPadding from 'Root/shared/Header/TopPadding';
import Button from 'Root/shared/Button';
import Box from 'Root/shared/Box';
import CustomizedInput from './CustomizedInput';
import Steper from './Steper';
import styles from './index.less';
import etherWhite from './ether-white.png';
import etherBlack from './ether-black.png';
import visaWhite from './visa-white.png';
import visaBlack from './visa-black.png';
import CollectView from './CollectView';
import Price from './Price';

class Order extends Component {
  state = {
    current: 1,
    paymentMethod: 'credit',
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
        return this.creditPage();
      }

      default: {
        return this.collectPage();
      }
    }
  }

  changeOwner = (owner) => {
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

  paymentMethodView = () => {
    if (this.state.paymentMethod === 'credit') {
      return (
        <Fragment>
          <p className="pay">
            Please pay for the invoice online via the following link:
          </p>
          <CustomizedInput
            type="text"
            readOnly
            value="https://treejer.paymentgateway.com"
            style={{
              textAlign: 'center',
            }}
          />
          <p className="text">
            Your order number is:
          </p>
          <p className="orderId">
            #123456789
          </p>
          <p className="text">
            You can track your order using the above number.
          </p>
        </Fragment>
      );
    }

    return (
      <Fragment>
        <p className="pay">
          Please pay for the invoice online via the following Ethereum address:
        </p>
        <CustomizedInput
          type="text"
          readOnly
          value="0x2238C6F75DefFAd03f61537Ce40c434a7c23a7a2"
          style={{
            textAlign: 'center',
          }}
        />
        <p className="text">
          Your order number is:
        </p>
        <p className="orderId">
          #123456789
        </p>
        <p className="text">
          You can track your order using the above number.
        </p>
      </Fragment>
    );
  }

  creditPage = () => (
    <div className={styles.credit}>
      <div className="help">
        <p>
          Need Help?
        </p>
        <p>
          support@treejer.com
        </p>
      </div>
      <div className="selectCredit">
        <div className="credits">
          <div
            className={classnames('card', this.state.paymentMethod === 'credit' && 'active')}
            onClick={() => {
              this.setState({ paymentMethod: 'credit' });
            }}
          >
            {
              this.state.paymentMethod === 'credit'
                ? (
                  <img
                    src={visaWhite}
                    alt="visa"
                  />
                )
                : (
                  <img
                    src={visaBlack}
                    alt="visa"
                  />
                )
            }
            <p style={{ marginTop: 23 }}>
              Credit Card
            </p>
          </div>
          <div
            className={classnames('card', this.state.paymentMethod === 'ether' && 'active')}
            onClick={() => {
              this.setState({ paymentMethod: 'ether' });
            }}
          >
            {
              this.state.paymentMethod === 'ether'
                ? (
                  <img
                    src={etherWhite}
                    alt="ether"
                  />
                )
                : (
                  <img
                    src={etherBlack}
                    alt="ether"
                  />
                )
            }
            <p>
              Etherium
            </p>
          </div>
        </div>
        {this.paymentMethodView()}
      </div>
      <div className="total">
        <div className="breaker" />
        <p className="title">
          Cash Total
        </p>
        <p className="price">
          $<Price />
        </p>
        <div className="breaker" />
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
