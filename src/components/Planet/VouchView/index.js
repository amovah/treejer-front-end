import React, { Component } from 'react';
import { connect } from 'react-redux';
import { generate } from 'shortid';
import validateClaim from 'Root/actions/claim/validate';
import claimAction from 'Root/actions/claim/claim';
import Box from 'Root/shared/Box';
import Button from 'Root/shared/Button';
import { cdn } from 'Root/config';
import styles from './index.less';
import TreeBox from '../TreeBox';

class VouchView extends Component {
  state = {
    code: '',
  }

  validate = (e) => {
    e.preventDefault();

    validateClaim(this.state.code);
  }

  vouchView = () => (
    <Box className={styles.vouchBox}>
      <img
        src={`${cdn}/claim.png`}
        alt="claim"
        className="left"
      />
      <form className="right">
        <p className="have">
          Have a voucher?
        </p>
        <p className="claim">
          Claim Your Tree!
        </p>
        <input
          placeholder="Voucher Code"
          onChange={(e) => {
            this.setState({
              code: e.target.value,
            });
          }}
        />
        <Button
          style={{
            width: '100%',
          }}
          type="submit"
          onClick={this.validate}
        >
          SUBMIT
        </Button>
      </form>
    </Box>
  )

  collectText = () => {
    if (this.props.user.logged) {
      return 'COLLECT';
    }

    return 'SIGN IN FIRST';
  }

  collectView = () => (
    <Box className={styles.collectBox}>
      <div className="left">
        <p className="title">
          Congratulations!!
        </p>
        <p className="desc">
          You have got new trees in your forest, we&apos;ll take care of  them. Now your forest is
          even bigger! :)
        </p>
        <Button
          style={{
            minWidth: 335,
            height: 80,
          }}
          onClick={claimAction}
        >
          {this.collectText()}
        </Button>
      </div>
      <div className="divider" />
      <div className="right">
        {
          this.props.claim.trees.map(i => (
            <TreeBox
              name={i.type}
              region={i.region}
              price={i.price}
              rate={i.o2RatePerDay}
              drive={i.drive}
              key={generate()}
              quantity={i.quantity}
              withoutButton
            />
          ))
        }
      </div>
    </Box>
  )

  render() {
    if (!this.props.claim.status) {
      return this.vouchView();
    }

    return this.collectView();
  }
}

export default connect(
  state => ({
    user: state.user,
    claim: state.claim,
  }),
)(VouchView);
