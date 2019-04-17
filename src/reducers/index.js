import { combineReducers } from 'redux';
import user from './user';
import modal from './modal';
import claim from './claim';
import trees from './trees';
import receipts from './receipts';
import treeModels from './treeModels';
import order from './order';

export default combineReducers({
  user,
  modal,
  claim,
  trees,
  receipts,
  treeModels,
  order,
});
