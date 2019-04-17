import types from 'Root/actions';
import store from 'Root/store';

export default () => {
  global.localStorage.token = '';

  store.dispatch({
    type: types.user.LOGOUT,
  });
};
