import types from 'Root/actions';
import store from 'Root/store';
import history from 'Root/history';

export default () => {
  store.dispatch({
    type: types.user.LOGIN,
    data: {
      username: 'AliTheGreat',
      name: 'Ali Movahedi',
      invited: false,
      trees: false,
    },
  });

  const redirectURL = store.getState().redirect;
  if (redirectURL) {
    history.push(redirectURL);
  }
};
