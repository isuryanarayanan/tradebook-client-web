export default {
  setCurrentView: function (state, PAYLOAD) {
    state.current_view = PAYLOAD;
    state.navigation.map((e) => {
      if (e.view == PAYLOAD) {
        e.current = true;
      } else {
        e.current = false;
      }
    });
  },
};
