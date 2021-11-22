import {ContactsState} from 'context/initialStates/contactsState';

const contacts = (state: ContactsState, {type}: any) => {
  switch (type) {
    case 'GET_CONTACTS':
      return state;
    default:
      return state;
  }
};

export default contacts;
