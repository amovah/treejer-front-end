import types from 'Root/actions';
import store from 'Root/store';
import fetch from 'Root/fetch';

export default async () => {
  await fetch('/clients/logout', { method: 'POST' }).catch(() => {});

  global.localStorage.token = '';

  store.dispatch({
    type: types.user.LOGOUT,
  });
};
