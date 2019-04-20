import React from 'react';
import classnames from 'classnames';
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
      {props.type === 'error' ? 'ERROR' : 'SUCCESS'}
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
