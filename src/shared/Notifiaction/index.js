import React from 'react';
import { generate } from 'shortid';
import { connect } from 'react-redux';
import styles from './index.less';
import Notif from './Notif';

const Notifiaction = props => (
  <div className={styles.container}>
    {props.notifications.map(i => (
      <Notif
        type={i.type}
        text={i.text}
        key={generate()}
      />
    ))}
  </div>
);

export default connect(
  state => ({
    notifications: state.notifications,
  }),
)(Notifiaction);
