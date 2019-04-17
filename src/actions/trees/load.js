import types from 'Root/actions';
import store from 'Root/store';
import fetch from 'Root/fetch';

export default async () => {
  const user = store.getState().user;

  if (user.logged) {
    const res = await fetch('/trees/treeModels');

    const trees = [];
    for (const [key, value] of Object.entries(res.data)) {
      trees.push({
        ...value,
        id: key,
      });
    }

    store.dispatch({
      type: types.trees.LOAD,
      trees,
    });
  }
};
