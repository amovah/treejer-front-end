import types from 'Root/actions';

export default (state = false, action) => {
  switch (action.type) {
    case types.lazy.ON: {
      return true;
    }

    case types.lazy.OFF: {
      return false;
    }

    default: {
      return state;
    }
  }
};
