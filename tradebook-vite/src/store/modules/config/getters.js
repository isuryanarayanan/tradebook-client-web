export default {
  getDefaultView: (state) => {
    return state.default_view;
  },
  getCurrentView: (state) => {
    return state.current_view;
  },
  getNavigations: (state) => {
    return state.navigation;
  },
  getPossibleNavigations: (state) => {
    var pnavs = state.navigation.map((e) => {
      if (e.hidden == false) {
        return e;
      } else {
        return undefined;
      }
    });
    return pnavs.filter(function (e) {
      return e !== undefined;
    });
  },
  getServerBase: (state) => {
		return state.endpoints['BASE'] 
  },
  endpoints: (state, rootGetters) => {
    return (key) => {
      let service = state.endpoints[key.service];
      let point = "";
      key.points.map((pt) => {
        if (pt == "BASE") {
          point = point + rootGetters["config/getServerBase"];
        } else {
          point = point + service[pt] + "/";
        }
      });
      return point;
    };
  },
};
