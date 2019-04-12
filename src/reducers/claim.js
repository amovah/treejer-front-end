import types from 'Root/actions';

export default (state = false, action) => {
  switch (action.type) {
    case types.claim.CLAIM: {
      return true;
    }

    default: {
      return state;
    }
  }
};
