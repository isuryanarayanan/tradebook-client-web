export default {
  endpoints: (state, getters, rootState, rootGetters) => {
    return (key) => {
      let service = state.endpoints[key.service];
      let point = "";
      key.points.map((pt) => {
        if (pt == "BASE") {
          console.log(rootGetters);
          point = point + rootGetters["config/getServerBase"] + "/";
        } else {
          point = point + service[pt] + "/";
        }
      });
      return point;
    };
  },
  getFlags: (state) => {
    return state.flags;
  },
  getTokens: (state) => {
    return state.tokens;
  },
  getAuthComponentView: (state) => {
    return state.auth_component_view;
  },
};
