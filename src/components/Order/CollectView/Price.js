import React from 'react';
import { connect } from 'react-redux';
import Box from 'Root/shared/Box';
import Button from 'Root/shared/Button';
import { cdn } from 'Root/config';
import styles from './index.less';

const Price = props => (
  <div className={styles.rightNextInfo}>
    <Box className="box">
      <img
        src={`${cdn}/logo.png`}
        alt="logo"
      />
      <p>
        Did you know that your new trees can produce the oxygen needed for
        <span className="green">&nbsp;50 people</span> per year over time?
      </p>
      <div className="divider" />
      <p className="title">
        Cash Total
      </p>
      <p className="price">
        ${props.trees.map(i => i.qty * i.price).reduce((a, b) => a + b, 0)}
      </p>
      <Button
        onClick={props.goNext}
      >
        NEXT
      </Button>
    </Box>
    <p>
      By proceeding I agree to <span className="green">terms</span> and
      <span className="green"> conditions</span>.
    </p>
  </div>
);

export default connect(
  state => ({
    trees: state.order.trees,
  }),
)(Price);
