import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Box from 'Root/shared/Box';
import PadDivider from '../PadDivider';
import styles from './index.less';

const WaitWarning = (props) => {
  if (props.user.logged && !props.user.invited) {
    return (
      <Fragment>
        <PadDivider gap={50} />
        <Box
          className={styles.box}
        >
          <p>
            You are on the waitlist. After being invited, you&apos;ll be able to collect Trees!
          </p>
        </Box>
        <PadDivider gap={100} />
      </Fragment>
    );
  }

  return <PadDivider gap={150} />;
};

export default connect(
  state => ({
    user: state.user,
  }),
)(WaitWarning);
