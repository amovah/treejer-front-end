import types from 'Root/actions';
import store from 'Root/store';
import sendNotification from 'Root/actions/notifications/send';

export default (tree) => {
  store.dispatch({
    type: types.order.ADD,
    tree,
  });

  sendNotification({
    type: 'success',
    text: `A new ${tree.type} has been added to your order list. Check your list now.`,
  });
};
