import store from 'Root/store';
import types from 'Root/actions';
import fetch from 'Root/fetch';

export default async () => {
  if (global.localStorage.token) {
    const details = await fetch(`/clients/${global.localStorage.userId}`, {
      filter: {
        include: ['trees', 'receipts'],
      },
    });
    if (!details) {
      return;
    }

    store.dispatch({
      type: types.user.LOGIN,
      data: {
        ...details.data,
        token: global.localStorage.token,
        id: global.localStorage.userId,
      },
    });
  }
};
