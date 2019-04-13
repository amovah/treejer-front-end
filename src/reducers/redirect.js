import types from 'Root/actions';

export default (state = '', action) => {
  switch (action.type) {
    case types.redirect.CHANGE: {
      return action.url;
    }

    default: {
      return state;
    }
  }
};
