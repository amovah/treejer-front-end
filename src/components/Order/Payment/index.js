import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import setMethodOrder from 'Root/actions/order/setMethod';
import Button from 'Root/shared/Button';
import submitOrder from 'Root/actions/order/submit';
import CustomizedInput from './CustomizedInput';
import styles from './index.less';
import etherWhite from './ether-white.png';
import etherBlack from './ether-black.png';
import visaWhite from './visa-white.png';
import visaBlack from './visa-black.png';
import Price from './Price';

class Payment extends Component {
  state = {
    orderId: null,
    paymentMethod: 'fiat',
  }

  componentDidMount() {
    setMethodOrder('fiat');
    this.setState({
      paymentMethod: 'fiat',
    });
  }

  changeMethod = method => () => {
    this.setState({
      paymentMethod: method,
    });
    setMethodOrder(method);
  }

  onSubmit = async () => {
    const res = await submitOrder();

    console.log('here', res);

    if (res === 'uninvited') {
      console.log('kheili khari');
      return;
    }

    console.log('here', res.id);
    this.setState({
      orderId: res.id,
    });
  }

  logView = () => {
    if (!this.state.orderId) {
      return (
        <Button
          onClick={this.onSubmit}
          style={{
            marginTop: 60,
          }}
        >
          SUBMIT INVOICE
        </Button>
      );
    }

    return (
      <Fragment>
        <p className="text">
          Your order number is:
        </p>
        <p className="orderId">
          {this.state.orderId}
        </p>
        <p className="text">
          your invoice has been submited, after completing the payment process send your
          receipt
          information including your order number to<b> support@treejer.com </b>
          to complete your receiption.
        </p>
      </Fragment>
    );
  }

  paymentMethodView = () => {
    if (this.state.paymentMethod === 'fiat') {
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
          {this.logView()}
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
        {this.logView()}
      </Fragment>
    );
  }

  render() {
    return (
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
              className={classnames('card', this.state.paymentMethod === 'fiat' && 'active')}
              onClick={this.changeMethod('fiat')}
            >
              {
                this.state.paymentMethod === 'fiat'
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
              className={classnames('card', this.state.paymentMethod === 'ethereum' && 'active')}
              onClick={this.changeMethod('ethereum')}
            >
              {
                this.state.paymentMethod === 'ethereum'
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
            €<Price />
          </p>
          <div className="breaker" />
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    user: state.user,
  }),
)(Payment);
