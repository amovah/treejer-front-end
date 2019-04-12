import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import claimOnAction from 'Root/actions/claim/on';
import Box from 'Root/shared/Box';
import Button from 'Root/shared/Button';
import styles from './index.less';
import TreeBox from '../TreeBox';

class VouchView extends PureComponent {
  vouchView = () => (
    <Box className={styles.vouchBox}>
      <div className="left">
        Illustrator
      </div>
      <div className="right">
        <p className="have">
          Have a voucher?
        </p>
        <p className="claim">
          Claim Your Tree!
        </p>
        <input
          placeholder="Voucher Code"
        />
        <Button
          style={{
            width: '100%',
          }}
          onClick={claimOnAction}
        >
          SUBMIT
        </Button>
      </div>
    </Box>
  )

  collectView = () => (
    <Box className={styles.collectBox}>
      <div className="left">
        <p className="title">
          Congratulations!!
        </p>
        <p className="desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <Button
          style={{
            minWidth: 335,
            height: 80,
          }}
        >
          COLLECT
        </Button>
      </div>
      <div className="divider" />
      <div className="right">
        <TreeBox withoutButton />
        <TreeBox withoutButton />
        <TreeBox withoutButton />
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
