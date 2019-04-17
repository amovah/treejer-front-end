import React, { Component } from 'react';
import { connect } from 'react-redux';
import Table from 'Root/shared/Table';
import NumberInput from 'Root/shared/NumberInput';
import changeQtyOrder from 'Root/actions/order/changeQty';
import removeOrder from 'Root/actions/order/remove';
import { cdn } from 'Root/config';
import styles from './index.less';
import removeIcon from './remove.png';
import Total from './Total';

const changeQty = id => (qty) => {
  changeQtyOrder(id, qty);
};

const removeTree = id => () => {
  removeOrder(id);
};

const generateData = item => [
  <div className={styles.treeRow}>
    <img
      src={`${cdn}/trees/acacia.png`}
      alt="acacia"
    />
    <div>
      <p className="title">
        {item.type} Tree
      </p>
      <p className="desc">
        Via <span className="green">{item.drive}</span> in {item.region}
      </p>
    </div>
  </div>,
  <p className={styles.treeValue}>
    ${item.price}
  </p>,
  <NumberInput min={1} defaultValue={item.qty} onChange={changeQty(item.id)} />,
  <p className={styles.treeValue}>
    $<Total id={item.id} />
  </p>,
  <img
    src={removeIcon}
    alt="remove"
    className="removeIcon"
    onClick={removeTree(item.id)}
  />,
];

class Collect extends Component {
  len = 0;

  shouldComponentUpdate(nextProp) {
    if (nextProp.trees.length !== this.len) {
      return true;
    }

    return false;
  }

  render() {
    this.len = this.props.trees.length;
    return (
      <div className={styles.treeShow}>
        <Table
          className={styles.table}
          heads={[
            'collected tree',
            'value',
            'qty',
            'total',
            '',
          ]}
          data={this.props.trees.map(generateData)}
        />
      </div>
    );
  }
}

export default connect(
  state => ({
    trees: state.order.trees,
  }),
)(Collect);
