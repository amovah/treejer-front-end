import history from 'Root/history';
import store from 'Root/store';
import setRedirect from 'Root/actions/redirect/set';

export default () => {
  const state = store.getState();

  if (!state.user.logged) {
    setRedirect('/order');
    history.push('/sign-in');
    return;
  }

  console.log(state.order);
};
