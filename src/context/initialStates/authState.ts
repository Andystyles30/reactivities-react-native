export type AuthState = {
  isLoggedIn: boolean;
  data?: {};
  error: any;
  loading: boolean;
};

export default {
  isLoggedIn: false,
  data: {},
  error: null,
  loading: false,
};
