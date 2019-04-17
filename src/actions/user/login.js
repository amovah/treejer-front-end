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
      token: res.data.id,
      id: res.data.userId,
    },
  });

  const details = await fetch(`/clients/${res.data.userId}`, {
    filter: {
      include: ['trees', 'receipts'],
    },
  });

  store.dispatch({
    type: types.user.CHANGE,
    toChange: details.data,
  });

  global.localStorage.token = res.data.id;
  global.localStorage.userId = res.data.userId;

  history.push('/planet');
};
