import types from 'Root/actions';
import pp from './profile-picture.png';

export default (state = { logged: false }, action) => {
  switch (action.type) {
    case types.user.LOGIN: {
      return {
        logged: true,
        name: 'Ali',
        avatar: pp,
      };
    }

    default: {
      return state;
    }
  }
};
