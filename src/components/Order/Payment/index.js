import React, { Component, Fragment } from 'react';
import classnames from 'classnames';
import store from 'Root/store';
import setMethodOrder from 'Root/actions/order/setMethod';
import Button from 'Root/shared/Button';
import submitOrder from 'Root/actions/order/submit';
import CustomizedInput from './CustomizedInput';
import styles from './index.less';
import etherWhite from './ether-white.png';
import etherBlack from './ether-black.png';
import visaWhite from './visa-white.png';
import visaBlack from './visa-black.png';

class Payment extends Component {
  state = {
    orderId: null,
    paymentMethod: 'fiat',
  }

  priceTotal = 0;

  componentDidMount() {
    this.priceTotal = store.getState()
      .order.trees.map(i => i.qty * i.price).reduce((a, b) => a + b, 0);
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

    if (!res) {
      return;
    }

    this.setState({
      orderId: res.id,
    });
  }

  logView = () => {
    if (!this.state.orderId) {
      return (
        <Button
          onClick={this.onSubmit}
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
          <p readOnly className="tempText">
            <b>Account Number</b>: 0000045558334545<br />
            <b>NIB</b>: 0023 0000 45558334545 94<br />
            <b>IBAN</b>: PT50 0023 0000 4555 8334 5459 4<br />
            <b>SWIFT</b>: ACTVPTPL
          </p>
          {/* <CustomizedInput
            type="text"
            readOnly
            value="https://treejer.paymentgateway.com"
            style={{
              textAlign: 'center',
            }}
          /> */}
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
          value="0x0e6E90dD9Cb928f34c1E6E5d0E2724890D273D88"
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
            €{this.priceTotal}
          </p>
          <div className="breaker" />
        </div>
      </div>
    );
  }
}

export default Payment;
