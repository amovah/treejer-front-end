import types from 'Root/actions';
import store from 'Root/store';
import fetch from 'Root/fetch';

export default async (code) => {
  const res = await fetch(`/vouchers/${code}`);

  if (res.data.error) {
    console.log('error');
  } else {
    const trees = [];
    const treeModels = store.getState().trees;
    for (const item of res.data.items) {
      trees.push(treeModels.find(i => item.identifier === i.id));
    }

    store.dispatch({
      type: types.claim.ON,
      trees,
      code,
    });
  }
};
