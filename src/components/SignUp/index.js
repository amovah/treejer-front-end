import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import SignLayout from 'Root/shared/SignLayout';
import Input from 'Root/shared/Input';
import Button from 'Root/shared/Button';
import styles from './index.less';

export default class extends Component {
  state = {
    step: 1,
    email: '',
    password: '',
    firstname: '',
    lastname: '',
    username: '',
  };

  onSignUp = () => {
    console.log(this.state);
  }

  goToStepTwo = () => {
    this.setState({
      step: 2,
    });
  }

  updateState = stateName => (e) => {
    this.setState({
      [stateName]: e.target.value,
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
        key="email"
        onChange={this.updateState('email')}
      />
      <Input
        placeholder="Password"
        type="password"
        style={{
          width: '100%',
          marginBottom: 30,
        }}
        key="password"
        onChange={this.updateState('password')}
      />
      <Button
        onClick={this.goToStepTwo}
        style={{
          marginBottom: 50,
          marginTop: 20,
          minWidth: 192,
        }}
      >
        Next
      </Button>
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
          key="firstname"
          onChange={this.updateState('firstname')}
        />
        <Input
          placeholder="Last Name"
          type="text"
          style={{
            width: 'calc(50% - 10px)',
            marginBottom: 30,
          }}
          key="lastname"
          onChange={this.updateState('lastname')}
        />
      </div>
      <Input
        placeholder="Username"
        type="text"
        style={{
          width: '100%',
          marginBottom: 30,
        }}
        key="username"
        onChange={this.updateState('username')}
      />
      <Button
        onClick={this.onSignUp}
        style={{
          marginBottom: 50,
          marginTop: 20,
          minWidth: 192,
        }}
      >
        Sign Up
      </Button>
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
