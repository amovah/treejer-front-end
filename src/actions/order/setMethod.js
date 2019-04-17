import types from 'Root/actions';
import store from 'Root/store';

export default (method) => {
  store.dispatch({
    type: types.order.SET_METHOD,
    method,
  });
};
