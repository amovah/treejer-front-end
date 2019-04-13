import types from 'Root/types/actions';
import store from 'Root/store';

export default (url) => {
  store.dispatch({ type: types.redirect.CHANGE, url });
};
