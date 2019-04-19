import fetch from 'Root/fetch';
import login from './login';

export default async (credentials) => {
  const res = await fetch('/clients', {
    method: 'POST',
    body: JSON.stringify(credentials),
  }, false);

  if (!res) {
    return null;
  }

  await login(credentials);

  return res.data;
};
