import qs from 'querystring';
import { url as serverURL } from 'Root/config';

export default async (url, options, token = null, query = {}) => {
  try {
    const toQS = {
      ...query,
    };
    if (token) {
      toQS.access_token = token;
    }

    const qsified = qs.stringify(toQS);

    let modifiedUrl = `${serverURL}${url}`;
    let next = '?';
    if (qsified) {
      modifiedUrl = `${url}?${qsified}`;
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
  } catch (e) {
    throw Error('url not found');
  }
};
