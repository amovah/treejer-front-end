import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Box from 'Root/shared/Box';
import Table from 'Root/shared/Table';
import styles from './index.less';
import needInviteImage from './needinvite.png';
import noTreeImage from './notree.png';
import PadDivider from '../PadDivider';

const generateData = item => [
  <span>
    <b>
      {item.type.type}
    </b>
  </span>,
  <span>
    {item.status}
  </span>,
  <span className="green">
    {item.planter}
  </span>,
  <span className="green">
    {item.conserver}
  </span>,
  <span className="green">
    {item.ranger}
  </span>,
  <span>
    {item.type.o2RatePerDay}
  </span>,
  <span>
    {item.treeHashId}
  </span>,
];

const sampleData = [];
for (let i = 0; i < 20; i = i + 1) {
  sampleData.push(generateData({
    status: 'Pending Payment',
    planter: 'Gulf Green',
    convserver: 'Gulf Green',
    ranger: 'Gulf Green',
    id: '#4124124214',
    type: {
      type: 'Acacia',
      o2RatePerDay: 15,
    },
  }));
}
const heads = ['collected tree', 'status', 'planter', 'conserver', 'ranger', 'o2/day', 'tree id'];

const ForestView = (props) => {
  if (!props.user.logged) {
    return null;
  }

  if (props.user.status === 'WaitList') {
    return (
      <Box className={styles.container}>
        <p className="title">
          My Forest
        </p>
        <div className="tableContainer">
          <Table
            data={sampleData}
            heads={heads}
            className={styles.table}
          />
        </div>
        <div className="highShow">
          <img
            src={needInviteImage}
            alt="need invite"
          />
          <p>
            You should have an invitation to create your first forest!
          </p>
        </div>
      </Box>
    );
  }

  if (props.user.trees.length === 0) {
    return (
      <Fragment>
        <Box className={styles.container}>
          <p className="title">
            My Forest
          </p>
          <div className="tableContainer">
            <Table
              data={sampleData}
              heads={heads}
              className={styles.table}
            />
          </div>
          <div className="highShow">
            <img
              src={noTreeImage}
              alt="no tree"
            />
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
            data={props.user.trees.map(generateData)}
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
