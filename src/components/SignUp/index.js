import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SignLayout from 'Root/components/SignLayout';
import Input from 'Root/components/Input';
import styles from './index.less';

export default class extends Component {
  onSignIn = () => {
  }

  render() {
    return (
      <SignLayout>
        <div className={styles.container}>
          <p className="title">
            Sign Up to Treejer
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
            onClick={this.onSignUp}
          >
            Next
          </button>

          <div className="notMember">
            <span>
              Already have an account?
            </span>
            <Link
              to="/sign-in"
              className="goTo"
            >
              Sign In
            </Link>
          </div>
        </div>
      </SignLayout>
    );
  }
}
