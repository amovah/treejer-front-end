import types from 'Root/actions';
import pp from './profile-picture.png';

export default (state = { logged: false }, action) => {
  switch (action.type) {
    case types.user.LOGIN: {
      return {
        logged: true,
        name: 'Ali Movahedi',
        avatar: pp,
        invited: false,
        username: '@AliTheGreat',
      };
    }

    case types.user.LOGOUT: {
      return {
        logged: false,
      };
    }

    default: {
      return state;
    }
  }
};
