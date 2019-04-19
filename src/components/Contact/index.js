import React, { Component } from 'react';
import Layout from 'Root/shared/Layout';
import Header from 'Root/shared/Header';
import Socials from 'Root/shared/Socials';
import Input from 'Root/shared/Input';
import TopPadding from 'Root/shared/Header/TopPadding';
import { cdn } from 'Root/config';
import fetch from 'Root/fetch';
import styles from './index.less';

export default class extends Component {
  state = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    message: '',
  }

  updateState = stateName => (e) => {
    this.setState({
      [stateName]: e.target.value,
    });
  }

  sendMessage = async (e) => {
    e.preventDefault();

    const res = fetch('/comments', {
      method: 'POST',
      body: JSON.stringify(
        this.state,
      ),
    }, false);
    if (!res) {
      return;
    }
  }

  render() {
    return (
      <Layout>
        <Header />
        <TopPadding />

        <Socials />

        <div className={styles.container}>
          <form className="form">
            <div className="row">
              <Input
                placeholder="First Name"
                onChange={this.updateState('firstname')}
                style={{
                  width: 225,
                }}
              />
              <Input
                placeholder="Last Name"
                onChange={this.updateState('lastname')}
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
              type="submit"
              className="button"
              onClick={this.sendMessage}
            >
              Submit
            </button>
          </form>
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
