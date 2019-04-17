import types from 'Root/actions';

export default (state = '', action) => {
  switch (action.type) {
    case types.redirect.SET: {
      return action.url;
    }

    case types.redirect.CLEAR: {
      return '';
    }

    default: {
      return state;
    }
  }
};
