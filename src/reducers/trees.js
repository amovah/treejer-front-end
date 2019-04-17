import types from 'Root/actions';

export default (state = [], action) => {
  switch (action.type) {
    case types.trees.LOAD: {
      return action.trees;
    }

    default: {
      return state;
    }
  }
};
