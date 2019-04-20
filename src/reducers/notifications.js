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
      return state.slice(1);
    }

    case types.notifications.REMOVE: {
      const index = state.findIndex(i => i.id === action.id);

      return [
        ...state.slice(0, index),
        ...state.slice(index + 1),
      ];
    }

    default: {
      return state;
    }
  }
};
