import types from 'Root/types';
import store from 'Root/store';

export default () => {
  store.dispatch({
    type: types.claim.OFF,
  });
};
