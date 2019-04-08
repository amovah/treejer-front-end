import React from 'react';
import classnames from 'classnames';
import styles from './index.less';

export default props => (
  <div className={styles.container}>
    <div className={classnames('step', props.current > 0 && 'active')}>
      <span className="title">
        Collect
      </span>
      <p className="number">
        1
      </p>
      <div className="connection" />
    </div>
    <div className={classnames('step', props.current > 1 && 'active')}>
      <span className="title">
        Review
      </span>
      <p className="number">
        2
      </p>
      <div className="connection" />
    </div>
    <div className={classnames('step', props.current > 2 && 'active')}>
      <span className="title">
        Select Owner
      </span>
      <p className="number">
        3
      </p>
      <div className="connection" />
    </div>
    <div className={classnames('step', props.current > 4 && 'active')}>
      <span className="title">
        Checkout
      </span>
      <p className="number">
        4
      </p>
    </div>
  </div>
);
