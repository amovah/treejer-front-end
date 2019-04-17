import { connect } from 'react-redux';

const Price = props => props.trees.map(i => i.qty * i.price).reduce((a, b) => a + b, 0);

export default connect(
  state => ({
    trees: state.order.trees,
  }),
)(Price);
