import store from 'Root/store';
import types from 'Root/actions';

export default () => {
  if (global.localStorage.token) {
    store.dispatch({
      type: types.user.LOGIN,
      data: {
        token: global.localStorage.token,
        id: global.localStorage.userId,
      },
    });
  }
};
