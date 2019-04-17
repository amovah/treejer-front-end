import qs from 'querystring';
import { url as serverURL } from 'Root/config';
import lazyOn from 'Root/actions/lazy/on';
import lazyOff from 'Root/actions/lazy/off';

export default async (url, options = {}, token = true, query = {}) => {
  try {
    lazyOn();

    const toQS = {
      ...query,
    };
    if (token) {
      toQS.access_token = global.localStorage.token;
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

    lazyOff();

    return {
      res,
      data: await res.json(),
    };
  } catch (e) {
    lazyOff();
    throw Error('url not found');
  }
};
