import types from 'Root/actions';
import store from 'Root/store';
import history from 'Root/history';
import fetch from 'Root/fetch';
import clearRedirect from 'Root/actions/redirect/clear';
import claim from 'Root/actions/claim/claim';

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

  const state = store.getState();

  if (state.claim.status) {
    await claim();
  }

  if (state.redirect !== '') {
    history.push(state.redirect);
    clearRedirect();
  } else {
    history.push('/planet');
  }
};
