import React from 'react';
import classnames from 'classnames';
import styles from './index.less';

export default props => (
  <div
    className={
      classnames(
        styles.notification,
        props.type === 'error' && styles.error,
      )
    }
  >
    <p className="title">
      {props.type === 'error' ? 'ERROR' : 'SUCCESS'}
    </p>
    <p className="text">
      {props.text}
    </p>
    <div className={classnames('banner', props.type === 'error' && 'error')} />
  </div>
);
