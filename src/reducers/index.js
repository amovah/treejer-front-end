import { combineReducers } from 'redux';
import user from './user';
import modal from './modal';
import claim from './claim';

export default combineReducers({
  user,
  modal,
  claim,
});
