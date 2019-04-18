import { generate } from 'shortid';
import types from 'Root/actions';

export default (state = [
  { type: 'success', text: 'ali', id: 'a' },
  { type: 'error', text: 'alssi', id: 'b' },
  { type: 'success', text: 'sfasalssi', id: 'cb' },
], action) => {
  switch (action.type) {
    case types.notifications.PUSH: {
      return [
        ...state,
        {
          ...action.notification,
          id: generate(),
        },
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
