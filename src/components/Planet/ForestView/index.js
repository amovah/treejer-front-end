import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Box from 'Root/shared/Box';
import styles from './index.less';
import PadDivider from '../PadDivider';

const ForestView = (props) => {
  if (!props.user.logged) {
    return null;
  }

  if (!props.user.invited) {
    return (
      <Box className={styles.container}>
        <p>
          shit
        </p>
      </Box>
    );
  }

  return (
    <Fragment>
      <Box className={styles.container}>
        <p>
          shit
        </p>
      </Box>

      <PadDivider gap={150} />
    </Fragment>
  );
};

export default connect(
  state => ({
    user: state.user,
  }),
)(ForestView);
