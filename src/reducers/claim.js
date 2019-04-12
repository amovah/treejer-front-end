import types from 'Root/actions';

const defaults = {
  status: false,
  trees: [],
};

export default (state = defaults, action) => {
  switch (action.type) {
    case types.claim.ON: {
      return {
        ...state,
        status: true,
      };
    }

    default: {
      return state;
    }
  }
};
