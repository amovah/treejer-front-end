import types from 'Root/actions';
import pp from './profile-picture.png';

export default (state = { logged: false }, action) => {
  switch (action.type) {
    case types.user.LOGIN: {
      return {
        logged: true,
        ...action.data,
        avatar: pp,
      };
    }

    case types.user.LOGOUT: {
      return {
        logged: false,
      };
    }

    case types.user.CHANGE: {
      return {
        ...state,
        ...action.toChange,
      };
    }

    case types.user.LOAD_RECEIPTS: {
      return {
        ...state,
        receipts: action.receipts,
      };
    }

    case types.user.LOAD_TREES: {
      return {
        ...state,
        trees: action.trees,
      };
    }

    default: {
      return state;
    }
  }
};
