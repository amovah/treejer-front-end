import React from 'react';
import classnames from 'classnames';
import Table from 'Root/shared/Table';
import styles from './index.less';

const sampleData = [
  [
    <span className="text">
      #123456789
    </span>,
    <span className={classnames('text', 'pending')}>
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
    <span className={classnames('text', 'confirmed')}>
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

export default () => (
  <div className={styles.container}>
    <p className="title">
      Payment History
    </p>
    <Table
      data={sampleData}
      heads={['Order', 'Status', 'Date/Time', 'Payment']}
      className={styles.table}
    />
  </div>
);
