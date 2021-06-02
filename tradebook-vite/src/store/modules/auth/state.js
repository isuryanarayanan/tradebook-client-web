export default () => ({
  endpoints: {
    authenticator: {
      GET_TOKEN: "authenticator/token",
      REF_TOKEN: "authenticator/token/refresh",
      VAL_TOKEN: "authenticator/token/validate",
    },
  },
  flags: {
    is_authenticated: false,
    is_authorized: false,
  },
  tokens: {
    access_token: localStorage.getItem("ACCTOKEN"),
    refresh_token: localStorage.getItem("REFTOKEN"),
  },
  auth_component_view: false,
  user: {
    username: null,
    email: null,
  },
});
