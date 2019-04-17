import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import qs from 'querystring';
import history from 'Root/history';
import SignLayout from 'Root/shared/SignLayout';
import Input from 'Root/shared/Input';
import Button from 'Root/shared/Button';
import login from 'Root/actions/user/login';
import loginReferral from 'Root/actions/user/loginReferral';
import warningSign from './warningSign.png';
import styles from './index.less';

export default class extends Component {
  state = {
    showWarning: false,
    password: '',
    email: '',
    referral: null,
  }

  componentDidMount() {
    const parsed = qs.parse(history.location.search.slice(1));

    if (parsed.referral) {
      this.setState({
        referral: parsed.referral,
      });
    }
  }

  onSignIn = async () => {
    try {
      if (this.state.referral) {
        loginReferral({
          email: this.state.email,
          password: this.state.password,
        }, this.state.referral);
      } else {
        await login({
          email: this.state.email,
          password: this.state.password,
        });
      }
    } catch (e) {
      this.setState({
        showWarning: true,
      });

      setTimeout(() => {
        this.setState({
          showWarning: false,
        });
      }, 2000);
    }
  }

  updateState = stateName => (e) => {
    this.setState({
      [stateName]: e.target.value,
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
            onChange={this.updateState('email')}
          />
          <Input
            placeholder="Password"
            type="password"
            style={{
              width: '100%',
              marginBottom: 30,
            }}
            onChange={this.updateState('password')}
          />
          <Button
            onClick={this.onSignIn}
            style={{
              marginBottom: 50,
              marginTop: 20,
              minWidth: 192,
            }}
          >
            Next
          </Button>

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
