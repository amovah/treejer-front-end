import types from 'Root/actions';

const defaults = {
  status: false,
};

export default (state = defaults, action) => {
  switch (action.type) {
    case types.claim.ON: {
      return {
        status: true,
        trees: action.trees,
        code: action.code,
      };
    }

    case types.claim.OFF: {
      return defaults;
    }

    default: {
      return state;
    }
  }
};
