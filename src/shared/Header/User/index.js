import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import { cdn } from 'Root/config';
import Box from 'Root/shared/Box';
import logout from 'Root/actions/user/logout';
import openModal from 'Root/actions/modal/open';
import styles from './index.less';
import PaymentHistory from './PaymentHistory';

class User extends Component {
  state = {
    show: false,
  }

  openPaymentHistory = () => {
    openModal(<PaymentHistory />);
  }

  loggedView = () => (
    <div>
      <p className={styles.userName}>
        Hello {this.props.user.name}!
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
      <div className={styles.divider} />
      <div className={styles.badge}>
        <img
          src={`${cdn}/trees/badge.png`}
          alt="badge"
        />
        <span>
          5
        </span>
      </div>
    </div>
  )

  signInView = () => (
    <div>
      <Link
        to="/sign-in"
        className={styles.login}
      >
        Sign In
      </Link>
      {
        (!this.props.less && !this.props.user.logged)
        && (
          <Fragment>
            <div className={styles.divider} />
            <Link
              to="/adopt-a-tree"
              className={classnames(styles.adopt, this.props.white && 'white')}
            >
              adopt a tree
            </Link>
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
  }),
)(User);
