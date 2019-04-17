import history from 'Root/history';
import store from 'Root/store';
import setRedirect from 'Root/actions/redirect/set';
import fetch from 'Root/fetch';

export default async () => {
  const state = store.getState();

  if (!state.user.logged) {
    setRedirect('/order');
    history.push('/sign-in');
    return '';
  }

  if (state.user.status === 'WaitList') {
    return 'uninvited';
  }

  const res = await fetch('/receipts', {
    method: 'POST',
    body: JSON.stringify({
      clientId: state.user.id,
      type: state.order.owner,
      price: state.order.trees.map(i => i.qty * i.price).reduce((a, b) => a + b, 0),
      items: state.order.trees.map(i => ({
        identifier: i.id,
        quantity: i.qty,
      })),
      method: state.order.method,
    }),
  });

  return res.data;
};
