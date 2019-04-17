import types from 'Root/actions';
import store from 'Root/store';
import fetch from 'Root/fetch';

export default async () => {
  const user = store.getState().user;

  if (user.logged) {
    const res = await fetch(`/clients/${user.id}/trees`);
    store.dispatch({
      type: types.trees.LOAD,
      trees: res.data,
    });
  }
};
