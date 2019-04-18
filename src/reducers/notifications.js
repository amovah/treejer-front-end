import types from 'Root/actions';

export default (state = [], action) => {
  switch (action.type) {
    case types.notifications.PUSH: {
      return [
        ...state,
        action.notification,
      ];
    }

    case types.notifications.POP: {
      return [
        ...state.slice(0, 1),
        ...state.slice(1),
      ];
    }

    default: {
      return state;
    }
  }
};
