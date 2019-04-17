import qs from 'querystring';
import { url as serverURL } from 'Root/config';
import store from 'Root/store';

export default async (url, options = {}, token = true, query = {}) => {
  try {
    const toQS = {
      ...query,
    };
    if (token) {
      toQS.access_token = store.getState().user.token;
    }

    const qsified = qs.stringify(toQS);

    let modifiedUrl = `${serverURL}${url}`;
    let next = '?';
    if (qsified) {
      modifiedUrl = `${serverURL}${url}?${qsified}`;
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