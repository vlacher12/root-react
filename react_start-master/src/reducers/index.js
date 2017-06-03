import { combineReducers } from 'redux';
import user from './user';
import runtime from './runtime';
import intl from './intl';
import selectProduct from './products';
import selectMaterial from './materials';

export default function createRootReducer({ apolloClient }) {
  return combineReducers({
    apollo: apolloClient.reducer(),
    user,
    runtime,
    intl,
    selectProduct,
    selectMaterial,
  });
}
