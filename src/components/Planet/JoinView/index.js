import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Box from 'Root/shared/Box';
import Input from 'Root/shared/Input';
import history from 'Root/history';
import styles from './index.less';
import PadDivider from '../PadDivider';

const JoinView = (props) => {
  if (!props.user.logged) {
    return (
      <Fragment>
        <Box className={styles.waitlist}>
          <div className="left">
            <p className="title">
              Join the Planet Waitlist!
            </p>
            <p className="desc">
              Planet is an Invite-Only ecosystem where likeminded people can have collectible trees.
              If you know someone who cares for the environment you can invite her/him to join us :)
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
          <div className="right">
            Illustrator
          </div>
        </Box>

        <PadDivider gap={250} />
      </Fragment>
    );
  }

  if (props.user.logged && !props.user.invited) {
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
            />
            <button
              type="button"
            >
              SEND
            </button>
          </div>
        </div>
        <div className="right">
          Illustrator
        </div>
      </Box>

      <PadDivider gap={250} />
    </Fragment>
  );
};

export default connect(
  state => ({
    user: state.user,
  }),
)(JoinView);
