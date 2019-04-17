import React from 'react';
import { generate } from 'shortid';
import { connect } from 'react-redux';
import add from 'Root/actions/order/add';
import styles from './index.less';
import TreeBox from '../TreeBox';

const addToBasket = tree => () => {
  add(tree);
};

const Trees = props => (
  <div className={styles.addToTree}>
    <p className="title">
      Add A Tree to Your Forest
    </p>
    <div className="boxes">
      {
        props.trees.map(i => (
          <TreeBox
            name={i.type}
            region={i.region}
            price={i.price}
            rate={i.o2RatePerDay}
            drive={i.drive}
            key={generate()}
            onClick={addToBasket(i)}
          />
        ))
      }
    </div>
  </div>
);

export default connect(
  state => ({
    trees: state.trees,
  }),
)(Trees);
