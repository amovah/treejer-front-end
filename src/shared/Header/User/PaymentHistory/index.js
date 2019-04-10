import React from 'react';
import classnames from 'classnames';
import Table from 'Root/shared/Table';
import styles from './index.less';

const sampleData = [
  [
    <span className={styles.text}>
      #123456789
    </span>,
    <span className={classnames(styles.text, styles.pending)}>
      Pending
    </span>,
    <span className={styles.text}>
      22/12/2017, 6:39 PM
    </span>,
    <span className={styles.value}>
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
      gap="20px 10px"
    />
  </div>
);
