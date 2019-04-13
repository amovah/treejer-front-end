import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Box from 'Root/shared/Box';
import Table from 'Root/shared/Table';
import styles from './index.less';
import PadDivider from '../PadDivider';

const sampleData = [
  [
    <span>
      <b>
        Acacia Tree
      </b>
    </span>,
    <span>
      Pending Payment
    </span>,
    <span className="green">
      Gulf Green
    </span>,
    <span className="green">
      Gulf Green
    </span>,
    <span className="green">
      Gulf Green
    </span>,
    <span>
      15
    </span>,
    <span>
      #1234567
    </span>,
  ],
];
const data = [];
for (let i = 0; i < 20; i = i + 1) {
  data.push(...sampleData);
}

const heads = ['collected tree', 'status', 'planter', 'conserver', 'ranger', 'o2/day', 'tree id'];

const ForestView = (props) => {
  if (!props.user.logged) {
    return null;
  }

  if (!props.user.invited) {
    return (
      <Box className={styles.container}>
        <p className="title">
          My Forest
        </p>
        <div className="tableContainer">
          <Table
            data={data}
            heads={heads}
            className={styles.table}
          />
        </div>
        <div className="highShow">
          <p>
            You should have an invitation to create your first forest!
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
            My Forest
          </p>
          <div className="tableContainer">
            <Table
              data={data}
              heads={heads}
              className={styles.table}
            />
          </div>
          <div className="highShow">
            <p>
              You have no Trees in your Forest! Add one!
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
          My Forest
        </p>
        <div className="tableContainer">
          <Table
            data={data}
            heads={heads}
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
