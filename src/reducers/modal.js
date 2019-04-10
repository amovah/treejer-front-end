import types from 'Root/actions';

export default (state = { show: false }, action) => {
  switch (action.type) {
    case types.modal.OPEN: {
      return {
        show: true,
        content: action.content,
      };
    }

    case types.modal.CLOSE: {
      return {
        show: false,
      };
    }

    default: {
      return state;
    }
  }
};
