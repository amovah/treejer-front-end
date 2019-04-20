import React from 'react';
import { connect } from 'react-redux';
import styles from './index.less';
import Notif from './Notif';

const Notification = props => (
  <div className={styles.container}>
    {props.notifications.map(i => (
      <Notif
        key={i.id}
        {...i}
      />
    ))}
  </div>
);

export default connect(
  state => ({
    notifications: state.notifications,
  }),
)(Notification);
