import types from 'Root/actions';
import store from 'Root/store';

export default (tree) => {
  store.dispatch({
    type: types.order.ADD,
    tree,
  });
};
