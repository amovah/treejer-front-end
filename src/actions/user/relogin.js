import store from 'Root/store';
import types from 'Root/actions';
import fetch from 'Root/fetch';

export default async () => {
  if (global.localStorage.token) {
    store.dispatch({
      type: types.user.LOGIN,
      data: {
        token: global.localStorage.token,
        id: global.localStorage.userId,
      },
    });

    const details = await fetch(`/clients/${global.localStorage.userId}`, {
      filter: {
        include: ['trees', 'receipts'],
      },
    });

    store.dispatch({
      type: types.user.CHANGE,
      toChange: details.data,
    });
  }
};
