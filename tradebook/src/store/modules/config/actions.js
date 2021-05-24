export default {
  navigator: function ({ commit }, PAYLOAD) {
    commit("setCurrentView", PAYLOAD);
  },
  viewCompiler: function ({ getters, commit }) {
    let current_view = null;
    if (getters["auth/getFlags"].is_authenticated) {
      current_view = "TradeView";
    } else {
      current_view = getters["config/getDefaultView"];
    }
    commit("setCurrentView", current_view);
  },
};
