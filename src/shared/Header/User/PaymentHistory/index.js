import React from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';
import lazy from 'Root/lazy';
import loadReceipts from 'Root/actions/user/loadReceipts';
import Table from 'Root/shared/Table';
import styles from './index.less';

const generateData = item => [
  <span className="text">
    {item.id}
  </span>,
  <span className={classnames('text', item.status === 'pending' ? 'pending' : 'confirmed')}>
    {item.status ? 'Pending' : 'Confirmed'}
  </span>,
  <span className="text">
    {item.date}
  </span>,
  <span className="value">
    {item.payment}
  </span>,
];

const PaymentHistory = props => (
  <div className={styles.container}>
    <p className="title">
      Payment History
    </p>
    <div className="tableContainer">
      <Table
        data={props.receipts.map(generateData)}
        heads={['Order', 'Status', 'Date/Time', 'Payment']}
        className={styles.table}
      />
    </div>
    <div className="divider" />
    <p className="tip">
      <b>Tip</b>: After a payment&apos;s status is confirmed, the Trees are added to user&apos;s
      forest.
    </p>
  </div>
);

export default lazy(loadReceipts)(
  connect(
    state => ({
      receipts: state.user.receipts,
    }),
  )(PaymentHistory),
);
