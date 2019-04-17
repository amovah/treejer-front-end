import { connect } from 'react-redux';

const Total = props => props.value;

export default connect(
  (state, ownProp) => {
    const tree = state.order.trees.find(i => i.id === ownProp.id);

    return {
      value: tree.qty * tree.price,
    };
  },
)(Total);
