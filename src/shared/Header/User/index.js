import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { cdn } from 'Root/config';
import Box from 'Root/shared/Box';
import logout from 'Root/actions/user/logout';
import openModal from 'Root/actions/modal/open';
import history from 'Root/history';
import loadReceipts from 'Root/actions/user/loadReceipts';
import styles from './index.less';
import PaymentHistory from './PaymentHistory';

class User extends Component {
  state = {
    show: false,
  }

  openPaymentHistory = async () => {
    await loadReceipts();
    openModal(<PaymentHistory />);
  }

  loggedView = () => (
    <div>
      <p
        className={styles.userName}
        onClick={() => { this.setState(prev => ({ show: !prev.show })); }}
      >
        Hello {this.props.user.firstname}!
      </p>
      <div className={styles.divider} />
      <div className={styles.container}>
        <img
          src={this.props.user.avatar}
          alt="profile"
          className="avatar"
          onClick={() => { this.setState(prev => ({ show: !prev.show })); }}
        />
        <Box className={classnames('menu', this.state.show && 'active')}>
          <button
            type="button"
            onClick={() => { history.push('/planet'); }}
          >
            Profile
          </button>
          <button
            type="button"
            onClick={this.openPaymentHistory}
          >
            Payment History
          </button>
          <div className="divider" />
          <button
            type="button"
            onClick={logout}
          >
            Sign Out
          </button>
        </Box>
      </div>
      {
        (!this.props.less && this.props.basket !== 0)
        && (
          <Fragment>
            <div className={styles.divider} />
            <div
              className={styles.badge}
              onClick={() => history.push('/order')}
            >
              <img
                src={`${cdn}/trees/badge.png`}
                alt="badge"
              />
              <span>
                {this.props.basket}
              </span>
            </div>
          </Fragment>
        )
      }
    </div>
  )

  signInView = () => (
    <div>
      <span
        to="/sign-in"
        className={styles.login}
      >
        Sign In
      </span>
      {
        !this.props.less
        && (
          <Fragment>
            <div className={styles.divider} />
            <span
              to="/adopt-a-tree"
              className={classnames(styles.adopt, this.props.white && 'white')}
            >
              adopt a tree
            </span>
          </Fragment>
        )
      }
    </div>
  )

  render() {
    if (this.props.user.logged) {
      return this.loggedView();
    }

    return this.signInView();
  }
}

export default connect(
  state => ({
    user: state.user,
    basket: state.order.count,
  }),
)(User);
