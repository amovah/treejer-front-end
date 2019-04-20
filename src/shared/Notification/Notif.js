import React from 'react';
import classnames from 'classnames';
import removeAction from 'Root/actions/notifications/remove';
import removeIcon from './remove.png';
import styles from './index.less';

export default props => (
  <div
    className={
      classnames(
        styles.notification,
        props.type,
      )
    }
  >
    <p className="title">
      {props.type.toUpperCase()}
    </p>
    <p className="text">
      {props.text}
    </p>
    <div className={classnames('banner', props.type)} />
    {
      props.type === 'warning'
      && (
        <div
          className="removeIcon"
          onClick={() => removeAction(props.id)}
        >
          <img
            src={removeIcon}
            alt="remove"
          />
        </div>
      )
    }
  </div>
);
