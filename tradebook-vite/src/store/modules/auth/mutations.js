export default {
  toggle_auth_view_component: function (state) {
    state.auth_component_view = !state.auth_component_view;
  },
  set_tokens: function (state, PAYLOAD) {
    localStorage.setItem("ACCTOKEN", PAYLOAD.data["access_token"]);
    localStorage.setItem("REFTOKEN", PAYLOAD.data["refresh_token"]);
  },
  set_flags: function (state, PAYLOAD) {
    state.flags = PAYLOAD;
  },
};
