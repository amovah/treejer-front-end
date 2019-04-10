import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();

if (process.env.NODE_ENV === 'development') {
  global.myHistory = history;
}

export default history;
