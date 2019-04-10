import types from 'Root/actions';
import store from 'Root/store';

export default (content) => {
  store.dispatch({
    type: types.modal.OPEN,
    content,
  });
};
