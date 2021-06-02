export default {
  navigator: function ({ commit }, PAYLOAD) {
    commit("setCurrentView", PAYLOAD);
  },
  viewCompiler: function ({ rootGetters, getters, commit }) {
    let current_view = null;
    let current_view_mode = null;
    if (rootGetters["auth/getFlags"].is_authenticated) {
      current_view = "TradeView";
      current_view_mode = "AuthorizedView";
    } else {
      current_view = getters["getDefaultView"];
      current_view_mode = "UnAuthorizedView";
    }
    commit("setCurrentView", current_view);
    commit("setViewMode", current_view_mode);
  },
};
