import types from 'Root/actions';
import store from 'Root/store';
import fetch from 'Root/fetch';

export default async () => {
  const user = store.getState().user;

  if (user.logged) {
    const res = await fetch(`/clients/${user.id}/receipts`);

    store.dispatch({
      type: types.user.LOAD_RECEIPTS,
      receipts: res.data,
    });
  }
};
