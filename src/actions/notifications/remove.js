import types from 'Root/actions';
import store from 'Root/store';

export default (id) => {
  store.dispatch({
    type: types.notifications.REMOVE,
    id,
  });
};
