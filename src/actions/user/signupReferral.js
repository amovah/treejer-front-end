import fetch from 'Root/fetch';
import login from './login';

export default async (credentials, referral) => {
  const res = await fetch('/clients', {
    method: 'POST',
    body: JSON.stringify(credentials),
  }, false);

  if (res.data.error) {
    return null;
  }

  const user = await fetch('/clients/login', {
    method: 'POST',
    body: JSON.stringify(credentials),
  }, false);

  global.localStorage.token = user.data.id;

  const details = await fetch(`/clients/${user.data.userId}`);

  if (details.data.status !== 'WaitList') {
    await login(credentials);

    return res.data;
  }

  const inv = await fetch(`/clients/${user.data.userId}/changeStatus/${referral}`, {
    method: 'PUT',
  });
  console.log(inv);

  await login(credentials);
  return res.data;
};
