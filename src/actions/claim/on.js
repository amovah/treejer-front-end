import types from 'Root/actions';
import store from 'Root/store';

export default async (code) => {
  store.dispatch({ type: types.claim.ON });
};
