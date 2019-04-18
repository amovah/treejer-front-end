import React from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';
import moment from 'moment';
import Table from 'Root/shared/Table';
import styles from './index.less';

const generateData = item => [
  <span className="text">
    {item.id}
  </span>,
  <span className={classnames('text', item.status === 'Pending' ? 'pending' : 'confirmed')}>
    {item.status === 'Pending' ? 'Pending' : 'Successful'}
  </span>,
  <span className="text">
    {moment(item.date).format('DD/MM/YYYY, h:m A')}
  </span>,
  <span className="value">
    €{item.price}
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

export default connect(
  state => ({
    receipts: state.user.receipts,
  }),
)(PaymentHistory);
