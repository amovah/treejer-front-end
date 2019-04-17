import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { cdn } from 'Root/config';
import Layout from 'Root/shared/Layout';
import Header from 'Root/shared/Header';
import TopPadding from 'Root/shared/Header/TopPadding';
import Button from 'Root/shared/Button';
import Table from 'Root/shared/Table';
import NumberInput from 'Root/shared/NumberInput';
import Box from 'Root/shared/Box';
import CustomizedInput from './CustomizedInput';
import Steper from './Steper';
import styles from './index.less';
import removeIcon from './remove.png';
import etherWhite from './ether-white.png';
import etherBlack from './ether-black.png';
import visaWhite from './visa-white.png';
import visaBlack from './visa-black.png';

const changeQty = id => (qty) => {
  console.log(id, qty);
};

const removeTree = id => () => {
  console.log('remove', id);
};

const generateData = item => [
  <div className={styles.treeRow}>
    <img
      src={`${cdn}/trees/acacia.png`}
      alt="acacia"
    />
    <div>
      <p className="title">
        {item.type} Tree
      </p>
      <p className="desc">
        Via <span className="green">{item.drive}</span> in {item.region}
      </p>
    </div>
  </div>,
  <p className={styles.treeValue}>
    ${item.price}
  </p>,
  <NumberInput min={1} defaultValue={item.qty} onChange={changeQty(item.id)} />,
  <p className={styles.treeValue}>
    ${item.price * item.qty}
  </p>,
  <img
    src={removeIcon}
    alt="remove"
    className="removeIcon"
    onClick={removeTree(item.id)}
  />,
];

class Order extends Component {
  state = {
    current: 1,
    paymentMethod: 'credit',
    chosenOwner: 0,
  };

  handlePage = () => {
    switch (this.state.current) {
      case 1: {
        return this.collectPage();
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

  collectPage = () => (
    <Fragment>
      <div className={styles.treeShow}>
        <Table
          className={styles.table}
          heads={[
            'collected tree',
            'value',
            'qty',
            'total',
            '',
          ]}
          data={this.props.order.trees.map(generateData)}
        />
      </div>
      <div className={styles.rightNextInfo}>
        <Box className="box">
          <img
            src={`${cdn}/logo.png`}
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
        </Box>
        <p>
          By proceeding I agree to <span className="green">terms</span> and
          <span className="green"> conditions</span>.
        </p>
      </div>
    </Fragment>
  )

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
          $173.00
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

export default connect(
  state => ({
    order: state.order,
  }),
)(Order);
