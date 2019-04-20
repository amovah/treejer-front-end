import { generate } from 'shortid';
import types from 'Root/actions';
import store from 'Root/store';

export default (notification) => {
  const id = generate();

  store.dispatch({
    type: types.notifications.PUSH,
    notification: {
      ...notification,
      id,
    },
  });

  return id;
};
