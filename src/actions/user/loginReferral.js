import fetch from 'Root/fetch';
import login from './login';

export default async (credentials, referral) => {
  const res = await fetch('/clients/login', {
    method: 'POST',
    body: JSON.stringify(credentials),
  }, false);

  if (!res) {
    return;
  }

  global.localStorage.token = res.data.id;
  global.localStorage.userId = res.data.userId;

  const details = await fetch(`/clients/${res.data.userId}`);

  if (details.data.status !== 'WaitList') {
    await login(credentials);
  } else {
    const inv = await fetch(`/clients/${res.data.userId}/changeStatus/${referral}`, {
      method: 'PUT',
    });
    if (!inv) {
      return;
    }

    await login(credentials);
  }
};
