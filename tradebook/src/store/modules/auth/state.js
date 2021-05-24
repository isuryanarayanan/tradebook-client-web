export default () => ({
  flags: {
    is_authenticated: false,
    is_authorized: false,
  },
  user: {
    username: null,
    email: null,
    tokens: {},
  },
});
