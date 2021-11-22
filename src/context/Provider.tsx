import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useReducer,
} from 'react';
import auth from './reducers/auth';
import contacts from './reducers/contacts';
import authInitialState, {AuthState} from './initialStates/authState';
import contactsInitialState, {
  ContactsState,
} from './initialStates/contactsState';

export type GlobalContent = {
  authState: AuthState;
  contactsState: ContactsState;
  authDispatch: React.Dispatch<any>;
  contactsDispatch: React.Dispatch<any>;
};

export const GlobalContext = createContext<GlobalContent>({
  authState: authInitialState,
  contactsState: contactsInitialState,
  // authDispatch: () => null,
  // contactsDispatch: () => null,
  authDispatch: {} as Dispatch<SetStateAction<Partial<GlobalContent>>>,
  contactsDispatch: {} as Dispatch<SetStateAction<Partial<GlobalContent>>>,
});

const GlobalProvider = ({children}: {children: React.ReactNode}) => {
  const [authState, authDispatch] = useReducer(auth, authInitialState);
  const [contactsState, contactsDispatch] = useReducer(
    contacts,
    contactsInitialState,
  );

  return (
    <GlobalContext.Provider
      value={{authState, contactsState, authDispatch, contactsDispatch}}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
