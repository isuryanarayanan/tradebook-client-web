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
        return {};
      }
    });
    return pnavs;
  },
};
