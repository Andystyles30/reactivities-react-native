import {AuthState} from 'context/initialStates/authState';

const auth = (state: AuthState, {type}: any) => {
  switch (type) {
    case 'LOGIN':
      return state;
    default:
      return state;
  }
};

export default auth;
