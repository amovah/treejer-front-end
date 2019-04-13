import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Box from 'Root/shared/Box';
import Table from 'Root/shared/Table';
import styles from './index.less';
import PadDivider from '../PadDivider';

const sampleData = [
  [
    <span className="text">
      #123456789
    </span>,
    <span className="text">
      Pending
    </span>,
    <span className="text">
      22/12/2017, 6:39 PM
    </span>,
    <span className="value">
      $170.00
    </span>,
  ],
  [
    <span className="text">
      #123456789
    </span>,
    <span className="text">
      Confirmed
    </span>,
    <span className="text">
      22/12/2017, 6:39 PM
    </span>,
    <span className="value">
      $170.00
    </span>,
  ],
];
const data = [];
for (let i = 0; i < 10; i = i + 1) {
  data.push(...sampleData);
}


const ForestView = (props) => {
  if (!props.user.logged) {
    return null;
  }

  if (!props.user.invited) {
    return (
      <Box className={styles.container}>
        <p className="title">
          Payment History
        </p>
        <div className="tableContainer">
          <Table
            data={data}
            heads={['Order', 'Status', 'Date/Time', 'Payment']}
            className={styles.table}
          />
        </div>
        <div className="highShow">
          <p>
            Not Invited Yet
          </p>
        </div>
      </Box>
    );
  }

  if (!props.user.trees) {
    return (
      <Fragment>
        <Box className={styles.container}>
          <p className="title">
            Payment History
          </p>
          <div className="tableContainer">
            <Table
              data={data}
              heads={['Order', 'Status', 'Date/Time', 'Payment']}
              className={styles.table}
            />
          </div>
          <div className="highShow">
            <p>
              You dont have tree mate
            </p>
          </div>
        </Box>

        <PadDivider gap={150} />
      </Fragment>
    );
  }

  return (
    <Fragment>
      <Box className={styles.container}>
        <p className="title">
          Payment History
        </p>
        <div className="tableContainer">
          <Table
            data={data}
            heads={['Order', 'Status', 'Date/Time', 'Payment']}
            className={styles.table}
          />
        </div>
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
