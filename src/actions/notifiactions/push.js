import types from 'Root/actions';
import store from 'Root/store';

export default (notification) => {
  store.dispatch({
    type: types.notifiactions.PUSH,
    notification,
  });
};
