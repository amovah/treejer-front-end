import store from 'Root/store';
import history from 'Root/history';
import fetch from 'Root/fetch';
import relogin from 'Root/actions/user/relogin';
import sendNotification from 'Root/actions/notifications/send';
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

    sendNotification({
      type: 'success',
      text: 'The voucher\'s trees has been addedd to your forest successfully.',
    });

    clear();
    await relogin();
  }
};
