import { combineReducers } from 'redux';
import user from './user';
import modal from './modal';
import claim from './claim';
import trees from './trees';
import order from './order';
import redirect from './redirect';
import lazy from './lazy';

export default combineReducers({
  user,
  modal,
  claim,
  trees,
  order,
  redirect,
  lazy,
});
