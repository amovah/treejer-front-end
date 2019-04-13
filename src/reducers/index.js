import { combineReducers } from 'redux';
import user from './user';
import modal from './modal';
import claim from './claim';
import redirect from './redirect';

export default combineReducers({
  user,
  modal,
  claim,
  redirect,
});
