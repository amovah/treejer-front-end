import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import SignLayout from 'Root/components/SignLayout';
import Input from 'Root/components/Input';
import warningSign from './warningSign.png';
import styles from './index.less';

export default class extends Component {
  state = {
    showWarning: false,
  }

  onSignIn = () => {
    this.setState({
      showWarning: true,
    });
  }

  render() {
    return (
      <SignLayout>
        <div className={classnames(styles.warning, this.state.showWarning && styles.active)}>
          <img
            src={warningSign}
            alt="warning"
          />
          &nbsp;
          <span className="title">
            WARNING.
          </span>
          &nbsp;
          <span>
            Username or Password is incorrect.
          </span>
        </div>
        <div className={styles.container}>
          <p className="title">
            Sign In to Treejer
          </p>

          <p className="details">
            Please enter your details below
          </p>

          <Input
            placeholder="Email Address"
            style={{
              width: '100%',
              marginBottom: 30,
            }}
          />
          <Input
            placeholder="Password"
            type="password"
            style={{
              width: '100%',
              marginBottom: 30,
            }}
          />
          <button
            type="button"
            className="button"
            onClick={this.onSignIn}
          >
            Next
          </button>

          <div className="notMember">
            <span>
              Not a member?
            </span>
            <Link
              to="/sign-up"
              className="goTo"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </SignLayout>
    );
  }
}
