import React from 'react';
import { connect } from 'react-redux';
import Box from 'Root/shared/Box';
import earth from 'Root/assets/earth.png';
import addSign from './add.png';
import styles from './index.less';

const UserDetails = (props) => {
  if (props.user.logged) {
    return (
      <div className={styles.container}>
        <Box className="left">
          <div
            className="avatar"
          >
            <img
              src={props.user.avatar}
              alt="avatar"
            />
            <span>
              <img
                src={addSign}
                alt="add"
              />
            </span>
          </div>
          <p className="name">
            {props.user.name}
          </p>
          <p className="username">
            {props.user.username}
          </p>
          <div className="provide">
            <p className="value">
              483
            </p>
            <p className="desc">
              TREES
            </p>
            <div className="divider" />
            <p className="value">
              45,644
            </p>
            <p className="desc">
              <b>
                Oxygens
              </b>
            </p>
          </div>
        </Box>
        <Box className="right">
          <p className="title">
            My Forest on the Planet
          </p>
          <div className="earth">
            <img
              src={earth}
              alt="earth"
            />
          </div>
        </Box>
      </div>
    );
  }

  return <p>unlogged</p>;
};

export default connect(
  state => ({
    user: state.user,
  }),
)(UserDetails);
