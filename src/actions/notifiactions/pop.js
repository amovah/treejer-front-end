import types from 'Root/actions';
import store from 'Root/store';

export default () => {
  store.dispatch({
    type: types.notifiactions.POP,
  });
};
