import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './index.less';

class User extends Component {
  state = {
    show: false,
  }

  loggedView = () => (
    <Fragment>
      <p>
        Hello {this.props.user.name}!
      </p>
      <img
        src={this.props.user.avatar}
        alt="profile"
        className={styles.avatar}
      />
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
    console.log(this.props.user)
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
