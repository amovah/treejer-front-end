import React from 'react';
import classnames from 'classnames';
import Box from 'Root/shared/Box';
import { cdn } from 'Root/config';
import styles from './index.less';

export default props => (
  <Box className={classnames(styles.box, props.withoutButton && styles.without)}>
    <div className="circle">
      <img
        src={`${cdn}/trees/acacia.png`}
        alt="acacia"
      />
    </div>
    <div className="padding" />
    <p className="title">
      {props.name} Tree
    </p>
    <p className="detail">
      Via <span>{props.drive}</span> in {props.region}
    </p>
    <div className="details">
      <div className="detail">
        <p className="title">
          {
            props.quantity
              ? 'Quantity'
              : 'Adopters'
          }
        </p>
        <p className="info">
          {
            props.quantity
              ? props.quantity
              : '1.5 K'
          }
        </p>
      </div>
      <div className="divider" />
      <div className="detail">
        <p className="title">
          O2 Rate
        </p>
        <p className="info">
          {props.rate}<span>/Day</span>
        </p>
      </div>
      <div className="divider" />
      <div className="detail">
        <p className="title">
          Value
        </p>
        <p className="info">
          ${props.price}
        </p>
      </div>
    </div>
    {
      !props.withoutButton
      && (
        <button
          type="button"
          className="btn"
          onClick={props.onClick}
        >
          Add to Forest
        </button>
      )
    }
  </Box>
);
