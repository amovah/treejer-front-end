import types from 'Root/actions';
import store from 'Root/store';
import fetch from 'Root/fetch';

export default async () => {
  const user = store.getState().user;

  if (user.logged) {
    const res = await fetch('/trees/treeModels');
    store.dispatch({
      type: types.treeModels.LOAD,
      trees: res.data,
    });
  }
};
