import types from 'Root/actions';
import store from 'Root/store';
import history from 'Root/history';
import fetch from 'Root/fetch';

export default async (credentials) => {
  const res = await fetch('/clients/login', {
    method: 'POST',
    body: JSON.stringify(credentials),
  }, false);

  if (res.data.error) {
    throw new Error();
  }

  store.dispatch({
    type: types.user.LOGIN,
    data: {
      username: 'AliTheGreat',
      name: 'Ali Movahedi',
      invited: false,
      token: res.data.id,
      id: res.data.userId,
    },
  });

  const trees = await fetch(`/clients/${res.data.userId}/trees`);
  store.dispatch({
    type: types.user.CHANGE,
    toChange: {
      trees: trees.data,
    },
  });

  global.localStorage.token = res.data.id;

  history.push('/planet');
};
