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

const data = [];

for (let i = 0; i < 10; i = i + 1) {
  data.push(...sampleData);
}

export default () => (
  <div className={styles.container}>
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
    <p className="tip">
      <b>Tip</b>: After a payment&apos;s status is confirmed, the Trees are added to user&apos;s
      forest.
    </p>
  </div>
);
