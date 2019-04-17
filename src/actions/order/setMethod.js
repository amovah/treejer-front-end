import types from 'Root/actions';
import store from 'Root/store';

export default (owner) => {
  store.dispatch({
    type: types.order.SET_METHOD,
    owner,
  });
};
