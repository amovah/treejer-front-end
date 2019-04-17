import types from 'Root/actions';

const defaults = {
  status: false,
  trees: [],
};

export default (state = defaults, action) => {
  switch (action.type) {
    case types.claim.ON: {
      return {
        status: true,
        trees: action.trees,
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
