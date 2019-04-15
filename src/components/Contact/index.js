import React, { Component } from 'react';
import Layout from 'Root/shared/Layout';
import Header from 'Root/shared/Header';
import Socials from 'Root/shared/Socials';
import Input from 'Root/shared/Input';
import TopPadding from 'Root/shared/Header/TopPadding';
import { cdn } from 'Root/config';
import styles from './index.less';

export default class extends Component {
  state = {
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    message: '',
  }

  updateState = stateName => (e) => {
    this.setState({
      [stateName]: e.target.value,
    });
  }

  render() {
    return (
      <Layout>
        <Header />
        <TopPadding />

        <Socials />

        <div className={styles.container}>
          <div className="form">
            <div className="row">
              <Input
                placeholder="First Name"
                onChange={this.updateState('firstName')}
                style={{
                  width: 225,
                }}
              />
              <Input
                placeholder="Last Name"
                onChange={this.updateState('lastName')}
                style={{
                  width: 225,
                }}
              />
            </div>
            <div className="row">
              <Input
                placeholder="Username"
                onChange={this.updateState('username')}
                style={{
                  width: '100%',
                }}
              />
            </div>
            <div className="row">
              <Input
                placeholder="Email"
                onChange={this.updateState('email')}
                style={{
                  width: '100%',
                }}
              />
            </div>
            <div className="row">
              <textarea
                placeholder="Message"
                onChange={this.updateState('message')}
                className={styles.textarea}
                rows="10"
                style={{
                  width: '100%',
                }}
              />
            </div>
            <button
              type="button"
              className="button"
            >
              Submit
            </button>
          </div>
          <div className="ill">
            <img
              src={`${cdn}/contact.png`}
              alt="contact"
            />
          </div>
        </div>
      </Layout>
    );
  }
}
