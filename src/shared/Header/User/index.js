import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import Box from 'Root/shared/Box';
import logout from 'Root/actions/user/logout';
import styles from './index.less';

class User extends Component {
  state = {
    show: false,
  }

  loggedView = () => (
    <Fragment>
      <p className={styles.userName}>
        Hello {this.props.user.name}!
      </p>
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
    </Fragment>
  )

  signInView = () => (
    <Link
      to="/sign-in"
      className="login"
    >
      Sign In
    </Link>
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
