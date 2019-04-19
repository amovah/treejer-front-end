import qs from 'querystring';
import { url as serverURL } from 'Root/config';
import lazyOn from 'Root/actions/lazy/on';
import lazyOff from 'Root/actions/lazy/off';
import sendNotification from 'Root/actions/notifications/send';

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

    const json = await res.json();
    if (res.status >= 400 && json.error) {
      if (json.error.message.includes('Error!')) {
        sendNotification({
          type: 'error',
          text: json.error.message,
        });
      } else {
        sendNotification({
          type: 'error',
          text: 'Error! Something went wrong, Please try again later.',
        });
      }

      return null;
    }

    return {
      res,
      data: json,
    };
  } catch (e) {
    lazyOff();
    return null;
  }
};
