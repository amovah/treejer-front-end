import types from 'Root/actions';
import store from 'Root/store';

export default (id, qty) => {
  store.dispatch({
    type: types.order.CHANGE_QTY,
    id,
    qty,
  });
};
