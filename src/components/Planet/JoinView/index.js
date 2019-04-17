import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Box from 'Root/shared/Box';
import Input from 'Root/shared/Input';
import history from 'Root/history';
import { cdn } from 'Root/config';
import fetch from 'Root/fetch';
import styles from './index.less';
import PadDivider from '../PadDivider';

class JoinView extends Component {
  state = {
    mail: '',
  }

  onChangeMail = (e) => {
    this.setState({
      mail: e.target.value,
    });
  }

  sendInvitation = async () => {
    const res = await fetch(`/invitations/sendInvitation/${this.state.mail}`, {
      method: 'POST',
    });

    console.log(res);
  }

  render() {
    if (!this.props.user.logged) {
      return (
        <Fragment>
          <Box className={styles.waitlist}>
            <div className="left">
              <p className="title">
                Join the Planet Waitlist!
              </p>
              <p className="desc">
                Planet is an Invite-Only ecosystem where likeminded people can have collectible
                trees.
                If you know someone who cares for the environment you can invite her/him to join us
                :)
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
              <button
                type="button"
                onClick={() => history.push('/sign-up')}
              >
                SIGN UP
              </button>
            </div>
            <img
              className="right"
              src={`${cdn}/waiting.png`}
              alt="waiting"
            />
          </Box>

          <PadDivider gap={250} />
        </Fragment>
      );
    }

    if (this.props.user.status === 'WaitList') {
      return <PadDivider gap={150} />;
    }

    return (
      <Fragment>
        <Box className={styles.waitlist}>
          <div className="left">
            <p className="title">
              Invite Others to the Planet!
            </p>
            <p
              className="desc"
              style={{
                width: 720,
              }}
            >
              Planet is an Invite-Only ecosystem where likeminded people can have collectible trees.
              If you know someone who cares for the environment you can invite her/him to join us :)
            </p>
            <p className="subtitle">
              Send the invitation link to your friends!
            </p>
            <div className="inputgroup">
              <Input
                placeholder="email@example.com"
                onChange={this.onChangeMail}
              />
              <button
                type="button"
                onClick={this.sendInvitation}
              >
                SEND
              </button>
            </div>
          </div>
          <img
            src={`${cdn}/invite.png`}
            alt="invite"
            className="right"
          />
        </Box>

        <PadDivider gap={250} />
      </Fragment>
    );
  }
};

export default connect(
  state => ({
    user: state.user,
  }),
)(JoinView);
