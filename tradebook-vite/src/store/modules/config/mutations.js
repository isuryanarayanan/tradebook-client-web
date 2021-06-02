export default {
  setViewMode: function (state, PAYLOAD) {
  	state.navigation.map((e)=>{
			if (e.view_mode == PAYLOAD){
				e.hidden = false
			} else {
				e.hidden = true
			}
		});
  },
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
