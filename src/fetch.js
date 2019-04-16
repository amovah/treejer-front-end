import { stringify } from 'querystring';
import { url as serverURL } from 'Root/config';

export default async ({
  url, options, token, query = {},
}) => {
  const queryString = stringify({
    access_token: token,
    ...query,
  });

  let modifiedUrl = `${serverURL}${url}`;
  let next = '?';
  if (queryString) {
    modifiedUrl = `${url}?${queryString}`;
    next = '&';
  }

  if (options.filter) {
    modifiedUrl = `${modifiedUrl}${next}filter=${JSON.stringify(options.filter)}`;
  }

  const res = await global.fetch(modifiedUrl, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    ...options,
  });

  return {
    res,
    data: await res.json(),
  };
};
