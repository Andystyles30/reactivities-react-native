export type ContactsState = {
  getContacts: {
    data: {};
    error: any;
    loading: boolean;
  };
  createContact: {
    data: {};
    error: any;
    loading: boolean;
  };
  deleteContact: {
    data: {};
    error: any;
    loading: boolean;
  };
};

export default {
  getContacts: {
    data: {},
    error: null,
    loading: false,
  },
  createContact: {
    data: {},
    error: null,
    loading: false,
  },
  deleteContact: {
    data: {},
    error: null,
    loading: false,
  },
};
