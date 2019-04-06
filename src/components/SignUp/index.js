import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import SignLayout from 'Root/components/SignLayout';
import Input from 'Root/components/Input';
import styles from './index.less';

export default class extends Component {
  state = {
    step: 1,
  };

  onSignIn = () => {
  }

  goToStepTwo = () => {
    this.setState({
      step: 2,
    });
  }

  stepOne = () => (
    <Fragment>
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
        onClick={this.goToStepTwo}
      >
        Next
      </button>
    </Fragment>
  )

  stepTwo = () => (
    <Fragment>
      <div className="row">
        <Input
          placeholder="First Name"
          type="text"
          style={{
            width: 'calc(50% - 10px)',
            marginBottom: 30,
          }}
        />
        <Input
          placeholder="Last Name"
          type="text"
          style={{
            width: 'calc(50% - 10px)',
            marginBottom: 30,
          }}
        />
      </div>
      <Input
        placeholder="Username"
        type="text"
        style={{
          width: '100%',
          marginBottom: 30,
        }}
      />
      <button
        type="button"
        className="button"
        onClick={this.goToStepTwo}
      >
        Sign Up
      </button>
    </Fragment>
  );

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

          {this.state.step === 1 ? this.stepOne() : this.stepTwo()}

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
