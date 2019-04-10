import React from 'react';
import Table from 'Root/shared/Table';
import styles from './index.less';

const data = [
  ['1', '2', '3']
];

export default () => (
  <div className={styles.container}>
    <p className="title">
      Payment History
    </p>
    <Table
      data={data}
      heads={['Order', 'Status', 'Date/Time', 'Payment']}
    />
  </div>
);
