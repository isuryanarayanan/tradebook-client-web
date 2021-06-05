export default {
  endpoints: (state, getters, rootState, rootGetters) => {
    return (key) => {
      let service = state.endpoints[key.service];
      let point = "";
      key.points.map((pt) => {
        if (pt == "BASE") {
          point = point + rootGetters["config/getServerBase"] + "/";
        } else if (pt[0] == "$") {
          point = point + pt.slice(1) + "/";
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
