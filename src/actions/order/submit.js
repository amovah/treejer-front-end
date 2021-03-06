import history from 'Root/history';
import store from 'Root/store';
import setRedirect from 'Root/actions/redirect/set';
import fetch from 'Root/fetch';
import sendNotification from 'Root/actions/notifications/send';
import clear from './clear';

export default async () => {
  const state = store.getState();

  if (!state.user.logged) {
    setRedirect('/order');
    history.push('/sign-in');
    return;
  }

  const res = await fetch('/receipts', {
    method: 'POST',
    body: JSON.stringify({
      clientId: state.user.id,
      type: state.order.owner || 'personalForest',
      price: state.order.trees.map(i => i.qty * i.price).reduce((a, b) => a + b, 0),
      items: state.order.trees.map(i => ({
        identifier: i.id,
        quantity: i.qty,
      })),
      method: state.order.method,
    }),
  });
  if (!res) {
    return;
  }

  sendNotification({
    type: 'success',
    text: 'A new invoice including your invoice number has been sent to your email address successfully.',
  });

  clear();

  return res.data;
};
