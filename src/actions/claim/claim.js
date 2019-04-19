import store from 'Root/store';
import history from 'Root/history';
import fetch from 'Root/fetch';
import relogin from 'Root/actions/user/relogin';
import clear from './clear';

export default async () => {
  const state = store.getState();

  if (!state.user.logged) {
    history.push('/sign-in');
  } else {
    const res = await fetch(`/trees/${state.user.id}/reclaim/${state.claim.code}`, {
      method: 'POST',
    });
    if (!res) {
      return;
    }

    clear();
    await relogin();
  }
};
