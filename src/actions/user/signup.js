import fetch from 'Root/fetch';

export default async (credentials) => {
  const res = await fetch('/clients', {
    method: 'POST',
    body: JSON.stringify(credentials),
  });

  if (res.data.error) {
    return null;
  }

  return res.data;
};
