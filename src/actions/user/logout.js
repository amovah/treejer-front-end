import types from 'Root/actions';
import store from 'Root/store';
import fetch from 'Root/fetch';

export default async () => {
  const res = await fetch('/clients/logout', { method: 'POST' });
  if (!res) {
    return;
  }

  global.localStorage.token = '';

  store.dispatch({
    type: types.user.LOGOUT,
  });
};
