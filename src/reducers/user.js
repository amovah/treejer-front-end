import types from 'Root/actions';

export default (state = { logged: false }, action) => {
  switch (action.type) {
    case types.user.LOGIN: {
      return {
        logged: true,
      };
    }

    default: {
      return state;
    }
  }
};
